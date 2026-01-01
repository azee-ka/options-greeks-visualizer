'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Box, Layers, Github, Sparkles, Zap, Activity } from 'lucide-react';
import OptionCalculator from '@/components/OptionCalculator';
import GreeksDisplay from '@/components/GreeksDisplay';
import Surface3D from '@/components/Surface3D';
import PayoffChart from '@/components/PayoffChart';
import StrategyBuilder from '@/components/StrategyBuilder';
import { OptionParams, blackScholes, calculateGreeks } from '@/lib/blackScholes';

export default function Home() {
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
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/40 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 blur opacity-50" />
                <Sparkles className="relative text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">OptionsSurface</h1>
                <p className="text-xs text-zinc-500">Options Analytics</p>
              </div>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="/features" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">Features</a>
              <a href="/about" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">About</a>
              <a href="/docs" className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors">Docs</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/azee-ka/options-greeks-visualizer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              >
                <Github size={20} className="text-zinc-400 hover:text-cyan-400 transition-colors" />
              </a>
              <button className="neo-btn-primary relative z-10">
                <span className="relative z-10">Launch App</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
              <Zap size={16} className="animate-pulse" />
              <span>Real-time Black-Scholes Analytics</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-gradient">Options Greeks</span>
              <br />
              <span className="text-white">Visualized in Real-Time</span>
            </h2>
            
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Advanced 3D volatility surfaces, instant Greeks calculation, and multi-leg strategy optimization powered by quantum-level precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <div className="neo-badge">
                <Activity size={14} className="text-cyan-400" />
                <span className="text-zinc-300">Live Calculations</span>
              </div>
              <div className="neo-badge">
                <Box size={14} className="text-violet-400" />
                <span className="text-zinc-300">3D Surfaces</span>
              </div>
              <div className="neo-badge">
                <Layers size={14} className="text-fuchsia-400" />
                <span className="text-zinc-300">8+ Strategies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-[73px] z-40 backdrop-blur-2xl bg-black/60 border-y border-zinc-800/50">
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
                    : 'text-zinc-400 hover:text-zinc-300'
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
                <OptionCalculator params={params} onChange={setParams} />
                <GreeksDisplay greeks={greeks} price={result.price} />
              </div>
              <PayoffChart params={params} />
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
              <div className="neo-card p-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                  {[
                    { label: 'Spot', value: `$${params.S}`, color: 'text-cyan-400' },
                    { label: 'Volatility', value: `${(params.sigma * 100).toFixed(0)}%`, color: 'text-violet-400' },
                    { label: 'Time', value: `${(params.T * 365).toFixed(0)}d`, color: 'text-fuchsia-400' },
                    { label: 'Rate', value: `${(params.r * 100).toFixed(1)}%`, color: 'text-emerald-400' },
                    { label: 'Type', value: params.type.toUpperCase(), color: 'text-amber-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="space-y-2">
                      <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                      <div className={`neo-number text-2xl ${stat.color}`}>{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <Surface3D params={params} />
              <div className="neo-card p-6 space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap size={20} className="text-cyan-400" />
                  Quick Controls
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="flex items-center justify-between text-sm text-zinc-400">
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
                    <label className="flex items-center justify-between text-sm text-zinc-400">
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
              <StrategyBuilder baseParams={params} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

{/* Footer */}
<footer className="border-t border-zinc-800/50 bg-black/40 backdrop-blur-xl mt-20">
  <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
            <Sparkles className="text-white" size={20} />
          </div>
          <span className="font-bold text-gradient">OptionsSurface</span>
        </div>
        <p className="text-sm text-zinc-500 leading-relaxed">
          Advanced options analytics powered by Black-Scholes mathematics and real-time 3D visualization.
        </p>
      </div>
      
      <div>
        <h4 className="font-semibold text-white mb-4">Resources</h4>
        <ul className="space-y-2 text-sm text-zinc-500">
          <li><a href="/docs" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
          <li><a href="https://github.com/azee-ka/options-greeks-visualizer" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
          <li><a href="/docs#tutorials" className="hover:text-cyan-400 transition-colors">Tutorials</a></li>
        </ul>
      </div>
    </div>
    
    <div className="mt-12 pt-8 border-t border-zinc-800/50 text-center text-sm text-zinc-600">
      <p>© 2025 OptionsSurface. Built with React, Three.js, and Black-Scholes mathematics.</p>
    </div>
  </div>
</footer>
    </div>
  );
}