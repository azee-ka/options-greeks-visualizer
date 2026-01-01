'use client';

import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Area, AreaChart } from 'recharts';
import { OptionParams, blackScholes } from '@/lib/blackScholes';
import { OptionLeg, calculateStrategyPayoff, analyzeStrategy, STRATEGY_TEMPLATES } from '@/lib/strategies';
import { Plus, Trash2, TrendingUp, TrendingDown, Layers, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StrategyBuilderProps {
  baseParams: OptionParams;
  isDarkMode: boolean;
}

export default function StrategyBuilder({ baseParams, isDarkMode }: StrategyBuilderProps) {
  const [legs, setLegs] = useState<OptionLeg[]>([]);
  const [showTemplates, setShowTemplates] = useState(true);

  const addLeg = () => {
    const newLeg: OptionLeg = {
      ...baseParams,
      quantity: 1,
      premium: blackScholes(baseParams).price,
    };
    setLegs([...legs, newLeg]);
    setShowTemplates(false);
  };

  const removeLeg = (index: number) => {
    setLegs(legs.filter((_, i) => i !== index));
  };

  const updateLeg = (index: number, updates: Partial<OptionLeg>) => {
    const newLegs = [...legs];
    newLegs[index] = { ...newLegs[index], ...updates };
    
    if (updates.K || updates.T || updates.type || updates.sigma) {
      const { S, r } = baseParams;
      newLegs[index].premium = blackScholes({
        S,
        K: newLegs[index].K,
        T: newLegs[index].T,
        r,
        sigma: newLegs[index].sigma,
        type: newLegs[index].type,
      }).price;
    }
    
    setLegs(newLegs);
  };

  const loadTemplate = (templateIndex: number) => {
    const template = STRATEGY_TEMPLATES[templateIndex];
    const { S, r, sigma } = baseParams;
    
    const newLegs: OptionLeg[] = template.legs.map(leg => ({
      S,
      K: leg.K,
      T: leg.T,
      r,
      sigma,
      type: leg.type,
      quantity: leg.quantity,
      premium: blackScholes({
        S,
        K: leg.K,
        T: leg.T,
        r,
        sigma,
        type: leg.type,
      }).price,
    }));
    
    setLegs(newLegs);
    setShowTemplates(false);
  };

  const payoffData = useMemo(() => {
    if (legs.length === 0) return [];

    const priceRange = baseParams.S * 0.5;
    const payoff = calculateStrategyPayoff(
      legs,
      {
        min: baseParams.S - priceRange,
        max: baseParams.S + priceRange,
        steps: 100,
      },
      baseParams.T
    );

    return payoff;
  }, [legs, baseParams]);

  const analysis = useMemo(() => {
    if (payoffData.length === 0) return null;
    return analyzeStrategy(payoffData);
  }, [payoffData]);

  const totalCost = useMemo(() => {
    return legs.reduce((sum, leg) => sum + leg.premium * leg.quantity * 100, 0);
  }, [legs]);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-4 space-y-2 text-xs ${
          isDarkMode ? 'border-violet-500/30' : 'border-violet-500/40'
        }`}>
          <div className="font-bold text-violet-400 neo-number">
            Price: ${payload[0].payload.price.toFixed(2)}
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Current P&L:</span>
            <span className={`neo-number font-bold ${payload[0].payload.pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${payload[0].payload.pnl.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Expiry P&L:</span>
            <span className={`neo-number font-bold ${payload[0].payload.pnlAtExpiry >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              ${payload[0].payload.pnlAtExpiry.toFixed(2)}
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8">
      <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-8 space-y-8`}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className={`text-2xl font-bold flex items-center gap-3 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <Layers className="text-fuchsia-400" size={24} />
              Strategy Builder
            </h2>
            <p className={`text-sm mt-1 ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>Build multi-leg option strategies</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowTemplates(!showTemplates)}
              className={isDarkMode ? 'neo-btn-secondary' : 'neo-btn-secondary-light'}
            >
              {showTemplates ? 'Hide' : 'Show'} Templates
            </button>
            <button onClick={addLeg} className="neo-btn-primary flex items-center gap-2">
              <Plus size={16} />
              Add Leg
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showTemplates && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {STRATEGY_TEMPLATES.map((template, index) => (
                <button
                  key={index}
                  onClick={() => loadTemplate(index)}
                  className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-5 text-left space-y-3 transition-all group ${
                    isDarkMode ? 'hover:border-violet-500/30' : 'hover:border-violet-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className={`font-semibold text-sm group-hover:text-violet-400 transition-colors ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {template.name}
                    </div>
                    <Zap size={14} className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className={`text-xs leading-relaxed ${
                    isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                  }`}>
                    {template.description}
                  </div>
                  <div className="text-xs text-violet-400 font-mono">
                    {template.legs.length} leg{template.legs.length > 1 ? 's' : ''}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {legs.length > 0 && (
          <div className="space-y-4">
            <div className={`text-sm font-semibold flex items-center gap-2 ${
              isDarkMode ? 'text-zinc-300' : 'text-gray-700'
            }`}>
              <div className="w-2 h-2 rounded-full bg-violet-400" />
              Position Legs ({legs.length})
            </div>
            <AnimatePresence>
              {legs.map((leg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-5 space-y-4`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-mono font-bold ${
                        isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                      }`}>#{index + 1}</span>
                      <div className={`flex gap-2 p-1 rounded-lg border ${
                        isDarkMode ? 'bg-black/60 border-zinc-800' : 'bg-white/60 border-gray-200'
                      }`}>
                        <button
                          onClick={() => updateLeg(index, { type: 'call' })}
                          className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                            leg.type === 'call'
                              ? 'bg-emerald-500 text-white'
                              : isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          <TrendingUp size={12} className="inline mr-1" />
                          Call
                        </button>
                        <button
                          onClick={() => updateLeg(index, { type: 'put' })}
                          className={`px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                            leg.type === 'put'
                              ? 'bg-rose-500 text-white'
                              : isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          <TrendingDown size={12} className="inline mr-1" />
                          Put
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeLeg(index)}
                      className="p-2 rounded-lg text-rose-400 hover:bg-rose-500/10 transition-all"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className={`text-xs block mb-2 ${
                        isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                      }`}>Strike</label>
                      <input
                        type="number"
                        value={leg.K}
                        onChange={(e) => updateLeg(index, { K: parseFloat(e.target.value) })}
                        className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full text-sm`}
                      />
                    </div>
                    <div>
                      <label className={`text-xs block mb-2 ${
                        isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                      }`}>Time (years)</label>
                      <input
                        type="number"
                        value={leg.T.toFixed(3)}
                        onChange={(e) => updateLeg(index, { T: parseFloat(e.target.value) })}
                        className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full text-sm`}
                        step="0.01"
                      />
                    </div>
                    <div>
                      <label className={`text-xs block mb-2 ${
                        isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                      }`}>Quantity</label>
                      <input
                        type="number"
                        value={leg.quantity}
                        onChange={(e) => updateLeg(index, { quantity: parseInt(e.target.value) })}
                        className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full text-sm`}
                      />
                    </div>
                    <div>
                      <label className={`text-xs block mb-2 ${
                        isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                      }`}>Premium</label>
                      <div className={`neo-input text-sm text-cyan-400 font-mono ${
                        isDarkMode ? '' : 'neo-input-light'
                      }`}>
                        ${leg.premium.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {legs.length > 0 && analysis && (
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl border ${
            isDarkMode 
              ? 'bg-gradient-to-br from-zinc-900/50 to-black/50 border-zinc-800/50' 
              : 'bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200/50'
          }`}>
            {[
              { label: 'Net Cost', value: `$${Math.abs(totalCost).toFixed(2)}`, color: totalCost >= 0 ? 'rose' : 'emerald' },
              { label: 'Max Profit', value: analysis.maxProfit === Infinity ? 'Unlimited' : `$${analysis.maxProfit.toFixed(2)}`, color: 'emerald' },
              { label: 'Max Loss', value: analysis.maxLoss === -Infinity ? 'Unlimited' : `$${Math.abs(analysis.maxLoss).toFixed(2)}`, color: 'rose' },
              { label: 'Breakevens', value: analysis.breakevens.length > 0 ? analysis.breakevens.map(be => `$${be.toFixed(2)}`).join(', ') : 'None', color: 'violet' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <div className={`text-xs uppercase tracking-wider ${
                  isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                }`}>{stat.label}</div>
                <div className={`neo-number text-lg font-bold text-${stat.color}-400`}>
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {legs.length > 0 && payoffData.length > 0 && (
        <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-8 space-y-6`}>
          <h3 className={`text-xl font-bold flex items-center gap-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Zap className="text-violet-400" size={20} />
            Combined Payoff
          </h3>
          <div className={`h-[400px] p-4 rounded-xl border ${
            isDarkMode ? 'bg-black/40 border-zinc-800/50' : 'bg-white/60 border-gray-200/50'
          }`}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={payoffData} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                <defs>
                  <linearGradient id="stratProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
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
                  x={baseParams.S}
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
                
                <Area
                  type="monotone"
                  dataKey="pnlAtExpiry"
                  stroke="none"
                  fill="url(#stratProfit)"
                  fillOpacity={1}
                />
                
                <Line
                  type="monotone"
                  dataKey="pnl"
                  stroke="#a78bfa"
                  strokeWidth={2}
                  dot={false}
                  filter="drop-shadow(0 0 6px rgba(167, 139, 250, 0.5))"
                />
                
                <Line
                  type="monotone"
                  dataKey="pnlAtExpiry"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={false}
                  filter="drop-shadow(0 0 6px rgba(16, 185, 129, 0.5))"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
}