'use client';

import React from 'react';
import { Greeks } from '@/lib/blackScholes';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Clock, Zap, DollarSign, Sparkles } from 'lucide-react';

interface GreeksDisplayProps {
  greeks: Greeks;
  price: number;
  isDarkMode: boolean;
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
  cyan: { 
    text: 'text-cyan-400', 
    bg: 'bg-cyan-500/10', 
    bgLight: 'bg-cyan-500/20',
    border: 'border-cyan-500/30', 
    borderLight: 'border-cyan-500/40',
    glow: 'shadow-[0_0_20px_rgba(6,182,212,0.2)]' 
  },
  violet: { 
    text: 'text-violet-400', 
    bg: 'bg-violet-500/10', 
    bgLight: 'bg-violet-500/20',
    border: 'border-violet-500/30', 
    borderLight: 'border-violet-500/40',
    glow: 'shadow-[0_0_20px_rgba(139,92,246,0.2)]' 
  },
  amber: { 
    text: 'text-amber-400', 
    bg: 'bg-amber-500/10', 
    bgLight: 'bg-amber-500/20',
    border: 'border-amber-500/30', 
    borderLight: 'border-amber-500/40',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.2)]' 
  },
  emerald: { 
    text: 'text-emerald-400', 
    bg: 'bg-emerald-500/10', 
    bgLight: 'bg-emerald-500/20',
    border: 'border-emerald-500/30', 
    borderLight: 'border-emerald-500/40',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
  },
  fuchsia: { 
    text: 'text-fuchsia-400', 
    bg: 'bg-fuchsia-500/10', 
    bgLight: 'bg-fuchsia-500/20',
    border: 'border-fuchsia-500/30', 
    borderLight: 'border-fuchsia-500/40',
    glow: 'shadow-[0_0_20px_rgba(217,70,239,0.2)]' 
  },
};

export default function GreeksDisplay({ greeks, price, isDarkMode }: GreeksDisplayProps) {
  return (
    <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-8 space-y-8`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Sparkles className="text-violet-400" size={24} />
            Greeks Analysis
          </h2>
          <p className={`text-sm mt-1 ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>Real-time risk metrics</p>
        </div>
        <div className="text-right">
          <div className={`text-xs uppercase tracking-wider ${
            isDarkMode ? 'text-zinc-500' : 'text-gray-500'
          }`}>Option Price</div>
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
              className={`relative p-5 rounded-xl border hover:${colors.glow} transition-all duration-300 group overflow-hidden ${
                isDarkMode 
                  ? `bg-black/40 ${colors.border}` 
                  : `bg-white/60 ${colors.borderLight}`
              }`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode ? colors.bg : colors.bgLight
              }`} />
              
              {/* Content */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <Icon className={colors.text} size={20} />
                  <span className={`neo-number text-2xl font-bold ${colors.text}`}>
                    {greek.format(value)}
                  </span>
                </div>
                <div>
                  <div className={`font-semibold text-sm ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{greek.name}</div>
                  <div className={`text-xs leading-relaxed mt-1 ${
                    isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                  }`}>
                    {greek.description}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interpretations */}
      <div className={`p-6 rounded-xl border space-y-4 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-zinc-900/50 to-black/50 border-zinc-800/50' 
          : 'bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200/50'
      }`}>
        <h3 className={`text-sm font-semibold flex items-center gap-2 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          <Activity size={16} className="text-cyan-400" />
          Key Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Delta {greeks.delta.toFixed(2)}:</span>
              <p className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>
                ${Math.abs(greeks.delta).toFixed(2)} move per $1 stock change
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Gamma {greeks.gamma.toFixed(4)}:</span>
              <p className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>
                {greeks.gamma > 0.05 ? 'High sensitivity - delta unstable' : 'Low sensitivity - delta stable'}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Theta {greeks.theta.toFixed(2)}:</span>
              <p className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>
                Loses ${Math.abs(greeks.theta).toFixed(2)} daily from time decay
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
            <div className="space-y-1">
              <span className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>Vega {greeks.vega.toFixed(2)}:</span>
              <p className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>
                +${greeks.vega.toFixed(2)} per 1% volatility increase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}