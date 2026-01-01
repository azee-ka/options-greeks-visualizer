'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  TrendingUp, 
  Calculator, 
  Zap, 
  Activity, 
  Clock, 
  DollarSign,
  Box,
  Layers,
  ChevronRight,
  Code,
  FileText,
  GraduationCap,
  Github,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

const sections = [
  { id: 'intro', title: 'Introduction', icon: BookOpen },
  { id: 'getting-started', title: 'Getting Started', icon: Zap },
  { id: 'options-basics', title: 'Options Basics', icon: TrendingUp },
  { id: 'black-scholes', title: 'Black-Scholes Model', icon: Calculator },
  { id: 'greeks', title: 'The Greeks', icon: Activity },
  { id: 'calculator-guide', title: 'Calculator Guide', icon: FileText },
  { id: 'strategy-builder', title: 'Strategy Builder', icon: Layers },
  { id: 'advanced', title: 'Advanced Usage', icon: Code },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('intro');

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-2xl bg-black/40 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gradient">OptionsSurface</h1>
                <p className="text-xs text-zinc-500">Documentation</p>
              </div>
            </Link>
            <Link href="/" className="neo-btn-secondary">
              Back to App
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 px-4">
                Contents
              </div>
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                      activeSection === section.id
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400'
                        : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-900/50'
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {activeSection === 'intro' && <IntroSection />}
              {activeSection === 'getting-started' && <GettingStartedSection />}
              {activeSection === 'options-basics' && <OptionsBasicsSection />}
              {activeSection === 'black-scholes' && <BlackScholesSection />}
              {activeSection === 'greeks' && <GreeksSection />}
              {activeSection === 'calculator-guide' && <CalculatorGuideSection />}
              {activeSection === 'strategy-builder' && <StrategyBuilderSection />}
              {activeSection === 'advanced' && <AdvancedSection />}
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

// SECTION COMPONENTS

function IntroSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <BookOpen className="text-cyan-400" size={36} />
          Welcome to OptionsSurface
        </h1>
        <p className="text-xl text-zinc-400 leading-relaxed">
          A comprehensive guide to understanding options pricing, Greeks, and building sophisticated trading strategies.
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">What is OptionsSurface?</h2>
        <p className="text-zinc-300 leading-relaxed">
          OptionsSurface is an advanced options analytics platform that brings institutional-grade pricing models to your browser. Built on the Black-Scholes model, it provides real-time calculations of option prices and Greeks, 3D volatility surface visualization, and a powerful multi-leg strategy builder.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {[
            { icon: Calculator, label: 'Real-time Pricing', desc: 'Instant Black-Scholes calculations' },
            { icon: Activity, label: 'Greeks Analysis', desc: 'Delta, Gamma, Theta, Vega, Rho' },
            { icon: Box, label: '3D Visualization', desc: 'Interactive volatility surfaces' },
          ].map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.label} className="p-4 rounded-xl bg-black/40 border border-zinc-800/50 space-y-2">
                <Icon className="text-cyan-400" size={24} />
                <div className="font-semibold text-white text-sm">{feature.label}</div>
                <div className="text-xs text-zinc-500">{feature.desc}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="neo-card p-8 space-y-4">
        <h2 className="text-2xl font-bold text-white">Who is this for?</h2>
        <ul className="space-y-3 text-zinc-300">
          <li className="flex items-start gap-3">
            <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
            <span><strong className="text-white">Traders</strong> - Analyze option positions and understand risk exposure</span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
            <span><strong className="text-white">Students</strong> - Learn options pricing theory through interactive visualization</span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
            <span><strong className="text-white">Developers</strong> - Understand the mathematics behind options pricing</span>
          </li>
          <li className="flex items-start gap-3">
            <ChevronRight className="text-cyan-400 mt-1 flex-shrink-0" size={16} />
            <span><strong className="text-white">Educators</strong> - Teach options theory with visual, interactive tools</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function GettingStartedSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Zap className="text-cyan-400" size={36} />
          Getting Started
        </h1>
        <p className="text-xl text-zinc-400">
          Quick start guide to using OptionsSurface
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Navigation</h2>
        <p className="text-zinc-300">
          OptionsSurface has three main sections:
        </p>
        <div className="space-y-4">
          {[
            {
              title: 'Calculator & Greeks',
              desc: 'Input option parameters and view real-time pricing and risk metrics',
              icon: Calculator,
            },
            {
              title: '3D Surface',
              desc: 'Visualize how option prices change across different strikes and time periods',
              icon: Box,
            },
            {
              title: 'Strategy Builder',
              desc: 'Build and analyze multi-leg option strategies with combined P&L visualization',
              icon: Layers,
            },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <div key={tab.title} className="p-5 rounded-xl bg-gradient-to-r from-cyan-500/5 to-violet-500/5 border border-cyan-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10">
                    <Icon className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-2">{tab.title}</h3>
                    <p className="text-sm text-zinc-400">{tab.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Quick Example</h2>
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-black/40 border-l-4 border-cyan-400">
            <div className="text-sm font-mono text-cyan-400 mb-2">STEP 1: Set Parameters</div>
            <p className="text-zinc-300 text-sm">
              Start with the default ATM call option: Spot = $100, Strike = $100, Time = 3 months, Volatility = 30%, Rate = 5%
            </p>
          </div>
          <div className="p-4 rounded-lg bg-black/40 border-l-4 border-violet-400">
            <div className="text-sm font-mono text-violet-400 mb-2">STEP 2: Observe Greeks</div>
            <p className="text-zinc-300 text-sm">
              Watch how Delta (~0.60) tells you the option moves $0.60 for every $1 stock move
            </p>
          </div>
          <div className="p-4 rounded-lg bg-black/40 border-l-4 border-fuchsia-400">
            <div className="text-sm font-mono text-fuchsia-400 mb-2">STEP 3: Adjust & Learn</div>
            <p className="text-zinc-300 text-sm">
              Move the sliders and watch real-time updates to understand how each parameter affects pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionsBasicsSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <TrendingUp className="text-cyan-400" size={36} />
          Options Basics
        </h1>
        <p className="text-xl text-zinc-400">
          Understanding call and put options
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">What is an Option?</h2>
        <p className="text-zinc-300 leading-relaxed">
          An option is a financial derivative that gives the buyer the <strong className="text-white">right, but not the obligation</strong>, to buy or sell an underlying asset at a predetermined price (strike price) on or before a specific date (expiration date).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/20">
                <TrendingUp className="text-emerald-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Call Option</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              A call option gives you the right to <strong className="text-emerald-400">BUY</strong> the underlying asset at the strike price.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <ChevronRight className="text-emerald-400 mt-0.5" size={14} />
                <span className="text-zinc-400">Profit when stock price rises above strike</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="text-emerald-400 mt-0.5" size={14} />
                <span className="text-zinc-400">Unlimited profit potential</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="text-emerald-400 mt-0.5" size={14} />
                <span className="text-zinc-400">Risk limited to premium paid</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-rose-500/20">
                <TrendingUp className="text-rose-400 rotate-180" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Put Option</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-4">
              A put option gives you the right to <strong className="text-rose-400">SELL</strong> the underlying asset at the strike price.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <ChevronRight className="text-rose-400 mt-0.5" size={14} />
                <span className="text-zinc-400">Profit when stock price falls below strike</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="text-rose-400 mt-0.5" size={14} />
                <span className="text-zinc-400">Profit limited to strike price</span>
              </div>
              <div className="flex items-start gap-2">
                <ChevronRight className="text-rose-400 mt-0.5" size={14} />
                <span className="text-zinc-400">Risk limited to premium paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Key Terms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { term: 'Strike Price (K)', def: 'The price at which the option can be exercised' },
            { term: 'Spot Price (S)', def: 'Current market price of the underlying asset' },
            { term: 'Premium', def: 'The price paid to buy the option contract' },
            { term: 'Expiration Date', def: 'The date when the option contract expires' },
            { term: 'In-The-Money (ITM)', def: 'Option has intrinsic value (profitable if exercised)' },
            { term: 'Out-of-The-Money (OTM)', def: 'Option has no intrinsic value (unprofitable if exercised)' },
            { term: 'At-The-Money (ATM)', def: 'Strike price equals current stock price' },
            { term: 'Intrinsic Value', def: 'The profit if exercised immediately' },
          ].map((item) => (
            <div key={item.term} className="p-4 rounded-lg bg-black/40 border border-zinc-800/50">
              <div className="font-mono text-cyan-400 text-sm mb-1">{item.term}</div>
              <div className="text-zinc-400 text-xs leading-relaxed">{item.def}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Moneyness</h2>
        <p className="text-zinc-300 leading-relaxed">
          The relationship between spot price and strike price determines an option's "moneyness":
        </p>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="font-bold text-emerald-400 mb-2">In-The-Money (ITM)</div>
            <div className="text-sm text-zinc-300">
              <strong className="text-white">Call:</strong> Spot price {'>'} Strike price (S {'>'} K)<br />
              <strong className="text-white">Put:</strong> Strike price {'>'} Spot price (K {'>'} S)
            </div>
          </div>
          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <div className="font-bold text-cyan-400 mb-2">At-The-Money (ATM)</div>
            <div className="text-sm text-zinc-300">
              Spot price ≈ Strike price (S ≈ K)
            </div>
          </div>
          <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20">
            <div className="font-bold text-rose-400 mb-2">Out-of-The-Money (OTM)</div>
            <div className="text-sm text-zinc-300">
              <strong className="text-white">Call:</strong> Strike price {'>'} Spot price (K {'>'} S)<br />
              <strong className="text-white">Put:</strong> Spot price {'>'} Strike price (S {'>'} K)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlackScholesSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Calculator className="text-cyan-400" size={36} />
          Black-Scholes Model
        </h1>
        <p className="text-xl text-zinc-400">
          The mathematical foundation of options pricing
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">What is Black-Scholes?</h2>
        <p className="text-zinc-300 leading-relaxed">
          The Black-Scholes model, developed by Fischer Black, Myron Scholes, and Robert Merton in 1973, is a mathematical model for pricing European-style options. It won the Nobel Prize in Economics in 1997 and remains the industry standard for options valuation.
        </p>
        <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
          <div className="text-sm text-zinc-500 mb-3">The Black-Scholes Formula for a Call Option:</div>
          <div className="font-mono text-cyan-400 text-sm leading-relaxed overflow-x-auto">
            C = S × N(d₁) - K × e^(-rT) × N(d₂)
          </div>
          <div className="mt-4 text-sm text-zinc-500">Where:</div>
          <div className="font-mono text-xs text-zinc-400 leading-relaxed mt-2">
            d₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T)<br />
            d₂ = d₁ - σ√T
          </div>
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Model Parameters</h2>
        <div className="space-y-4">
          {[
            { 
              symbol: 'S', 
              name: 'Spot Price', 
              desc: 'Current market price of the underlying asset',
              example: '$100',
              color: 'cyan'
            },
            { 
              symbol: 'K', 
              name: 'Strike Price', 
              desc: 'Price at which the option can be exercised',
              example: '$100',
              color: 'violet'
            },
            { 
              symbol: 'T', 
              name: 'Time to Expiration', 
              desc: 'Time remaining until option expires (in years)',
              example: '0.25 years (3 months)',
              color: 'amber'
            },
            { 
              symbol: 'r', 
              name: 'Risk-Free Rate', 
              desc: 'Theoretical return on a risk-free investment',
              example: '5% (0.05)',
              color: 'emerald'
            },
            { 
              symbol: 'σ', 
              name: 'Volatility', 
              desc: 'Expected price fluctuation (standard deviation)',
              example: '30% (0.30)',
              color: 'fuchsia'
            },
          ].map((param) => (
            <div key={param.symbol} className={`p-5 rounded-xl bg-${param.color}-500/10 border border-${param.color}-500/20`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg bg-${param.color}-500/20 flex items-center justify-center`}>
                      <span className={`font-mono font-bold text-${param.color}-400`}>{param.symbol}</span>
                    </div>
                    <h3 className="font-bold text-white">{param.name}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{param.desc}</p>
                </div>
              </div>
              <div className="text-xs font-mono text-zinc-500">
                Example: <span className={`text-${param.color}-400`}>{param.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Model Assumptions</h2>
        <p className="text-zinc-300 mb-4">
          The Black-Scholes model makes several key assumptions:
        </p>
        <div className="space-y-3">
          {[
            'European-style options (can only be exercised at expiration)',
            'No dividends paid during option lifetime',
            'Efficient markets with no arbitrage opportunities',
            'Risk-free rate and volatility remain constant',
            'Returns follow a lognormal distribution',
            'No transaction costs or taxes',
          ].map((assumption, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/40">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-cyan-400 text-xs font-bold">{i + 1}</span>
              </div>
              <span className="text-zinc-300 text-sm">{assumption}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GreeksSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Activity className="text-cyan-400" size={36} />
          The Greeks
        </h1>
        <p className="text-xl text-zinc-400">
          Understanding option risk metrics
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">What are the Greeks?</h2>
        <p className="text-zinc-300 leading-relaxed">
          The "Greeks" are risk measures that describe how an option's price changes in response to various factors. They're essential for understanding and managing option positions.
        </p>
      </div>

      {/* Delta */}
      <div className="neo-card p-8 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-cyan-500/10">
            <TrendingUp className="text-cyan-400" size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Delta (Δ)</h2>
            <p className="text-sm text-zinc-500">Rate of change w.r.t. spot price</p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
          <div className="font-mono text-cyan-400 text-sm mb-2">
            Δ = ∂V/∂S
          </div>
          <p className="text-zinc-300 text-sm">
            Delta measures how much the option price changes for a $1 change in the underlying stock price.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-black/40 border border-zinc-800/50">
            <div className="text-sm font-semibold text-emerald-400 mb-2">Call Options</div>
            <div className="text-xs text-zinc-400 space-y-1">
              <div>• Delta range: 0 to 1.0</div>
              <div>• ATM call ≈ 0.50</div>
              <div>• ITM call {'>'} 0.50</div>
              <div>• OTM call {'<'} 0.50</div>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-black/40 border border-zinc-800/50">
            <div className="text-sm font-semibold text-rose-400 mb-2">Put Options</div>
            <div className="text-xs text-zinc-400 space-y-1">
              <div>• Delta range: -1.0 to 0</div>
              <div>• ATM put ≈ -0.50</div>
              <div>• ITM put {'<'} -0.50</div>
              <div>• OTM put {'>'} -0.50</div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-cyan-500/5 border-l-4 border-cyan-400">
          <div className="text-sm font-semibold text-cyan-400 mb-2">💡 Practical Example</div>
          <p className="text-xs text-zinc-300">
            If you own a call with Delta = 0.60 and the stock rises $1, your option increases in value by approximately $0.60 (or $60 per contract).
          </p>
        </div>
      </div>

      {/* Gamma */}
      <div className="neo-card p-8 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-violet-500/10">
            <Activity className="text-violet-400" size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Gamma (Γ)</h2>
            <p className="text-sm text-zinc-500">Rate of change of Delta</p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20">
          <div className="font-mono text-violet-400 text-sm mb-2">
            Γ = ∂²V/∂S² = ∂Δ/∂S
          </div>
          <p className="text-zinc-300 text-sm">
            Gamma measures how much Delta changes for a $1 change in the underlying stock price.
          </p>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-black/40 border border-zinc-800/50">
            <div className="text-sm font-semibold text-white mb-2">High Gamma</div>
            <div className="text-xs text-zinc-400">
              ATM options have highest Gamma. Delta changes rapidly as stock moves, requiring frequent hedging adjustments.
            </div>
          </div>
          <div className="p-4 rounded-lg bg-black/40 border border-zinc-800/50">
            <div className="text-sm font-semibold text-white mb-2">Low Gamma</div>
            <div className="text-xs text-zinc-400">
              Deep ITM/OTM options have low Gamma. Delta is stable and changes slowly.
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-violet-500/5 border-l-4 border-violet-400">
          <div className="text-sm font-semibold text-violet-400 mb-2">💡 Practical Example</div>
          <p className="text-xs text-zinc-300">
            If Delta = 0.50 and Gamma = 0.05, a $1 stock increase will change Delta to approximately 0.55.
          </p>
        </div>
      </div>

      {/* Theta */}
      <div className="neo-card p-8 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-amber-500/10">
            <Clock className="text-amber-400" size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Theta (Θ)</h2>
            <p className="text-sm text-zinc-500">Time decay</p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20">
          <div className="font-mono text-amber-400 text-sm mb-2">
            Θ = ∂V/∂t
          </div>
          <p className="text-zinc-300 text-sm">
            Theta measures the rate of time decay - how much value the option loses per day, all else being equal.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
          <div className="text-sm font-semibold text-amber-400 mb-3">Time Decay Characteristics</div>
          <div className="space-y-2 text-xs text-zinc-300">
            <div className="flex items-start gap-2">
              <ChevronRight className="text-amber-400 mt-0.5" size={14} />
              <span>Theta is almost always negative for option buyers</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-amber-400 mt-0.5" size={14} />
              <span>Accelerates as expiration approaches</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-amber-400 mt-0.5" size={14} />
              <span>ATM options have highest Theta</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-amber-400 mt-0.5" size={14} />
              <span>Benefits option sellers (time decay profit)</span>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-400">
          <div className="text-sm font-semibold text-amber-400 mb-2">💡 Practical Example</div>
          <p className="text-xs text-zinc-300">
            If Theta = -0.05, your option loses approximately $5 per contract per day due to time decay.
          </p>
        </div>
      </div>

      {/* Vega */}
      <div className="neo-card p-8 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-emerald-500/10">
            <Zap className="text-emerald-400" size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Vega (ν)</h2>
            <p className="text-sm text-zinc-500">Volatility sensitivity</p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20">
          <div className="font-mono text-emerald-400 text-sm mb-2">
            ν = ∂V/∂σ
          </div>
          <p className="text-zinc-300 text-sm">
            Vega measures how much the option price changes for a 1% change in implied volatility.
          </p>
        </div>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-black/40 border border-zinc-800/50">
            <div className="text-sm font-semibold text-white mb-2">High Vega Exposure</div>
            <div className="text-xs text-zinc-400">
              ATM options with longer expiration have highest Vega. Most sensitive to volatility changes.
            </div>
          </div>
          <div className="p-4 rounded-lg bg-black/40 border border-zinc-800/50">
            <div className="text-sm font-semibold text-white mb-2">Volatility Strategy</div>
            <div className="text-xs text-zinc-400">
              Buy options when expecting volatility increase. Sell options when expecting volatility decrease.
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/5 border-l-4 border-emerald-400">
          <div className="text-sm font-semibold text-emerald-400 mb-2">💡 Practical Example</div>
          <p className="text-xs text-zinc-300">
            If Vega = 0.15 and volatility increases from 30% to 31%, your option gains approximately $15 per contract.
          </p>
        </div>
      </div>

      {/* Rho */}
      <div className="neo-card p-8 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-fuchsia-500/10">
            <DollarSign className="text-fuchsia-400" size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Rho (ρ)</h2>
            <p className="text-sm text-zinc-500">Interest rate sensitivity</p>
          </div>
        </div>
        <div className="p-5 rounded-xl bg-gradient-to-r from-fuchsia-500/10 to-pink-500/5 border border-fuchsia-500/20">
          <div className="font-mono text-fuchsia-400 text-sm mb-2">
            ρ = ∂V/∂r
          </div>
          <p className="text-zinc-300 text-sm">
            Rho measures how much the option price changes for a 1% change in the risk-free interest rate.
          </p>
        </div>
        <div className="p-4 rounded-lg bg-fuchsia-500/5 border border-fuchsia-500/20">
          <div className="text-sm font-semibold text-fuchsia-400 mb-3">Characteristics</div>
          <div className="space-y-2 text-xs text-zinc-300">
            <div className="flex items-start gap-2">
              <ChevronRight className="text-fuchsia-400 mt-0.5" size={14} />
              <span>Usually the least impactful Greek</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-fuchsia-400 mt-0.5" size={14} />
              <span>More important for long-dated options</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight className="text-fuchsia-400 mt-0.5" size={14} />
              <span>Positive for calls, negative for puts</span>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-fuchsia-500/5 border-l-4 border-fuchsia-400">
          <div className="text-sm font-semibold text-fuchsia-400 mb-2">💡 Practical Example</div>
          <p className="text-xs text-zinc-300">
            If Rho = 0.10 and interest rates rise from 5% to 6%, a call option gains approximately $10 per contract.
          </p>
        </div>
      </div>
    </div>
  );
}

function CalculatorGuideSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Calculator className="text-cyan-400" size={36} />
          Calculator Guide
        </h1>
        <p className="text-xl text-zinc-400">
          How to use the Options Calculator
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Interface Overview</h2>
        <p className="text-zinc-300">
          The calculator interface has three main sections:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Parameters', desc: 'Input controls for S, K, T, r, σ' },
            { title: 'Greeks Display', desc: 'Real-time risk metrics' },
            { title: 'Payoff Chart', desc: 'P&L visualization' },
          ].map((section) => (
            <div key={section.title} className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
              <div className="font-semibold text-white mb-2">{section.title}</div>
              <div className="text-xs text-zinc-400">{section.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Step-by-Step Tutorial</h2>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: 'Select Option Type',
              desc: 'Click "Call" for bullish positions or "Put" for bearish positions.',
              tip: 'Calls profit when stock rises, puts profit when stock falls',
            },
            {
              step: 2,
              title: 'Set Spot Price (S)',
              desc: 'Enter or slide to set the current stock price.',
              tip: 'Try $100 as a starting point',
            },
            {
              step: 3,
              title: 'Set Strike Price (K)',
              desc: 'Choose your desired strike price.',
              tip: 'ATM = same as spot, ITM = lower (call) or higher (put), OTM = opposite',
            },
            {
              step: 4,
              title: 'Adjust Time (T)',
              desc: 'Set time to expiration in years (0.25 = 3 months).',
              tip: 'More time = higher option value due to time premium',
            },
            {
              step: 5,
              title: 'Set Volatility (σ)',
              desc: 'Input expected price volatility as a percentage.',
              tip: 'Higher volatility = higher option prices. Try 20-40% for stocks',
            },
            {
              step: 6,
              title: 'Observe Results',
              desc: 'Watch Greeks and payoff diagram update in real-time.',
              tip: 'Experiment with sliders to see how each parameter affects pricing',
            },
          ].map((item) => (
            <div key={item.step} className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center font-bold text-white text-sm">
                {item.step}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
                <div className="p-3 rounded-lg bg-cyan-500/5 border-l-2 border-cyan-400">
                  <span className="text-xs text-cyan-400 font-semibold">💡 Tip: </span>
                  <span className="text-xs text-zinc-300">{item.tip}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Quick Presets</h2>
        <p className="text-zinc-300">
          Use preset buttons for common scenarios:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
            <div className="font-bold text-cyan-400 mb-2">ATM</div>
            <div className="text-xs text-zinc-400">At-The-Money: S = K = $100</div>
          </div>
          <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20">
            <div className="font-bold text-rose-400 mb-2">OTM</div>
            <div className="text-xs text-zinc-400">Out-The-Money: K = $110, S = $100</div>
          </div>
          <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="font-bold text-emerald-400 mb-2">ITM</div>
            <div className="text-xs text-zinc-400">In-The-Money: K = $90, S = $100</div>
          </div>
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Understanding the Payoff Chart</h2>
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-sm font-semibold text-cyan-400 mb-2">Cyan Line</div>
                <div className="text-xs text-zinc-400">Current P&L if you close the position now</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-400 mb-2">Green Line</div>
                <div className="text-xs text-zinc-400">P&L at expiration</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-cyan-400 mb-2">Cyan Dashed</div>
                <div className="text-xs text-zinc-400">Current stock price</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-violet-400 mb-2">Purple Dashed</div>
                <div className="text-xs text-zinc-400">Strike price</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Current Value', desc: 'Option price × 100' },
              { label: 'Max Profit', desc: 'Best case scenario' },
              { label: 'Max Loss', desc: 'Worst case (premium paid)' },
              { label: 'Breakeven', desc: 'Stock price for zero P&L' },
            ].map((metric) => (
              <div key={metric.label} className="p-3 rounded-lg bg-black/40 border border-zinc-800/50">
                <div className="text-xs font-semibold text-white mb-1">{metric.label}</div>
                <div className="text-xs text-zinc-500">{metric.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StrategyBuilderSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Layers className="text-cyan-400" size={36} />
          Strategy Builder
        </h1>
        <p className="text-xl text-zinc-400">
          Build and analyze multi-leg option strategies
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">What is a Multi-Leg Strategy?</h2>
        <p className="text-zinc-300 leading-relaxed">
          A multi-leg strategy combines multiple option positions (calls and puts at different strikes) to create specific risk/reward profiles. These strategies allow you to profit from various market conditions while managing risk.
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Pre-Built Templates</h2>
        <p className="text-zinc-300 mb-4">
          OptionsSurface includes 8 popular strategy templates:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: 'Bull Call Spread',
              desc: 'Limited risk, limited profit bullish strategy',
              legs: 'Buy lower strike call + Sell higher strike call',
              outlook: 'Moderately bullish',
            },
            {
              name: 'Bear Put Spread',
              desc: 'Limited risk, limited profit bearish strategy',
              legs: 'Buy higher strike put + Sell lower strike put',
              outlook: 'Moderately bearish',
            },
            {
              name: 'Long Straddle',
              desc: 'Profit from large move in either direction',
              legs: 'Buy ATM call + Buy ATM put',
              outlook: 'High volatility expected',
            },
            {
              name: 'Long Strangle',
              desc: 'Cheaper than straddle, needs bigger move',
              legs: 'Buy OTM call + Buy OTM put',
              outlook: 'Very high volatility',
            },
            {
              name: 'Iron Condor',
              desc: 'Profit from low volatility',
              legs: '4 legs: OTM put spread + OTM call spread',
              outlook: 'Low volatility, range-bound',
            },
            {
              name: 'Butterfly Spread',
              desc: 'Profit from minimal price movement',
              legs: 'Buy 1 low + Sell 2 middle + Buy 1 high',
              outlook: 'Very low volatility',
            },
            {
              name: 'Long Call',
              desc: 'Simple bullish position',
              legs: 'Buy 1 call option',
              outlook: 'Bullish',
            },
            {
              name: 'Long Put',
              desc: 'Simple bearish position',
              legs: 'Buy 1 put option',
              outlook: 'Bearish',
            },
          ].map((strategy) => (
            <div key={strategy.name} className="p-5 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50 space-y-3">
              <div className="font-bold text-white">{strategy.name}</div>
              <div className="text-xs text-zinc-400 leading-relaxed">{strategy.desc}</div>
              <div className="text-xs">
                <span className="text-zinc-500">Legs: </span>
                <span className="text-cyan-400 font-mono">{strategy.legs}</span>
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-400">
                {strategy.outlook}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">How to Use</h2>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: 'Choose a Template or Start Fresh',
              desc: 'Click a template to load it, or click "Add Leg" to build from scratch.',
            },
            {
              step: 2,
              title: 'Customize Each Leg',
              desc: 'Adjust strike prices, time to expiration, and quantity for each leg.',
            },
            {
              step: 3,
              title: 'Analyze Combined P&L',
              desc: 'View the combined payoff diagram showing total P&L across all legs.',
            },
            {
              step: 4,
              title: 'Review Risk Metrics',
              desc: 'Check Net Cost, Max Profit, Max Loss, and Breakeven points.',
            },
          ].map((item) => (
            <div key={item.step} className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center font-bold text-white text-sm">
                {item.step}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Example: Bull Call Spread</h2>
        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-emerald-400">Leg 1: Buy Call</div>
              <div className="text-xs text-zinc-300 space-y-1">
                <div>Strike: $95</div>
                <div>Quantity: +1</div>
                <div>Premium: $7.50</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-rose-400">Leg 2: Sell Call</div>
              <div className="text-xs text-zinc-300 space-y-1">
                <div>Strike: $105</div>
                <div>Quantity: -1</div>
                <div>Premium: $2.50</div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-zinc-800/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <div className="text-zinc-500 mb-1">Net Cost</div>
                <div className="font-mono text-white">$500</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">Max Profit</div>
                <div className="font-mono text-emerald-400">$500</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">Max Loss</div>
                <div className="font-mono text-rose-400">$500</div>
              </div>
              <div>
                <div className="text-zinc-500 mb-1">Breakeven</div>
                <div className="font-mono text-cyan-400">$100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
          <Code className="text-cyan-400" size={36} />
          Advanced Usage
        </h1>
        <p className="text-xl text-zinc-400">
          Tips, tricks, and best practices
        </p>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Understanding the 3D Surface</h2>
        <p className="text-zinc-300 leading-relaxed">
          The 3D volatility surface shows how option prices change across different strike prices and time periods simultaneously. It's a powerful tool for visualizing the entire options landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <div className="text-sm font-semibold text-cyan-400 mb-2">X-Axis: Strike Price</div>
            <div className="text-xs text-zinc-400">Range from 70% to 130% of spot price</div>
          </div>
          <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
            <div className="text-sm font-semibold text-violet-400 mb-2">Y-Axis: Time to Expiry</div>
            <div className="text-xs text-zinc-400">0 to 1 year (365 days)</div>
          </div>
          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="text-sm font-semibold text-emerald-400 mb-2">Z-Axis: Option Price</div>
            <div className="text-xs text-zinc-400">Height represents option value</div>
          </div>
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Trading Insights</h2>
        <div className="space-y-4">
          {[
            {
              title: 'Time Decay Acceleration',
              tip: 'Theta accelerates in the last 30 days before expiration. Consider closing ATM positions early to avoid rapid decay.',
              icon: Clock,
            },
            {
              title: 'Volatility Smile',
              tip: 'OTM options often have higher implied volatility than ATM options, creating a "smile" shape in the vol surface.',
              icon: Activity,
            },
            {
              title: 'Delta Hedging',
              tip: 'Market makers use Delta to hedge positions. A Delta of 0.50 means they buy/sell 50 shares per contract.',
              icon: TrendingUp,
            },
            {
              title: 'Gamma Scalping',
              tip: 'High Gamma positions require frequent rehedging. This can be profitable in volatile markets but costly in quiet markets.',
              icon: Zap,
            },
          ].map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.title} className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10">
                    <Icon className="text-cyan-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white mb-2">{insight.title}</div>
                    <div className="text-sm text-zinc-400 leading-relaxed">{insight.tip}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Keyboard Shortcuts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { keys: ['Tab'], action: 'Navigate between tabs' },
            { keys: ['←', '→'], action: 'Adjust sliders' },
            { keys: ['Esc'], action: 'Close modals' },
            { keys: ['Ctrl', 'Z'], action: 'Undo last change' },
          ].map((shortcut, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-black/40 border border-zinc-800/50">
              <div className="flex items-center gap-2">
                {shortcut.keys.map((key, j) => (
                  <React.Fragment key={j}>
                    <kbd className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700 font-mono text-xs text-zinc-300">
                      {key}
                    </kbd>
                    {j < shortcut.keys.length - 1 && <span className="text-zinc-600">+</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="text-sm text-zinc-400">{shortcut.action}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Best Practices</h2>
        <div className="space-y-3">
          {[
            'Always understand your max loss before entering a position',
            'Use the 3D surface to identify pricing anomalies',
            'Monitor Gamma closely when holding near-expiry ATM options',
            'Consider Theta decay when holding positions overnight',
            'Test strategies with different volatility assumptions',
            'Use the Strategy Builder to visualize combined risk',
            'Pay attention to breakeven points on the payoff chart',
            'Compare current P&L vs. expiry P&L to time your exits',
          ].map((practice, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-black/40">
              <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-cyan-400 text-xs font-bold">{i + 1}</span>
              </div>
              <span className="text-zinc-300 text-sm">{practice}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="neo-card p-8 space-y-6 border-2 border-cyan-500/30">
        <div className="flex items-center gap-3">
          <Github className="text-cyan-400" size={32} />
          <div>
            <h2 className="text-2xl font-bold text-white">Open Source</h2>
            <p className="text-sm text-zinc-500">Contribute on GitHub</p>
          </div>
        </div>
        <p className="text-zinc-300 leading-relaxed">
          OptionsSurface is open source! Check out the code, report issues, or contribute features on GitHub.
        </p>
        <a
          href="https://github.com/azee-ka/options-greeks-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="neo-btn-primary inline-flex items-center gap-2"
        >
          <Github size={16} />
          View on GitHub
        </a>
      </div>
    </div>
  );
}