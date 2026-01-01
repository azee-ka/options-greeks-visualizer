'use client';

import React from 'react';
import { Greeks } from '@/lib/blackScholes';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Clock, Zap, DollarSign, Sparkles } from 'lucide-react';

interface GreeksDisplayProps {
  greeks: Greeks;
  price: number;
}

const greekInfo = [
  {
    name: 'Delta',
    key: 'delta' as keyof Greeks,
    icon: TrendingUp,
    color: 'cyan',
    description: 'Option price change per $1 underlying move',
    format: (val: number) => val.toFixed(4),
  },
  {
    name: 'Gamma',
    key: 'gamma' as keyof Greeks,
    icon: Activity,
    color: 'violet',
    description: 'Delta change per $1 underlying move',
    format: (val: number) => val.toFixed(4),
  },
  {
    name: 'Theta',
    key: 'theta' as keyof Greeks,
    icon: Clock,
    color: 'amber',
    description: 'Daily time decay',
    format: (val: number) => val.toFixed(4),
  },
  {
    name: 'Vega',
    key: 'vega' as keyof Greeks,
    icon: Zap,
    color: 'emerald',
    description: 'Change per 1% volatility',
    format: (val: number) => val.toFixed(4),
  },
  {
    name: 'Rho',
    key: 'rho' as keyof Greeks,
    icon: DollarSign,
    color: 'fuchsia',
    description: 'Change per 1% interest rate',
    format: (val: number) => val.toFixed(4),
  },
];

const colorMap = {
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/30', glow: 'shadow-[0_0_20px_rgba(139,92,246,0.2)]' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30', glow: 'shadow-[0_0_20px_rgba(251,191,36,0.2)]' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]' },
  fuchsia: { text: 'text-fuchsia-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/30', glow: 'shadow-[0_0_20px_rgba(217,70,239,0.2)]' },
};

export default function GreeksDisplay({ greeks, price }: GreeksDisplayProps) {
  return (
    <div className="neo-card p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <Sparkles className="text-violet-400" size={24} />
            Greeks Analysis
          </h2>
          <p className="text-sm text-zinc-500 mt-1">Real-time risk metrics</p>
        </div>
        <div className="text-right">
          <div className="text-xs text-zinc-500 uppercase tracking-wider">Option Price</div>
          <div className="text-4xl font-bold neo-number text-gradient mt-1">
            ${price.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Greeks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {greekInfo.map((greek, index) => {
          const Icon = greek.icon;
          const value = greeks[greek.key];
          const colors = colorMap[greek.color as keyof typeof colorMap];
          
          return (
            <motion.div
              key={greek.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className={`relative p-5 rounded-xl bg-black/40 border ${colors.border} hover:${colors.glow} transition-all duration-300 group overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <Icon className={colors.text} size={20} />
                  <span className={`neo-number text-2xl font-bold ${colors.text}`}>
                    {greek.format(value)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{greek.name}</div>
                  <div className="text-xs text-zinc-500 leading-relaxed mt-1">
                    {greek.description}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interpretations */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50 space-y-4">
        <h3 className="text-sm font-semibold text-white flex items-center gap-2">
          <Activity size={16} className="text-cyan-400" />
          Key Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className="text-zinc-400">Delta {greeks.delta.toFixed(2)}:</span>
              <p className="text-zinc-300">
                ${Math.abs(greeks.delta).toFixed(2)} move per $1 stock change
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className="text-zinc-400">Gamma {greeks.gamma.toFixed(4)}:</span>
              <p className="text-zinc-300">
                {greeks.gamma > 0.05 ? 'High sensitivity - delta unstable' : 'Low sensitivity - delta stable'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className="text-zinc-400">Theta {greeks.theta.toFixed(2)}:</span>
              <p className="text-zinc-300">
                Loses ${Math.abs(greeks.theta).toFixed(2)} daily from time decay
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className="text-zinc-400">Vega {greeks.vega.toFixed(2)}:</span>
              <p className="text-zinc-300">
                +${greeks.vega.toFixed(2)} per 1% volatility increase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}