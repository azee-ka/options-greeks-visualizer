'use client';

import React from 'react';
import { OptionParams } from '@/lib/blackScholes';
import { TrendingUp, TrendingDown, Sparkles, DollarSign, Clock, Percent, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface OptionCalculatorProps {
  params: OptionParams;
  onChange: (params: OptionParams) => void;
  isDarkMode: boolean;
}

export default function OptionCalculator({ params, onChange, isDarkMode }: OptionCalculatorProps) {
  const handleChange = (field: keyof OptionParams, value: string | number) => {
    onChange({ ...params, [field]: value });
  };

  return (
    <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-8 space-y-8`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl font-bold flex items-center gap-3 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <Sparkles className="text-cyan-400" size={24} />
            Option Parameters
          </h2>
          <p className={`text-sm mt-1 ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>Configure your option contract</p>
        </div>
        
        {/* Call/Put Toggle */}
        <div className={`flex gap-2 p-1 rounded-xl border ${
          isDarkMode ? 'bg-black/60 border-zinc-800' : 'bg-white/60 border-gray-200'
        }`}>
          <button
            onClick={() => handleChange('type', 'call')}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
              params.type === 'call'
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                : isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <TrendingUp size={16} />
            Call
          </button>
          <button
            onClick={() => handleChange('type', 'put')}
            className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 ${
              params.type === 'put'
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                : isDarkMode ? 'text-zinc-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <TrendingDown size={16} />
            Put
          </button>
        </div>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Spot Price */}
        <div className="space-y-3">
          <label className={`flex items-center justify-between text-sm font-medium ${
            isDarkMode ? 'text-zinc-300' : 'text-gray-700'
          }`}>
            <span className="flex items-center gap-2">
              <DollarSign size={16} className="text-cyan-400" />
              Spot Price (S)
            </span>
            <span className="neo-number text-cyan-400 text-lg">${params.S.toFixed(2)}</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 font-mono">$</span>
            <input
              type="number"
              value={params.S}
              onChange={(e) => handleChange('S', parseFloat(e.target.value) || 0)}
              className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full pl-10`}
              step="0.01"
            />
          </div>
          <input
            type="range"
            min="50"
            max="150"
            step="0.5"
            value={params.S}
            onChange={(e) => handleChange('S', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Strike Price */}
        <div className="space-y-3">
          <label className={`flex items-center justify-between text-sm font-medium ${
            isDarkMode ? 'text-zinc-300' : 'text-gray-700'
          }`}>
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-violet-400" />
              Strike Price (K)
            </span>
            <span className="neo-number text-violet-400 text-lg">${params.K.toFixed(2)}</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-violet-400 font-mono">$</span>
            <input
              type="number"
              value={params.K}
              onChange={(e) => handleChange('K', parseFloat(e.target.value) || 0)}
              className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full pl-10`}
              step="0.01"
            />
          </div>
          <input
            type="range"
            min="50"
            max="150"
            step="0.5"
            value={params.K}
            onChange={(e) => handleChange('K', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Volatility */}
        <div className="space-y-3">
          <label className={`flex items-center justify-between text-sm font-medium ${
            isDarkMode ? 'text-zinc-300' : 'text-gray-700'
          }`}>
            <span className="flex items-center gap-2">
              <Percent size={16} className="text-fuchsia-400" />
              Volatility (σ)
            </span>
            <span className="neo-number text-fuchsia-400 text-lg">{(params.sigma * 100).toFixed(1)}%</span>
          </label>
          <input
            type="number"
            value={(params.sigma * 100).toFixed(1)}
            onChange={(e) => handleChange('sigma', parseFloat(e.target.value) / 100 || 0)}
            className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full`}
            step="0.1"
            min="0.1"
            max="200"
          />
          <input
            type="range"
            min="5"
            max="100"
            step="1"
            value={params.sigma * 100}
            onChange={(e) => handleChange('sigma', parseFloat(e.target.value) / 100)}
            className="w-full"
          />
        </div>

        {/* Time to Expiration */}
        <div className="space-y-3">
          <label className={`flex items-center justify-between text-sm font-medium ${
            isDarkMode ? 'text-zinc-300' : 'text-gray-700'
          }`}>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-amber-400" />
              Time to Expiry (T)
            </span>
            <span className="neo-number text-amber-400 text-lg">{(params.T * 365).toFixed(0)} days</span>
          </label>
          <input
            type="number"
            value={params.T.toFixed(3)}
            onChange={(e) => handleChange('T', parseFloat(e.target.value) || 0)}
            className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full`}
            step="0.01"
            min="0.01"
            max="2"
          />
          <input
            type="range"
            min="0.01"
            max="1"
            step="0.01"
            value={params.T}
            onChange={(e) => handleChange('T', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Risk-free Rate */}
        <div className="space-y-3">
          <label className={`flex items-center justify-between text-sm font-medium ${
            isDarkMode ? 'text-zinc-300' : 'text-gray-700'
          }`}>
            <span className="flex items-center gap-2">
              <TrendingUp size={16} className="text-emerald-400" />
              Risk-free Rate (r)
            </span>
            <span className="neo-number text-emerald-400 text-lg">{(params.r * 100).toFixed(2)}%</span>
          </label>
          <input
            type="number"
            value={(params.r * 100).toFixed(2)}
            onChange={(e) => handleChange('r', parseFloat(e.target.value) / 100 || 0)}
            className={`neo-input ${isDarkMode ? '' : 'neo-input-light'} w-full`}
            step="0.01"
            min="0"
            max="20"
          />
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={params.r * 100}
            onChange={(e) => handleChange('r', parseFloat(e.target.value) / 100)}
            className="w-full"
          />
        </div>

        {/* Quick Presets */}
        <div className="space-y-3">
          <label className={`block text-sm font-medium ${
            isDarkMode ? 'text-zinc-300' : 'text-gray-700'
          }`}>
            Quick Presets
          </label>
          <div className="flex gap-2">
            {[
              { label: 'ATM', S: 100, K: 100 },
              { label: 'OTM', S: 100, K: 110 },
              { label: 'ITM', S: 100, K: 90 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => onChange({
                  S: preset.S,
                  K: preset.K,
                  T: 0.25,
                  r: 0.05,
                  sigma: 0.20,
                  type: params.type
                })}
                className={`flex-1 py-2 text-xs ${
                  isDarkMode ? 'neo-btn-secondary' : 'neo-btn-secondary-light'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Moneyness Indicator */}
      <div className={`relative p-6 rounded-xl border ${
        isDarkMode 
          ? 'bg-gradient-to-br from-zinc-900/50 to-black/50 border-zinc-800/50' 
          : 'bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200/50'
      }`}>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${
            isDarkMode ? 'text-zinc-400' : 'text-gray-600'
          }`}>Moneyness Status:</span>
          <motion.span
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className={`px-4 py-2 rounded-lg font-bold text-sm border ${
              params.type === 'call'
                ? params.S > params.K
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                  : params.S < params.K
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                  : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                : params.S < params.K
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                : params.S > params.K
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                : 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
            }`}
          >
            {params.S > params.K ? 'In-The-Money' : params.S < params.K ? 'Out-The-Money' : 'At-The-Money'}
          </motion.span>
        </div>
      </div>
    </div>
  );
}