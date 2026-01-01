'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Box, Layers, Sparkles, Zap, Activity } from 'lucide-react';
import Header from '@/components/Header';
import OptionCalculator from '@/components/OptionCalculator';
import GreeksDisplay from '@/components/GreeksDisplay';
import Surface3D from '@/components/Surface3D';
import PayoffChart from '@/components/PayoffChart';
import StrategyBuilder from '@/components/StrategyBuilder';
import { OptionParams, blackScholes, calculateGreeks } from '@/lib/blackScholes';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [params, setParams] = useState<OptionParams>({
    S: 100,
    K: 100,
    T: 0.25,
    r: 0.05,
    sigma: 0.30,
    type: 'call',
  });

  const [activeTab, setActiveTab] = useState<'calculator' | 'surface' | 'strategy'>('calculator');

  const result = blackScholes(params);
  const greeks = calculateGreeks(params);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-zinc-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Animated Background Grid */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? 'rgba(6, 182, 212, 0.03)' : 'rgba(6, 182, 212, 0.08)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? 'rgba(6, 182, 212, 0.03)' : 'rgba(6, 182, 212, 0.08)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        <div className={`absolute top-0 left-1/4 w-96 h-96 ${
          isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/20'
        } rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 ${
          isDarkMode ? 'bg-violet-500/10' : 'bg-violet-500/20'
        } rounded-full blur-3xl`} />
      </div>

      {/* Header */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm ${
              isDarkMode 
                ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' 
                : 'bg-cyan-500/20 border-cyan-500/30 text-cyan-700'
            }`}>
              <Zap size={16} className="animate-pulse" />
              <span>Real-time Black-Scholes Analytics</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Options Greeks</span>
              <br />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Visualized in Real-Time</span>
            </h2>
            
            <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              Advanced 3D volatility surfaces, instant Greeks calculation, and multi-leg strategy optimization powered by quantum-level precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className={`neo-badge ${isDarkMode ? '' : 'neo-badge-light'}`}>
                <Activity size={14} className="text-cyan-400" />
                <span className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>Live Calculations</span>
              </div>
              <div className={`neo-badge ${isDarkMode ? '' : 'neo-badge-light'}`}>
                <Box size={14} className="text-violet-400" />
                <span className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>3D Surfaces</span>
              </div>
              <div className={`neo-badge ${isDarkMode ? '' : 'neo-badge-light'}`}>
                <Layers size={14} className="text-fuchsia-400" />
                <span className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>8+ Strategies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className={`sticky top-[73px] z-40 backdrop-blur-2xl border-y transition-colors duration-300 ${
        isDarkMode ? 'bg-black/60 border-zinc-800/50' : 'bg-white/60 border-gray-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1">
            {[
              { id: 'calculator', label: 'Calculator & Greeks', icon: Calculator },
              { id: 'surface', label: '3D Surface', icon: Box },
              { id: 'strategy', label: 'Strategy Builder', icon: Layers },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-6 py-4 font-semibold text-sm transition-all ${
                  activeTab === tab.id
                    ? 'text-cyan-400'
                    : isDarkMode ? 'text-zinc-400 hover:text-zinc-300' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center gap-2">
                  <tab.icon size={16} />
                  <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                    style={{ boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activeTab === 'calculator' && (
            <motion.div
              key="calculator"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <OptionCalculator params={params} onChange={setParams} isDarkMode={isDarkMode} />
                <GreeksDisplay greeks={greeks} price={result.price} isDarkMode={isDarkMode} />
              </div>
              <PayoffChart params={params} isDarkMode={isDarkMode} />
            </motion.div>
          )}

          {activeTab === 'surface' && (
            <motion.div
              key="surface"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-6`}>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                  {[
                    { label: 'Spot', value: `$${params.S}`, color: 'text-cyan-400' },
                    { label: 'Volatility', value: `${(params.sigma * 100).toFixed(0)}%`, color: 'text-violet-400' },
                    { label: 'Time', value: `${(params.T * 365).toFixed(0)}d`, color: 'text-fuchsia-400' },
                    { label: 'Rate', value: `${(params.r * 100).toFixed(1)}%`, color: 'text-emerald-400' },
                    { label: 'Type', value: params.type.toUpperCase(), color: 'text-amber-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className={`text-xs uppercase tracking-wider ${
                        isDarkMode ? 'text-zinc-500' : 'text-gray-500'
                      }`}>{stat.label}</div>
                      <div className={`neo-number text-2xl ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Surface3D params={params} isDarkMode={isDarkMode} />
              <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-6 space-y-6`}>
                <h3 className={`text-lg font-bold flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <Zap size={20} className="text-cyan-400" />
                  Quick Controls
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className={`flex items-center justify-between text-sm ${
                      isDarkMode ? 'text-zinc-400' : 'text-gray-600'
                    }`}>
                      <span>Volatility (σ)</span>
                      <span className="neo-number text-cyan-400">{(params.sigma * 100).toFixed(0)}%</span>
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="100"
                      step="1"
                      value={params.sigma * 100}
                      onChange={(e) => setParams({ ...params, sigma: parseFloat(e.target.value) / 100 })}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className={`flex items-center justify-between text-sm ${
                      isDarkMode ? 'text-zinc-400' : 'text-gray-600'
                    }`}>
                      <span>Spot Price (S)</span>
                      <span className="neo-number text-violet-400">${params.S}</span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      step="1"
                      value={params.S}
                      onChange={(e) => setParams({ ...params, S: parseFloat(e.target.value) })}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'strategy' && (
            <motion.div
              key="strategy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <StrategyBuilder baseParams={params} isDarkMode={isDarkMode} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className={`border-t backdrop-blur-xl mt-20 transition-colors duration-300 ${
        isDarkMode ? 'border-zinc-800/50 bg-black/40' : 'border-gray-200/50 bg-white/40'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <span className="font-bold text-gradient">OptionsSurface</span>
              </div>
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-zinc-500' : 'text-gray-600'
              }`}>
                Advanced options analytics powered by Black-Scholes mathematics and real-time 3D visualization.
              </p>
            </div>
            
            <div>
              <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Resources</h4>
              <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-zinc-500' : 'text-gray-600'}`}>
                <li><a href="/docs" className={`transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}>Documentation</a></li>
                <li><a href="https://github.com/azee-ka/options-greeks-visualizer" target="_blank" rel="noopener noreferrer" className={`transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}>GitHub</a></li>
                <li><a href="/docs#tutorials" className={`transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}>Tutorials</a></li>
              </ul>
            </div>
          </div>
          
          <div className={`mt-12 pt-8 border-t text-center text-sm ${
            isDarkMode ? 'border-zinc-800/50 text-zinc-600' : 'border-gray-200/50 text-gray-500'
          }`}>
            <p>© 2025 OptionsSurface. Built with React, Three.js, and Black-Scholes mathematics.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}