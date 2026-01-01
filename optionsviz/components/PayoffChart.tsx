'use client';

import React, { useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, AreaChart } from 'recharts';
import { OptionParams, blackScholes } from '@/lib/blackScholes';
import { TrendingUp, BarChart3 } from 'lucide-react';

interface PayoffChartProps {
  params: OptionParams;
  isDarkMode: boolean;
}

export default function PayoffChart({ params, isDarkMode }: PayoffChartProps) {
  const payoffData = useMemo(() => {
    const data = [];
    const priceRange = params.S * 0.5;
    const minPrice = params.S - priceRange;
    const maxPrice = params.S + priceRange;
    const steps = 100;
    const step = (maxPrice - minPrice) / steps;

    for (let i = 0; i <= steps; i++) {
      const S = minPrice + i * step;
      
      let intrinsic: number;
      if (params.type === 'call') {
        intrinsic = Math.max(0, S - params.K);
      } else {
        intrinsic = Math.max(0, params.K - S);
      }
      
      const currentValue = blackScholes({ ...params, S }).price;
      const premium = blackScholes(params).price;
      const pnlNow = (currentValue - premium) * 100;
      const pnlExpiry = (intrinsic - premium) * 100;

      data.push({
        price: S,
        pnlNow,
        pnlExpiry,
        currentValue: currentValue * 100,
        intrinsic: intrinsic * 100,
      });
    }

    return data;
  }, [params]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-4 space-y-2 text-xs ${
          isDarkMode ? 'border-cyan-500/30' : 'border-cyan-500/40'
        }`}>
          <div className="font-bold text-cyan-400 neo-number">
            Price: ${payload[0].payload.price.toFixed(2)}
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Current P&L:</span>
            <span className={`neo-number font-bold ${payload[0].payload.pnlNow >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${payload[0].payload.pnlNow.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Expiry P&L:</span>
            <span className={`neo-number font-bold ${payload[0].payload.pnlExpiry >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${payload[0].payload.pnlExpiry.toFixed(2)}
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  const breakeven = params.type === 'call' 
    ? params.K + blackScholes(params).price 
    : params.K - blackScholes(params).price;

  return (
    <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-8 space-y-6`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <BarChart3 className="text-fuchsia-400" size={24} />
            Payoff Diagram
          </h2>
          <p className={`text-sm mt-1 ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>Profit & Loss analysis</p>
        </div>
        <div className="flex gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }} />
            <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Current P&L</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-1 rounded-full bg-emerald-400" style={{ boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }} />
            <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>P&L at Expiry</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className={`h-[400px] p-4 rounded-xl border ${
        isDarkMode ? 'bg-black/40 border-zinc-800/50' : 'bg-white/60 border-gray-200/50'
      }`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={payoffData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id="profitGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lossGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0} />
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDarkMode ? '#27272a' : '#d4d4d8'} 
              opacity={0.3} 
            />
            
            <XAxis
              dataKey="price"
              stroke={isDarkMode ? '#52525b' : '#a1a1aa'}
              tick={{ fill: isDarkMode ? '#71717a' : '#71717a', fontSize: 11 }}
              tickFormatter={(value) => `$${value.toFixed(0)}`}
            />
            
            <YAxis
              stroke={isDarkMode ? '#52525b' : '#a1a1aa'}
              tick={{ fill: isDarkMode ? '#71717a' : '#71717a', fontSize: 11 }}
              tickFormatter={(value) => `$${value.toFixed(0)}`}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <ReferenceLine 
              y={0} 
              stroke={isDarkMode ? '#3f3f46' : '#a1a1aa'} 
              strokeWidth={2} 
            />
            
            <ReferenceLine
              x={params.S}
              stroke="#06b6d4"
              strokeWidth={2}
              strokeDasharray="5 5"
              label={{
                value: 'Current',
                position: 'top',
                fill: '#06b6d4',
                fontSize: 11,
              }}
            />
            
            <ReferenceLine
              x={params.K}
              stroke="#a855f7"
              strokeWidth={2}
              strokeDasharray="5 5"
              label={{
                value: 'Strike',
                position: 'top',
                fill: '#a855f7',
                fontSize: 11,
              }}
            />
            
            <Area
              type="monotone"
              dataKey="pnlExpiry"
              stroke="none"
              fill="url(#profitGlow)"
              fillOpacity={1}
            />
            
            <Line
              type="monotone"
              dataKey="pnlNow"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={false}
              filter="drop-shadow(0 0 6px rgba(6, 182, 212, 0.5))"
            />
            
            <Line
              type="monotone"
              dataKey="pnlExpiry"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
              filter="drop-shadow(0 0 6px rgba(16, 185, 129, 0.5))"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Current Value', value: `$${(blackScholes(params).price * 100).toFixed(2)}`, color: 'cyan' },
          { label: 'Max Profit', value: params.type === 'call' ? 'Unlimited' : `$${((params.K - blackScholes(params).price) * 100).toFixed(2)}`, color: 'emerald' },
          { label: 'Max Loss', value: `$${(blackScholes(params).price * 100).toFixed(2)}`, color: 'rose' },
          { label: 'Breakeven', value: `$${breakeven.toFixed(2)}`, color: 'violet' },
        ].map((metric) => (
          <div key={metric.label} className={`p-4 rounded-xl border space-y-2 ${
            isDarkMode ? 'bg-black/40 border-zinc-800/50' : 'bg-white/60 border-gray-200/50'
          }`}>
            <div className={`text-xs uppercase tracking-wider ${
              isDarkMode ? 'text-zinc-500' : 'text-gray-500'
            }`}>{metric.label}</div>
            <div className={`neo-number text-xl font-bold text-${metric.color}-400`}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}