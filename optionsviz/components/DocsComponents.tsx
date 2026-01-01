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
  GraduationCap,
  Github,
  Sparkles,
  LineChart,
  Percent,
  Target,
  Trophy,
  AlertCircle,
  CheckCircle,
  Info,
  Lightbulb,
  BookMarked,
  Play,
  ArrowDown
} from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';
import Footer from '@/components/Footer';
import DisclaimerBanner from '@/components/DisclaimerBanner';


// HELPER COMPONENTS
function InfoBox({ type = 'info', children }: { type?: 'info' | 'tip' | 'warning' | 'success', children: React.ReactNode }) {
    const styles = {
      info: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', icon: Info },
      tip: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', icon: Lightbulb },
      warning: { bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', icon: AlertCircle },
      success: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', icon: CheckCircle },
    };
    const style = styles[type];
    const Icon = style.icon;
    
    return (
      <div className={`p-5 rounded-xl ${style.bg} border ${style.border}`}>
        <div className="flex items-start gap-3">
          <Icon className={`${style.text} flex-shrink-0 mt-0.5`} size={20} />
          <div className="text-sm text-zinc-300 leading-relaxed">{children}</div>
        </div>
      </div>
    );
  }
  
  function MathFormula({ formula, description }: { formula: string, description?: string }) {
    return (
      <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-black/60 border border-zinc-800/50">
        <div className="font-mono text-cyan-400 text-lg mb-3 overflow-x-auto">
          {formula}
        </div>
        {description && (
          <div className="text-sm text-zinc-400 leading-relaxed">{description}</div>
        )}
      </div>
    );
  }
  
  
  
  
  // SECTION COMPONENTS
  
  export function IntroSection() {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <BookOpen className="text-cyan-400" size={44} />
            Complete Guide to Options
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Master options pricing, Greeks, and advanced trading strategies with interactive tools and comprehensive tutorials.
          </p>
        </div>
  
        <div className="neo-card p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">Welcome to OptionsSurface Documentation</h2>
          <p className="text-zinc-300 leading-relaxed text-lg">
            This documentation is designed to take you from complete beginner to advanced options trader. Whether you're learning about derivatives for the first time or refining your pricing models, you'll find comprehensive explanations, practical guides, and hands-on tutorials.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {[
              { 
                icon: BookMarked, 
                title: 'Theory & Concepts', 
                desc: 'Deep dive into options theory, Black-Scholes model, and Greeks',
                color: 'violet'
              },
              { 
                icon: Target, 
                title: 'Practical Guides', 
                desc: 'Step-by-step instructions on using each feature of OptionsSurface',
                color: 'emerald'
              },
              { 
                icon: Play, 
                title: 'Interactive Tutorials', 
                desc: 'Hands-on exercises to practice real-world trading scenarios',
                color: 'amber'
              },
              { 
                icon: Trophy, 
                title: 'Advanced Topics', 
                desc: 'Professional-level strategies, risk management, and market making',
                color: 'fuchsia'
              },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className={`p-6 rounded-xl bg-${feature.color}-500/10 border border-${feature.color}-500/20 space-y-3`}>
                  <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center`}>
                    <Icon className={`text-${feature.color}-400`} size={24} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{feature.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
  
        <div className="neo-card p-8 space-y-6">
          <h2 className="text-2xl font-bold text-white">How to Use This Documentation</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400">
                1
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Start with Theory (if you're new)</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Begin with "Options 101" to understand what options are, then move through Black-Scholes and Greeks sections to build a solid theoretical foundation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20">
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">
                2
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Learn the Tools</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Read the practical guides to understand how to use the Calculator, 3D Surface, and Strategy Builder effectively.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 font-bold text-amber-400">
                3
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Practice with Tutorials</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Work through hands-on tutorials that simulate real trading scenarios. Follow along in the app to reinforce your learning.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-fuchsia-500/10 to-violet-500/5 border border-fuchsia-500/20">
              <div className="w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 font-bold text-fuchsia-400">
                4
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">Advance Your Skills</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Explore advanced topics like volatility trading, complex strategies, and risk management techniques used by professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="neo-card p-6 space-y-4">
            <GraduationCap className="text-violet-400" size={32} />
            <h3 className="font-bold text-white">For Students</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Learn derivatives pricing, understand Greeks, and see theory come to life through interactive visualization.
            </p>
          </div>
          
          <div className="neo-card p-6 space-y-4">
            <LineChart className="text-emerald-400" size={32} />
            <h3 className="font-bold text-white">For Traders</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Analyze positions, understand risk exposure, build strategies, and make informed trading decisions.
            </p>
          </div>
          
          <div className="neo-card p-6 space-y-4">
            <Code className="text-cyan-400" size={32} />
            <h3 className="font-bold text-white">For Developers</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Understand the mathematics, explore the open-source code, and implement your own pricing models.
            </p>
          </div>
        </div>
  
        <div className="neo-card p-8 space-y-4 border-2 border-cyan-500/30">
          <div className="flex items-center gap-3">
            <Github className="text-cyan-400" size={36} />
            <div>
              <h3 className="text-2xl font-bold text-white">Open Source Project</h3>
              <p className="text-sm text-zinc-500">Built with React, Three.js, TypeScript</p>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed">
            OptionsSurface is completely open source. View the code, contribute features, report bugs, or fork for your own projects.
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
  
  export function Options101Section() {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
            <GraduationCap className="text-violet-400" size={44} />
            Options 101
          </h1>
          <p className="text-xl text-zinc-400">
            Everything you need to know about options contracts from the ground up
          </p>
        </div>
  
        {/* What is an Option */}
        <div className="neo-card p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">What is an Option?</h2>
          <p className="text-zinc-300 leading-relaxed text-lg">
            An option is a <strong className="text-white">financial contract</strong> that gives the buyer the <strong className="text-cyan-400">right, but not the obligation</strong>, to buy or sell an underlying asset (like a stock) at a predetermined price (the strike price) on or before a specific expiration date.
          </p>
          
          <InfoBox type="info">
            <strong>Key Insight:</strong> Unlike stocks where you own a piece of the company, options are derivatives - their value is derived from an underlying asset. You're buying a contract, not the asset itself.
          </InfoBox>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <TrendingUp className="text-emerald-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Call Option</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                A call option gives you the <strong className="text-emerald-400">right to BUY</strong> the underlying stock at the strike price.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-zinc-400">Bullish strategy - profits when stock price rises</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-zinc-400">Unlimited profit potential (stock can rise infinitely)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-zinc-400">Limited risk (maximum loss = premium paid)</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black/40">
                <div className="text-xs text-zinc-500 mb-2">Example:</div>
                <div className="text-sm text-zinc-300">
                  Buy a call with strike $100 for $5 premium. Stock rises to $120. You can buy at $100 and sell at $120, profiting $15 per share ($20 gain - $5 premium).
                </div>
              </div>
            </div>
  
            <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center">
                  <TrendingUp className="text-rose-400 rotate-180" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">Put Option</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed">
                A put option gives you the <strong className="text-rose-400">right to SELL</strong> the underlying stock at the strike price.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-zinc-400">Bearish strategy - profits when stock price falls</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-zinc-400">Profit limited to strike price (stock can only fall to $0)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                  <span className="text-sm text-zinc-400">Limited risk (maximum loss = premium paid)</span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black/40">
                <div className="text-xs text-zinc-500 mb-2">Example:</div>
                <div className="text-sm text-zinc-300">
                  Buy a put with strike $100 for $5 premium. Stock falls to $80. You can buy at $80 and sell at $100, profiting $15 per share ($20 gain - $5 premium).
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Key Terminology */}
        <div className="neo-card p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">Essential Terminology</h2>
          <p className="text-zinc-300">
            Understanding these terms is crucial for working with options:
          </p>
          
          <div className="space-y-4">
            {[
              {
                term: 'Premium',
                definition: 'The price you pay to buy an option contract. This is your maximum loss if the option expires worthless.',
                example: 'If a call option costs $5, you pay $500 (5 × 100 shares per contract)',
                color: 'cyan'
              },
              {
                term: 'Strike Price (K)',
                definition: 'The predetermined price at which you can buy (call) or sell (put) the underlying stock.',
                example: 'A $100 strike call allows you to buy stock at $100, regardless of market price',
                color: 'violet'
              },
              {
                term: 'Spot Price (S)',
                definition: 'The current market price of the underlying stock.',
                example: 'If Apple trades at $180, the spot price is $180',
                color: 'emerald'
              },
              {
                term: 'Expiration Date',
                definition: 'The date when the option contract expires and becomes worthless if not exercised.',
                example: 'Options expire on the third Friday of each month (for monthlies)',
                color: 'amber'
              },
              {
                term: 'Intrinsic Value',
                definition: 'The profit you would make if you exercised the option immediately.',
                example: 'Call with K=$100, S=$120 has intrinsic value of $20',
                color: 'fuchsia'
              },
              {
                term: 'Time Value (Extrinsic Value)',
                definition: 'The portion of the premium above intrinsic value. Represents the probability of the option becoming profitable.',
                example: 'If option premium is $25 and intrinsic value is $20, time value is $5',
                color: 'rose'
              },
            ].map((item) => (
              <div key={item.term} className={`p-6 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 space-y-3`}>
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full bg-${item.color}-500/20 font-mono text-sm font-bold text-${item.color}-400`}>
                    {item.term}
                  </div>
                </div>
                <p className="text-zinc-300 leading-relaxed">{item.definition}</p>
                <div className="p-3 rounded-lg bg-black/40 border-l-2 border-cyan-400">
                  <div className="text-xs text-zinc-500 mb-1">Example:</div>
                  <div className="text-sm text-zinc-300">{item.example}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Moneyness - COMPREHENSIVE */}
        <div className="neo-card p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">Understanding Moneyness</h2>
          <p className="text-zinc-300 leading-relaxed text-lg">
            "Moneyness" describes the relationship between the spot price and strike price. It determines whether an option has intrinsic value and significantly affects pricing.
          </p>
  
          <div className="space-y-6">
            {/* ITM */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-lg">
                  ITM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">In-The-Money</h3>
                  <p className="text-sm text-zinc-500">Has intrinsic value</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold text-emerald-400 mb-2">For Calls:</div>
                  <div className="text-zinc-300 text-sm space-y-1">
                    <div className="font-mono">S {'>'} K</div>
                    <div className="text-zinc-400">Stock price is above strike</div>
                    <div className="text-xs text-zinc-500">Example: S=$110, K=$100 → $10 ITM</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-emerald-400 mb-2">For Puts:</div>
                  <div className="text-zinc-300 text-sm space-y-1">
                    <div className="font-mono">K {'>'} S</div>
                    <div className="text-zinc-400">Strike price is above stock</div>
                    <div className="text-xs text-zinc-500">Example: K=$100, S=$90 → $10 ITM</div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black/40">
                <div className="text-sm text-zinc-300">
                  <strong className="text-white">Characteristics:</strong> Higher delta (moves more with stock), more expensive, lower gamma, profitable if exercised immediately
                </div>
              </div>
            </div>
  
            {/* ATM */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 text-lg">
                  ATM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">At-The-Money</h3>
                  <p className="text-sm text-zinc-500">No intrinsic value, pure time value</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-zinc-300">
                  <div className="font-mono mb-1">S ≈ K</div>
                  <div className="text-sm text-zinc-400">Stock price equals (or very close to) strike price</div>
                  <div className="text-xs text-zinc-500 mt-1">Example: S=$100, K=$100</div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black/40">
                <div className="text-sm text-zinc-300">
                  <strong className="text-white">Characteristics:</strong> Delta ≈ 0.50 for calls, ≈ -0.50 for puts, highest gamma (most sensitive to price moves), highest time value, most liquid
                </div>
              </div>
            </div>
  
            {/* OTM */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center font-bold text-rose-400 text-lg">
                  OTM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Out-of-The-Money</h3>
                  <p className="text-sm text-zinc-500">No intrinsic value</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-semibold text-rose-400 mb-2">For Calls:</div>
                  <div className="text-zinc-300 text-sm space-y-1">
                    <div className="font-mono">K {'>'} S</div>
                    <div className="text-zinc-400">Strike is above stock price</div>
                    <div className="text-xs text-zinc-500">Example: K=$110, S=$100 → $10 OTM</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-rose-400 mb-2">For Puts:</div>
                  <div className="text-zinc-300 text-sm space-y-1">
                    <div className="font-mono">S {'>'} K</div>
                    <div className="text-zinc-400">Stock is above strike</div>
                    <div className="text-xs text-zinc-500">Example: S=$110, K=$100 → $10 OTM</div>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-black/40">
                <div className="text-sm text-zinc-300">
                  <strong className="text-white">Characteristics:</strong> Lower delta (less sensitivity), cheaper premium, worthless if exercised now, higher leverage potential, expires worthless if stock doesn't move
                </div>
              </div>
            </div>
          </div>
  
          <InfoBox type="tip">
            <strong>Trading Insight:</strong> OTM options are cheaper but riskier (higher probability of expiring worthless). ITM options are more expensive but have intrinsic value. ATM options offer a balance and are most sensitive to price changes.
          </InfoBox>
        </div>
  
        {/* Contract Specifications */}
        <div className="neo-card p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">Contract Specifications</h2>
          <p className="text-zinc-300 leading-relaxed">
            Understanding how option contracts work in practice:
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Info className="text-cyan-400" size={20} />
                Contract Size
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                One standard option contract represents <strong className="text-cyan-400">100 shares</strong> of the underlying stock. When you see a premium of $5, you pay $500 per contract.
              </p>
              <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <div className="font-mono text-cyan-400 mb-2">Premium × 100 = Total Cost</div>
                <div className="text-sm text-zinc-400">$5 option × 100 shares = $500 per contract</div>
              </div>
            </div>
  
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock className="text-amber-400" size={20} />
                Expiration Cycle
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Standard options expire on the <strong className="text-amber-400">third Friday</strong> of each month at market close. Some stocks also have weekly options expiring every Friday.
              </p>
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div className="text-sm text-zinc-300 space-y-1">
                  <div>• Monthly options: Third Friday</div>
                  <div>• Weekly options: Every Friday</div>
                  <div>• LEAPS: Long-term (1-3 years)</div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
            <h3 className="text-xl font-bold text-white mb-4">Exercise & Assignment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="text-sm font-semibold text-emerald-400 mb-2">American-Style</div>
                <div className="text-sm text-zinc-400 leading-relaxed">
                  Most US stock options are American-style - can be exercised <strong className="text-white">any time</strong> before expiration.
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-violet-400 mb-2">European-Style</div>
                <div className="text-sm text-zinc-400 leading-relaxed">
                  Can only be exercised <strong className="text-white">at expiration</strong>. Common for index options (SPX, RUT).
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Why Trade Options */}
        <div className="neo-card p-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">Why Trade Options?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Leverage',
                desc: 'Control 100 shares with less capital. A $5 option provides exposure to $10,000 worth of stock.',
                icon: Zap,
                color: 'cyan'
              },
              {
                title: 'Limited Risk',
                desc: 'Maximum loss is the premium paid, unlike short selling where losses can be unlimited.',
                icon: AlertCircle,
                color: 'emerald'
              },
              {
                title: 'Hedging',
                desc: 'Protect stock positions from downside moves. Buy puts as "insurance" for your portfolio.',
                icon: CheckCircle,
                color: 'violet'
              },
              {
                title: 'Income Generation',
                desc: 'Sell covered calls to collect premium while holding stock. Generate yield in sideways markets.',
                icon: DollarSign,
                color: 'amber'
              },
              {
                title: 'Directional Bets',
                desc: 'Express bullish, bearish, or neutral views with various strategies tailored to your outlook.',
                icon: TrendingUp,
                color: 'fuchsia'
              },
              {
                title: 'Volatility Trading',
                desc: 'Profit from changes in volatility regardless of direction using straddles, strangles, and other vol strategies.',
                icon: Activity,
                color: 'rose'
              },
            ].map((reason) => {
              const Icon = reason.icon;
              return (
                <div key={reason.title} className={`p-5 rounded-xl bg-${reason.color}-500/10 border border-${reason.color}-500/20 space-y-3`}>
                  <div className="flex items-center gap-3">
                    <Icon className={`text-${reason.color}-400`} size={24} />
                    <h3 className="font-bold text-white">{reason.title}</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">{reason.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  
  
  export function BlackScholesDeepSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <Calculator className="text-violet-400" size={44} />
              Black-Scholes Deep Dive
            </h1>
            <p className="text-xl text-zinc-400">
              The mathematical foundation of modern options pricing
            </p>
          </div>
    
          {/* History */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Historical Context</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The Black-Scholes model, published in 1973 by Fischer Black, Myron Scholes, and Robert Merton, revolutionized finance. It provided the first theoretical framework for pricing European-style options and earned Scholes and Merton the 1997 Nobel Prize in Economics (Black had passed away by then).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <div className="text-3xl font-bold text-violet-400 mb-2">1973</div>
                <div className="text-sm text-zinc-400">Model published, transforming derivatives trading</div>
              </div>
              <div className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">1997</div>
                <div className="text-sm text-zinc-400">Nobel Prize awarded for breakthrough</div>
              </div>
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">Today</div>
                <div className="text-sm text-zinc-400">Industry standard for options pricing</div>
              </div>
            </div>
          </div>
    
          {/* The Formula */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">The Black-Scholes Formula</h2>
            <p className="text-zinc-300 leading-relaxed">
              The formula calculates the theoretical price of European-style options based on five inputs:
            </p>
    
            <div className="space-y-6">
              <div>
                <div className="text-lg font-semibold text-emerald-400 mb-3">Call Option Price:</div>
                <MathFormula 
                  formula="C = S × N(d₁) - K × e^(-rT) × N(d₂)"
                  description="Where C is the call price, S is spot price, K is strike, r is risk-free rate, T is time to expiration"
                />
              </div>
    
              <div>
                <div className="text-lg font-semibold text-rose-400 mb-3">Put Option Price:</div>
                <MathFormula 
                  formula="P = K × e^(-rT) × N(-d₂) - S × N(-d₁)"
                  description="Where P is the put price. Note the negative N() values for puts"
                />
              </div>
    
              <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-black/60 border border-zinc-800/50 space-y-4">
                <div className="text-lg font-semibold text-cyan-400">The d₁ and d₂ terms:</div>
                <div className="space-y-3">
                  <div className="font-mono text-violet-400 text-base">
                    d₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T)
                  </div>
                  <div className="font-mono text-violet-400 text-base">
                    d₂ = d₁ - σ√T
                  </div>
                </div>
                <div className="text-sm text-zinc-400 leading-relaxed">
                  • N(x) is the cumulative normal distribution function<br/>
                  • ln is the natural logarithm<br/>
                  • e is Euler's number (≈2.71828)
                </div>
              </div>
            </div>
    
            <InfoBox type="info">
              <strong>What is N(d)?</strong> N(d) represents the probability that a random variable from a standard normal distribution is less than d. In options pricing, N(d₁) can be interpreted as the probability the option expires in-the-money (adjusted for dividends), while N(d₂) is the risk-neutral probability of exercise.
            </InfoBox>
          </div>
    
          {/* Parameters Explained */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Understanding Each Parameter</h2>
            <div className="space-y-6">
              {[
                {
                  symbol: 'S',
                  name: 'Spot Price',
                  explanation: 'The current market price of the underlying stock. As S increases, call prices increase and put prices decrease.',
                  impact: 'Direct relationship with calls, inverse with puts',
                  example: 'If Apple trades at $180, S = 180',
                  color: 'cyan',
                  sensitivity: 'Measured by Delta (Δ)'
                },
                {
                  symbol: 'K',
                  name: 'Strike Price',
                  explanation: 'The fixed price at which the option can be exercised. Lower strikes make calls more valuable, higher strikes make puts more valuable.',
                  impact: 'Inverse relationship with calls, direct with puts',
                  example: 'A $200 strike call is cheaper than a $180 strike call',
                  color: 'violet',
                  sensitivity: 'No Greek measures this (it\'s fixed)'
                },
                {
                  symbol: 'T',
                  name: 'Time to Expiration',
                  explanation: 'Time remaining until expiration, expressed in years. More time = more opportunity for the stock to move favorably.',
                  impact: 'More time increases option value (usually)',
                  example: 'T = 0.25 represents 3 months (91 days / 365)',
                  color: 'amber',
                  sensitivity: 'Measured by Theta (Θ)'
                },
                {
                  symbol: 'r',
                  name: 'Risk-Free Rate',
                  explanation: 'The theoretical return on a risk-free investment (typically US Treasury rates). Used to discount future cash flows.',
                  impact: 'Higher rates increase call prices, decrease put prices',
                  example: 'If 3-month T-Bill yields 5%, r = 0.05',
                  color: 'emerald',
                  sensitivity: 'Measured by Rho (ρ)'
                },
                {
                  symbol: 'σ',
                  name: 'Volatility (Sigma)',
                  explanation: 'Expected annualized standard deviation of stock returns. Higher volatility = larger potential moves = higher option prices.',
                  impact: 'Increases value of both calls and puts',
                  example: 'σ = 0.30 means 30% expected annual volatility',
                  color: 'fuchsia',
                  sensitivity: 'Measured by Vega (ν)'
                },
              ].map((param) => (
                <div key={param.symbol} className={`p-6 rounded-xl bg-${param.color}-500/10 border border-${param.color}-500/20 space-y-4`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-${param.color}-500/20 flex items-center justify-center`}>
                        <span className={`font-mono font-bold text-2xl text-${param.color}-400`}>{param.symbol}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{param.name}</h3>
                        <div className="text-xs text-zinc-500 mt-1">{param.sensitivity}</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-zinc-300 leading-relaxed">{param.explanation}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-black/40">
                      <div className="text-xs text-zinc-500 mb-1">Impact:</div>
                      <div className="text-sm text-zinc-300">{param.impact}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <div className="text-xs text-zinc-500 mb-1">Example:</div>
                      <div className="text-sm text-zinc-300">{param.example}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Assumptions */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Model Assumptions</h2>
            <p className="text-zinc-300 leading-relaxed">
              The Black-Scholes model makes several key assumptions. Understanding these helps identify when the model might be less accurate:
            </p>
    
            <div className="space-y-4">
              {[
                {
                  assumption: 'European Exercise',
                  explanation: 'The option can only be exercised at expiration, not before. Most US stock options are American-style, making this a limitation.',
                  reality: 'For deep ITM calls on dividend-paying stocks, early exercise might be optimal.',
                  icon: '1'
                },
                {
                  assumption: 'No Dividends',
                  explanation: 'The model assumes the underlying stock pays no dividends during the option\'s life.',
                  reality: 'Modified versions (Black-Scholes-Merton) account for continuous dividend yields.',
                  icon: '2'
                },
                {
                  assumption: 'Constant Volatility',
                  explanation: 'Volatility (σ) remains constant over the option\'s life.',
                  reality: 'Volatility changes based on market conditions. This is why we see the "volatility smile."',
                  icon: '3'
                },
                {
                  assumption: 'Constant Risk-Free Rate',
                  explanation: 'Interest rates remain unchanged.',
                  reality: 'Rates can fluctuate, especially for longer-dated options.',
                  icon: '4'
                },
                {
                  assumption: 'Lognormal Distribution',
                  explanation: 'Stock returns follow a lognormal distribution (prices can\'t go negative).',
                  reality: 'Real markets have "fat tails" - extreme moves are more common than the model predicts.',
                  icon: '5'
                },
                {
                  assumption: 'No Transaction Costs',
                  explanation: 'Trading is frictionless with no commissions or taxes.',
                  reality: 'Real trading has spreads, commissions, and slippage.',
                  icon: '6'
                },
                {
                  assumption: 'Continuous Trading',
                  explanation: 'Markets are always open and liquid.',
                  reality: 'Markets close overnight and on weekends. Liquidity varies.',
                  icon: '7'
                },
              ].map((item) => (
                <div key={item.icon} className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 font-bold text-violet-400">
                      {item.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-bold text-white">{item.assumption}</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">{item.explanation}</p>
                      <div className="p-3 rounded-lg bg-amber-500/5 border-l-2 border-amber-400">
                        <div className="text-xs text-amber-400 font-semibold mb-1">Reality Check:</div>
                        <div className="text-xs text-zinc-300">{item.reality}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            <InfoBox type="warning">
              <strong>Important:</strong> Despite these limitations, Black-Scholes remains the industry standard because it provides a consistent framework for pricing and risk management. Traders adjust for its shortcomings using techniques like implied volatility surfaces and numerical methods.
            </InfoBox>
          </div>
    
          {/* Practical Example */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Worked Example</h2>
            <p className="text-zinc-300">
              Let's calculate the price of a call option step by step:
            </p>
    
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 space-y-4">
              <h3 className="text-xl font-bold text-white">Given Parameters:</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="p-3 rounded-lg bg-black/40">
                  <div className="text-xs text-cyan-400 mb-1">Spot (S)</div>
                  <div className="font-mono text-white">$100</div>
                </div>
                <div className="p-3 rounded-lg bg-black/40">
                  <div className="text-xs text-violet-400 mb-1">Strike (K)</div>
                  <div className="font-mono text-white">$100</div>
                </div>
                <div className="p-3 rounded-lg bg-black/40">
                  <div className="text-xs text-amber-400 mb-1">Time (T)</div>
                  <div className="font-mono text-white">0.25 yr</div>
                </div>
                <div className="p-3 rounded-lg bg-black/40">
                  <div className="text-xs text-emerald-400 mb-1">Rate (r)</div>
                  <div className="font-mono text-white">5%</div>
                </div>
                <div className="p-3 rounded-lg bg-black/40">
                  <div className="text-xs text-fuchsia-400 mb-1">Vol (σ)</div>
                  <div className="font-mono text-white">30%</div>
                </div>
              </div>
            </div>
    
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="text-sm font-semibold text-cyan-400 mb-2">Step 1: Calculate d₁</div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  d₁ = [ln(100/100) + (0.05 + 0.30²/2) × 0.25] / (0.30 × √0.25)
                </div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  d₁ = [0 + (0.05 + 0.045) × 0.25] / (0.30 × 0.5)
                </div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  d₁ = 0.02375 / 0.15
                </div>
                <div className="font-mono text-lg text-cyan-400">
                  d₁ = 0.1583
                </div>
              </div>
    
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="text-sm font-semibold text-violet-400 mb-2">Step 2: Calculate d₂</div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  d₂ = d₁ - σ√T
                </div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  d₂ = 0.1583 - (0.30 × 0.5)
                </div>
                <div className="font-mono text-lg text-violet-400">
                  d₂ = 0.0083
                </div>
              </div>
    
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="text-sm font-semibold text-emerald-400 mb-2">Step 3: Look up N(d₁) and N(d₂)</div>
                <div className="font-mono text-sm text-zinc-300">
                  N(0.1583) = 0.5629 (from normal distribution table)
                </div>
                <div className="font-mono text-sm text-zinc-300">
                  N(0.0083) = 0.5033
                </div>
              </div>
    
              <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="text-sm font-semibold text-amber-400 mb-2">Step 4: Calculate Call Price</div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  C = S × N(d₁) - K × e^(-rT) × N(d₂)
                </div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  C = 100 × 0.5629 - 100 × e^(-0.05×0.25) × 0.5033
                </div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  C = 56.29 - 100 × 0.9876 × 0.5033
                </div>
                <div className="font-mono text-sm text-zinc-300 mb-2">
                  C = 56.29 - 49.70
                </div>
                <div className="font-mono text-2xl text-emerald-400">
                  C = $6.59
                </div>
              </div>
            </div>
    
            <InfoBox type="success">
              <strong>Result:</strong> The theoretical price of this ATM call option is $6.59. You can verify this calculation using OptionsSurface by inputting the same parameters!
            </InfoBox>
          </div>
        </div>
      );
    }
    
export function GreeksExplainedSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <Activity className="text-cyan-400" size={44} />
              The Greeks Explained
            </h1>
            <p className="text-xl text-zinc-400">
              Master the risk metrics that drive options trading
            </p>
          </div>
    
          {/* Overview */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">What Are the Greeks?</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The "Greeks" are partial derivatives of the Black-Scholes formula that measure how sensitive an option's price is to changes in various parameters. They're called Greeks because they're represented by Greek letters (Δ, Γ, Θ, ν, ρ).
            </p>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
              <h3 className="text-xl font-bold text-white mb-4">Why Greeks Matter:</h3>
              <div className="space-y-3">
                {[
                  'Risk Management: Understand how your position will react to market changes',
                  'Hedging: Determine how many shares/contracts needed to neutralize risk',
                  'Strategy Selection: Choose strategies based on your market view',
                  'Position Monitoring: Track daily P&L attribution',
                  'Professional Trading: Market makers use Greeks to stay delta-neutral',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-zinc-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          {/* DELTA - Comprehensive */}
          <div className="neo-card p-8 space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <TrendingUp className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Delta (Δ)</h2>
                <p className="text-zinc-500">The "speed" of your option</p>
              </div>
            </div>
    
            <MathFormula 
              formula="Δ = ∂V/∂S"
              description="Rate of change in option price with respect to $1 change in stock price"
            />
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-4">
                <h3 className="text-xl font-bold text-emerald-400">Call Options</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <div className="text-emerald-400 font-semibold mb-1">Range: 0 to +1.0</div>
                    <div className="text-zinc-400">Positive delta - profits from rising stock</div>
                  </div>
                  <div>
                    <strong className="text-white">Deep OTM:</strong> Δ ≈ 0.10 (10% sensitivity)
                  </div>
                  <div>
                    <strong className="text-white">ATM:</strong> Δ ≈ 0.50 (50% sensitivity)
                  </div>
                  <div>
                    <strong className="text-white">Deep ITM:</strong> Δ ≈ 0.90-1.0 (moves like stock)
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-4">
                <h3 className="text-xl font-bold text-rose-400">Put Options</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <div className="text-rose-400 font-semibold mb-1">Range: -1.0 to 0</div>
                    <div className="text-zinc-400">Negative delta - profits from falling stock</div>
                  </div>
                  <div>
                    <strong className="text-white">Deep OTM:</strong> Δ ≈ -0.10 (10% sensitivity)
                  </div>
                  <div>
                    <strong className="text-white">ATM:</strong> Δ ≈ -0.50 (50% sensitivity)
                  </div>
                  <div>
                    <strong className="text-white">Deep ITM:</strong> Δ ≈ -0.90 to -1.0 (moves like short stock)
                  </div>
                </div>
              </div>
            </div>
    
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Delta Interpretation Examples:</h3>
              {[
                {
                  delta: '0.60',
                  type: 'Call',
                  meaning: 'If stock rises $1, option gains ~$0.60. If stock falls $1, option loses ~$0.60.',
                  hedge: 'Need to sell 60 shares per contract to be delta-neutral',
                },
                {
                  delta: '-0.40',
                  type: 'Put',
                  meaning: 'If stock rises $1, option loses ~$0.40. If stock falls $1, option gains ~$0.40.',
                  hedge: 'Need to buy 40 shares per contract to be delta-neutral',
                },
                {
                  delta: '0.25',
                  type: 'Call',
                  meaning: 'Only 25% stock sensitivity. This OTM call needs a big move to profit.',
                  hedge: '25% chance of expiring ITM (rough approximation)',
                },
              ].map((example, i) => (
                <div key={i} className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="px-3 py-1 rounded-full bg-cyan-500/20 font-mono text-cyan-400 font-bold">
                      Δ = {example.delta}
                    </div>
                    <div className={`px-3 py-1 rounded-full ${example.type === 'Call' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'} text-sm font-semibold`}>
                      {example.type}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="text-zinc-300">{example.meaning}</div>
                    <div className="p-3 rounded-lg bg-cyan-500/5 border-l-2 border-cyan-400">
                      <span className="text-cyan-400 font-semibold">Hedge: </span>
                      <span className="text-zinc-300">{example.hedge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            <InfoBox type="tip">
              <strong>Pro Tip:</strong> Delta also approximates the probability that an option will expire in-the-money. A call with Δ = 0.70 has roughly a 70% chance of expiring ITM (under risk-neutral assumptions).
            </InfoBox>
          </div>
    
          {/* GAMMA - Comprehensive */}
          <div className="neo-card p-8 space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Activity className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Gamma (Γ)</h2>
                <p className="text-zinc-500">The "acceleration" of your option</p>
              </div>
            </div>
    
            <MathFormula 
              formula="Γ = ∂²V/∂S² = ∂Δ/∂S"
              description="Rate of change of Delta with respect to $1 change in stock price"
            />
    
            <p className="text-zinc-300 leading-relaxed text-lg">
              While Delta tells you your current sensitivity to stock moves, Gamma tells you how quickly that sensitivity changes. High Gamma positions require frequent rehedging.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-violet-500/10 border border-violet-500/20 space-y-4">
                <h3 className="text-xl font-bold text-violet-400">Positive Gamma (Long Options)</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Delta increases as stock rises (good!)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Delta decreases as stock falls (limits losses)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Benefits from large price swings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Highest for ATM options near expiration</span>
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-4">
                <h3 className="text-xl font-bold text-rose-400">Negative Gamma (Short Options)</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Delta works against you as stock moves</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Losses accelerate with large moves</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Requires frequent, expensive rehedging</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Most dangerous near expiration</span>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
              <h3 className="text-xl font-bold text-white mb-4">Gamma Through Option Life:</h3>
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="p-3 rounded-lg bg-violet-500/10">
                  <strong className="text-violet-400">Far from expiration:</strong> Gamma is relatively low and stable. Delta changes slowly.
                </div>
                <div className="p-3 rounded-lg bg-violet-500/10">
                  <strong className="text-violet-400">Approaching expiration (ATM):</strong> Gamma spikes dramatically. Delta becomes highly unstable - a small stock move can swing Delta from 0.40 to 0.60.
                </div>
                <div className="p-3 rounded-lg bg-violet-500/10">
                  <strong className="text-violet-400">Deep ITM/OTM:</strong> Gamma approaches zero. Delta is stable near 1.0 or 0.
                </div>
              </div>
            </div>
    
            <InfoBox type="warning">
              <strong>Gamma Risk:</strong> High Gamma can be a double-edged sword. While it benefits long option holders during volatile periods, it creates massive risk for option sellers who must constantly rehedge at unfavorable prices. This is called "gamma scalping."
            </InfoBox>
    
            <div className="p-5 rounded-xl bg-cyan-500/5 border-l-4 border-cyan-400">
              <div className="text-sm font-semibold text-cyan-400 mb-2">Real-World Example</div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                You own an ATM call with Δ = 0.50, Γ = 0.05. Stock jumps $2. Your new Delta is approximately 0.50 + (0.05 × $2) = 0.60. The option gained more than 2 × $0.50 = $1.00 because Delta increased mid-flight. With Gamma working for you, you might gain $1.10-$1.20 instead.
              </p>
            </div>
          </div>
    
          {/* THETA - Comprehensive */}
          <div className="neo-card p-8 space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Clock className="text-white" size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Theta (Θ)</h2>
                <p className="text-zinc-500">Time decay - the silent killer</p>
              </div>
            </div>
    
            <MathFormula 
              formula="Θ = ∂V/∂t"
              description="Rate of change in option value per day (all else equal)"
            />
    
            <p className="text-zinc-300 leading-relaxed text-lg">
              Theta measures time decay - how much value your option loses each day simply due to the passage of time. This is why options are called "wasting assets."
            </p>
    
            <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Understanding Time Decay</h3>
              <div className="space-y-4 text-sm text-zinc-300">
                <div className="p-4 rounded-lg bg-black/40">
                  <strong className="text-white">Key Insight:</strong> Time decay is NOT linear. It accelerates as expiration approaches, especially for ATM options.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg bg-black/40 text-center">
                    <div className="text-2xl font-bold text-amber-400 mb-1">Slow</div>
                    <div className="text-xs text-zinc-400">6+ months out</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 text-center">
                    <div className="text-2xl font-bold text-orange-400 mb-1">Faster</div>
                    <div className="text-xs text-zinc-400">1-3 months out</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 text-center">
                    <div className="text-2xl font-bold text-rose-400 mb-1">Rapid</div>
                    <div className="text-xs text-zinc-400">Last 30 days</div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-4">
                <h3 className="text-xl font-bold text-rose-400">Option Buyers (Negative Θ)</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Lose money every day from time decay</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Stock must move enough to overcome decay</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Most painful for ATM options near expiry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Need directional conviction or volatility edge</span>
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-4">
                <h3 className="text-xl font-bold text-emerald-400">Option Sellers (Positive Θ)</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Collect time decay profits daily</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Time is your ally in sideways markets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>Highest theta collecting ATM near expiry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
                    <span>But exposed to Gamma risk!</span>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
              <h3 className="text-xl font-bold text-white mb-4">Theta Examples:</h3>
              <div className="space-y-3">
                {[
                  {
                    theta: '-0.05',
                    cost: '$5/day',
                    meaning: 'Your option loses $5 in value per day if nothing else changes',
                    time: '30 days to expiry, ATM'
                  },
                  {
                    theta: '-0.02',
                    cost: '$2/day',
                    meaning: 'Much slower decay - option has time to work',
                    time: '90 days to expiry'
                  },
                  {
                    theta: '-0.15',
                    cost: '$15/day',
                    meaning: 'Brutal decay - need immediate stock movement',
                    time: '7 days to expiry, ATM'
                  },
                ].map((ex, i) => (
                  <div key={i} className="p-4 rounded-lg bg-black/40">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="px-3 py-1 rounded-full bg-amber-500/20 font-mono text-amber-400 font-bold text-sm">
                        Θ = {ex.theta}
                      </div>
                      <div className="text-white font-semibold">{ex.cost}</div>
                    </div>
                    <div className="text-sm text-zinc-300 mb-1">{ex.meaning}</div>
                    <div className="text-xs text-zinc-500">{ex.time}</div>
                  </div>
                ))}
              </div>
            </div>
    
            <InfoBox type="tip">
              <strong>Strategic Tip:</strong> As a rule of thumb, avoid buying options with less than 30 days to expiry unless you have strong conviction and a specific catalyst. Time decay accelerates dramatically in the final month. Consider selling premium instead to benefit from Theta.
            </InfoBox>
          </div>
    
          // Continue inside GreeksExplainedSection - add VEGA and RHO
  
  {/* VEGA - Comprehensive */}
  <div className="neo-card p-8 space-y-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
        <Zap className="text-white" size={32} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Vega (ν)</h2>
        <p className="text-zinc-500">Volatility sensitivity</p>
      </div>
    </div>
  
    <MathFormula 
      formula="ν = ∂V/∂σ"
      description="Rate of change in option price per 1% change in implied volatility"
    />
  
    <p className="text-zinc-300 leading-relaxed text-lg">
      Vega measures how much your option's value changes when implied volatility increases or decreases by 1 percentage point. Both calls and puts have positive Vega - they gain value when volatility rises.
    </p>
  
    <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20">
      <h3 className="text-xl font-bold text-emerald-400 mb-4">Why Volatility Matters</h3>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-3 rounded-lg bg-black/40">
          Higher volatility = larger expected price swings = more valuable options (both calls AND puts)
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          Implied volatility can change dramatically based on market events, earnings, news, etc.
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          Vega is highest for ATM options with more time to expiration (6+ months)
        </div>
      </div>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-4">
        <h3 className="text-xl font-bold text-emerald-400">Long Options (Positive Vega)</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Profit when volatility increases</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Good for uncertain events (earnings, Fed meetings)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Straddles & strangles maximize Vega exposure</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Buy when vol is low, sell when vol spikes</span>
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-4">
        <h3 className="text-xl font-bold text-rose-400">Short Options (Negative Vega)</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div className="flex items-start gap-2">
            <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Profit when volatility decreases</span>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Good in calm, stable markets</span>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Risk: "Vol crush" after events can hurt buyers</span>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={16} />
            <span>Sell high vol, buy back when vol drops</span>
          </div>
        </div>
      </div>
    </div>
  
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white">Vega Examples:</h3>
      {[
        {
          vega: '0.20',
          change: 'Vol 30% → 31%',
          impact: 'Option gains $20 in value (0.20 × 1 × 100 shares)',
          context: 'Longer-dated ATM option'
        },
        {
          vega: '0.08',
          change: 'Vol 25% → 30%',
          impact: 'Option gains $40 in value (0.08 × 5 × 100 shares)',
          context: 'Near-term option, or OTM'
        },
        {
          vega: '0.35',
          change: 'Vol spikes 40% → 60%',
          impact: 'Option gains $700 (0.35 × 20 × 100)! Massive vol expansion',
          context: 'LEAPS, very high Vega exposure'
        },
      ].map((ex, i) => (
        <div key={i} className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
          <div className="flex items-center gap-3 mb-3">
            <div className="px-3 py-1 rounded-full bg-emerald-500/20 font-mono text-emerald-400 font-bold">
              ν = {ex.vega}
            </div>
            <div className="text-zinc-400 text-sm">{ex.change}</div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="text-white font-semibold">{ex.impact}</div>
            <div className="text-zinc-500 text-xs">{ex.context}</div>
          </div>
        </div>
      ))}
    </div>
  
    <InfoBox type="warning">
      <strong>Vol Crush Warning:</strong> Implied volatility often spikes before major events (earnings) and crashes immediately after. If you buy options right before earnings expecting a big move, you might still lose money if the vol crush outweighs the directional gain. This is why many traders SELL options before earnings to profit from the crush.
    </InfoBox>
  
    <div className="p-5 rounded-xl bg-cyan-500/5 border-l-4 border-cyan-400">
      <div className="text-sm font-semibold text-cyan-400 mb-2">Real-World Scenario</div>
      <p className="text-sm text-zinc-300 leading-relaxed">
        Apple trading at $180, earnings tomorrow. Options are priced at 50% implied vol (very high). You buy a $180 straddle for $15 total premium. Apple moves to $190 (good!), but implied vol crashes from 50% to 25% after earnings. Despite the $10 move, your straddle might only be worth $12-13 because of the vol crush. You lose money despite being right about direction.
      </p>
    </div>
  </div>
  
  {/* RHO - Comprehensive */}
  <div className="neo-card p-8 space-y-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center">
        <DollarSign className="text-white" size={32} />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white">Rho (ρ)</h2>
        <p className="text-zinc-500">Interest rate sensitivity</p>
      </div>
    </div>
  
    <MathFormula 
      formula="ρ = ∂V/∂r"
      description="Rate of change in option price per 1% change in risk-free interest rate"
    />
  
    <p className="text-zinc-300 leading-relaxed text-lg">
      Rho measures how much your option's value changes when interest rates change by 1 percentage point. It's typically the least important Greek for most traders, but becomes relevant for long-dated options (LEAPS) or in periods of rapidly changing rates.
    </p>
  
    <div className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 border border-fuchsia-500/20">
      <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Why Interest Rates Affect Options</h3>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-3 rounded-lg bg-black/40">
          <strong className="text-white">Call Options:</strong> Higher rates increase call values (you can earn interest on cash while waiting, making buying stock via call more attractive)
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          <strong className="text-white">Put Options:</strong> Higher rates decrease put values (opportunity cost of holding cash for future stock purchase)
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          <strong className="text-white">Present Value:</strong> Strike price is discounted at risk-free rate - higher rates mean lower present value of strike
        </div>
      </div>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <h3 className="text-lg font-bold text-emerald-400 mb-3">Calls: Positive Rho</h3>
        <div className="space-y-2 text-sm text-zinc-300">
          <div>Rising rates → Call prices increase</div>
          <div>Falling rates → Call prices decrease</div>
          <div className="text-xs text-zinc-500 mt-2">LEAPS calls most sensitive</div>
        </div>
      </div>
      <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20">
        <h3 className="text-lg font-bold text-rose-400 mb-3">Puts: Negative Rho</h3>
        <div className="space-y-2 text-sm text-zinc-300">
          <div>Rising rates → Put prices decrease</div>
          <div>Falling rates → Put prices increase</div>
          <div className="text-xs text-zinc-500 mt-2">Effect is typically small</div>
        </div>
      </div>
    </div>
  
    <div className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
      <h3 className="text-xl font-bold text-white mb-4">Practical Reality:</h3>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="flex items-start gap-2">
          <Info className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
          <span><strong className="text-white">Near-term options:</strong> Rho is negligible (typically 0.01-0.05)</span>
        </div>
        <div className="flex items-start gap-2">
          <Info className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
          <span><strong className="text-white">LEAPS (2+ years):</strong> Rho can be 0.30-0.70, making rate changes meaningful</span>
        </div>
        <div className="flex items-start gap-2">
          <Info className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
          <span><strong className="text-white">Most traders:</strong> Can safely ignore Rho unless holding long-dated positions</span>
        </div>
      </div>
    </div>
  
    <InfoBox type="tip">
      <strong>When Rho Matters:</strong> If the Fed is actively hiking or cutting rates by 1-2% per year AND you hold 1-2 year LEAPS, Rho becomes relevant. For example, a 2-year LEAP call with ρ = 0.50 would gain $50 per contract if rates rise 1%. Otherwise, focus on Delta, Gamma, Theta, and Vega first.
    </InfoBox>
  </div>
  
  {/* Greeks Summary Table */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Quick Reference Table</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="text-left py-3 px-4 text-white">Greek</th>
            <th className="text-left py-3 px-4 text-white">Measures</th>
            <th className="text-left py-3 px-4 text-white">Long Call</th>
            <th className="text-left py-3 px-4 text-white">Long Put</th>
            <th className="text-left py-3 px-4 text-white">When Most Important</th>
          </tr>
        </thead>
        <tbody className="text-zinc-300">
          <tr className="border-b border-zinc-800/50">
            <td className="py-3 px-4 font-mono text-cyan-400">Delta (Δ)</td>
            <td className="py-3 px-4">Stock price sensitivity</td>
            <td className="py-3 px-4">0 to +1.0</td>
            <td className="py-3 px-4">-1.0 to 0</td>
            <td className="py-3 px-4">Always - directional exposure</td>
          </tr>
          <tr className="border-b border-zinc-800/50">
            <td className="py-3 px-4 font-mono text-violet-400">Gamma (Γ)</td>
            <td className="py-3 px-4">Delta change rate</td>
            <td className="py-3 px-4">Positive</td>
            <td className="py-3 px-4">Positive</td>
            <td className="py-3 px-4">ATM near expiration</td>
          </tr>
          <tr className="border-b border-zinc-800/50">
            <td className="py-3 px-4 font-mono text-amber-400">Theta (Θ)</td>
            <td className="py-3 px-4">Daily time decay</td>
            <td className="py-3 px-4">Negative</td>
            <td className="py-3 px-4">Negative</td>
            <td className="py-3 px-4">Last 30-45 days</td>
          </tr>
          <tr className="border-b border-zinc-800/50">
            <td className="py-3 px-4 font-mono text-emerald-400">Vega (ν)</td>
            <td className="py-3 px-4">Volatility sensitivity</td>
            <td className="py-3 px-4">Positive</td>
            <td className="py-3 px-4">Positive</td>
            <td className="py-3 px-4">Before events, vol changes</td>
          </tr>
          <tr>
            <td className="py-3 px-4 font-mono text-fuchsia-400">Rho (ρ)</td>
            <td className="py-3 px-4">Interest rate sensitivity</td>
            <td className="py-3 px-4">Positive</td>
            <td className="py-3 px-4">Negative</td>
            <td className="py-3 px-4">LEAPS, rate changes</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  );
  }
  
  
  export function PricingDynamicsSection() {
  return (
  <div className="space-y-8">
  <div>
    <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
      <LineChart className="text-emerald-400" size={44} />
      Pricing Dynamics
    </h1>
    <p className="text-xl text-zinc-400">
      How option prices actually move in real markets
    </p>
  </div>
  
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Intrinsic vs. Extrinsic Value</h2>
    <p className="text-zinc-300 leading-relaxed text-lg">
      Every option's price (premium) consists of two components:
    </p>
  
    <MathFormula 
      formula="Option Premium = Intrinsic Value + Extrinsic Value (Time Value)"
    />
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-4">
        <h3 className="text-2xl font-bold text-emerald-400">Intrinsic Value</h3>
        <p className="text-zinc-300 leading-relaxed">
          The profit you'd make if you exercised the option RIGHT NOW. It's the "guaranteed" portion of value.
        </p>
        <div className="p-4 rounded-lg bg-black/40 space-y-2">
          <div className="font-mono text-emerald-400">Call: max(S - K, 0)</div>
          <div className="font-mono text-emerald-400">Put: max(K - S, 0)</div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="p-3 rounded-lg bg-black/40">
            <strong className="text-white">Example 1:</strong> Stock at $110, Call strike $100<br/>
            <span className="text-emerald-400">Intrinsic = $110 - $100 = $10</span>
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            <strong className="text-white">Example 2:</strong> Stock at $90, Call strike $100<br/>
            <span className="text-zinc-400">Intrinsic = $0 (OTM has no intrinsic value)</span>
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20 space-y-4">
        <h3 className="text-2xl font-bold text-violet-400">Extrinsic (Time) Value</h3>
        <p className="text-zinc-300 leading-relaxed">
          The "extra" premium above intrinsic value. Represents the probability the option becomes more valuable before expiration.
        </p>
        <div className="p-4 rounded-lg bg-black/40">
          <div className="font-mono text-violet-400">Extrinsic = Premium - Intrinsic</div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="p-3 rounded-lg bg-black/40">
            <strong className="text-white">Example:</strong> ATM call trading at $8<br/>
            Intrinsic = $0, Extrinsic = $8<br/>
            <span className="text-violet-400">100% of premium is time value!</span>
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            <strong className="text-white">Factors:</strong><br/>
            • More time = more extrinsic<br/>
            • Higher vol = more extrinsic<br/>
            • ATM options = maximum extrinsic
          </div>
        </div>
      </div>
    </div>
  
    <InfoBox type="info">
      <strong>Key Insight:</strong> At expiration, all extrinsic value vanishes. The option is worth ONLY its intrinsic value. This is why ATM options lose value so rapidly in the final days - they're 100% extrinsic value that's evaporating.
    </InfoBox>
  </div>
  
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">How Moneyness Affects Pricing</h2>
    
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">Deep ITM Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
          <div>
            <strong className="text-white">Pricing:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• Mostly intrinsic value</li>
              <li>• Small extrinsic component</li>
              <li>• Delta near 1.0 or -1.0</li>
              <li>• Move almost 1:1 with stock</li>
            </ul>
          </div>
          <div>
            <strong className="text-white">Characteristics:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• Low Gamma (stable Delta)</li>
              <li>• Low Theta (little to decay)</li>
              <li>• Low Vega (vol doesn't matter)</li>
              <li>• Acts like owning stock</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-black/40">
          <strong className="text-emerald-400">Use Case:</strong> Stock replacement - similar exposure to shares but with leverage and limited risk
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">ATM Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
          <div>
            <strong className="text-white">Pricing:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• Zero intrinsic value</li>
              <li>• 100% extrinsic value</li>
              <li>• Delta around 0.50</li>
              <li>• Maximum time value</li>
            </ul>
          </div>
          <div>
            <strong className="text-white">Characteristics:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• Highest Gamma (unstable)</li>
              <li>• Highest Theta (rapid decay)</li>
              <li>• Highest Vega (vol sensitive)</li>
              <li>• Most liquid/active</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-black/40">
          <strong className="text-cyan-400">Use Case:</strong> Directional trades with balanced risk/reward, or volatility plays (straddles/strangles)
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/5 border border-rose-500/20">
        <h3 className="text-xl font-bold text-rose-400 mb-4">OTM Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
          <div>
            <strong className="text-white">Pricing:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• Zero intrinsic value</li>
              <li>• Small extrinsic value</li>
              <li>• Low Delta (0.10-0.40)</li>
              <li>• Cheap premium</li>
            </ul>
          </div>
          <div>
            <strong className="text-white">Characteristics:</strong>
            <ul className="mt-2 space-y-1 ml-4">
              <li>• Moderate Gamma</li>
              <li>• Lower Theta than ATM</li>
              <li>• Lower Vega than ATM</li>
              <li>• High leverage potential</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-black/40">
          <strong className="text-rose-400">Use Case:</strong> Lottery tickets - cheap bets on big moves, but high probability of expiring worthless
        </div>
      </div>
    </div>
  </div>
  
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Comparative Example</h2>
    <p className="text-zinc-300">
      Stock trading at $100, 30 days to expiration, 30% volatility:
    </p>
  
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800">
            <th className="text-left py-3 px-4 text-white">Strike</th>
            <th className="text-left py-3 px-4 text-white">Type</th>
            <th className="text-left py-3 px-4 text-white">Premium</th>
            <th className="text-left py-3 px-4 text-white">Intrinsic</th>
            <th className="text-left py-3 px-4 text-white">Extrinsic</th>
            <th className="text-left py-3 px-4 text-white">Delta</th>
            <th className="text-left py-3 px-4 text-white">Gamma</th>
          </tr>
        </thead>
        <tbody className="text-zinc-300">
          <tr className="border-b border-zinc-800/50 bg-emerald-500/5">
            <td className="py-3 px-4 font-mono">$90</td>
            <td className="py-3 px-4">Call</td>
            <td className="py-3 px-4 font-mono">$11.50</td>
            <td className="py-3 px-4 font-mono text-emerald-400">$10.00</td>
            <td className="py-3 px-4 font-mono text-violet-400">$1.50</td>
            <td className="py-3 px-4 font-mono">0.90</td>
            <td className="py-3 px-4 font-mono">0.02</td>
          </tr>
          <tr className="border-b border-zinc-800/50 bg-cyan-500/5">
            <td className="py-3 px-4 font-mono">$100</td>
            <td className="py-3 px-4">Call</td>
            <td className="py-3 px-4 font-mono">$3.50</td>
            <td className="py-3 px-4 font-mono">$0.00</td>
            <td className="py-3 px-4 font-mono text-violet-400">$3.50</td>
            <td className="py-3 px-4 font-mono">0.50</td>
            <td className="py-3 px-4 font-mono">0.08</td>
          </tr>
          <tr className="bg-rose-500/5">
            <td className="py-3 px-4 font-mono">$110</td>
            <td className="py-3 px-4">Call</td>
            <td className="py-3 px-4 font-mono">$0.80</td>
            <td className="py-3 px-4 font-mono">$0.00</td>
            <td className="py-3 px-4 font-mono text-violet-400">$0.80</td>
            <td className="py-3 px-4 font-mono">0.15</td>
            <td className="py-3 px-4 font-mono">0.04</td>
          </tr>
        </tbody>
      </table>
    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
        <div className="font-bold text-emerald-400 mb-2">$90 Strike (ITM)</div>
        <div className="text-zinc-300">Most expensive, mostly intrinsic value, low risk, acts like stock</div>
      </div>
      <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
        <div className="font-bold text-cyan-400 mb-2">$100 Strike (ATM)</div>
        <div className="text-zinc-300">100% time value, balanced risk/reward, highest Greeks</div>
      </div>
      <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20">
        <div className="font-bold text-rose-400 mb-2">$110 Strike (OTM)</div>
        <div className="text-zinc-300">Cheap lottery ticket, needs $10+ move, likely expires worthless</div>
      </div>
    </div>
  </div>
  </div>
  );
  }
  
  export function VolatilitySection() {
  return (
  <div className="space-y-8">
  <div>
    <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
      <Zap className="text-amber-400" size={44} />
      Understanding Volatility
    </h1>
    <p className="text-xl text-zinc-400">
      The most misunderstood yet critical concept in options
    </p>
  </div>
  
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">What is Volatility?</h2>
    <p className="text-zinc-300 leading-relaxed text-lg">
      Volatility measures the magnitude of price fluctuations. A stock that swings between $95-$105 daily is more volatile than one that trades between $99-$101. Options traders care about volatility because <strong className="text-white">larger potential moves = more valuable options</strong>.
    </p>
  
    <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
      <h3 className="text-xl font-bold text-amber-400 mb-4">Why Volatility Matters</h3>
      <div className="space-y-3 text-zinc-300">
        <div className="flex items-start gap-3">
          <Zap className="text-amber-400 mt-0.5 flex-shrink-0" size={16} />
          <span>Options are bets on <strong className="text-white">uncertainty</strong>. More uncertainty = higher option prices</span>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="text-amber-400 mt-0.5 flex-shrink-0" size={16} />
          <span>A $5 move is more likely in a volatile stock, making options more valuable</span>
        </div>
        <div className="flex items-start gap-3">
          <Zap className="text-amber-400 mt-0.5 flex-shrink-0" size={16} />
          <span>Volatility can change faster than the stock price itself</span>
        </div>
      </div>
    </div>
  </div>
  
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Historical vs. Implied Volatility</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 space-y-4">
        <h3 className="text-2xl font-bold text-cyan-400">Historical Volatility (HV)</h3>
        <p className="text-zinc-300 leading-relaxed">
          Realized volatility - what the stock ACTUALLY DID in the past. Calculated from historical price data.
        </p>
        <div className="p-4 rounded-lg bg-black/40 space-y-2">
          <div className="font-mono text-cyan-400 text-sm">HV = σ of returns × √252</div>
          <div className="text-xs text-zinc-500">Annualized standard deviation of daily returns</div>
        </div>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Objective, backward-looking measure</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Based on actual price movements</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Useful for context, not pricing</span>
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20 space-y-4">
        <h3 className="text-2xl font-bold text-violet-400">Implied Volatility (IV)</h3>
        <p className="text-zinc-300 leading-relaxed">
          Forward-looking volatility - what the MARKET EXPECTS. Derived from actual option prices using Black-Scholes.
        </p>
        <div className="p-4 rounded-lg bg-black/40 space-y-2">
          <div className="font-mono text-violet-400 text-sm">Market Price = f(S, K, T, r, IV)</div>
          <div className="text-xs text-zinc-500">Solve for IV given observed option prices</div>
        </div>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="flex items-start gap-2">
            <Zap className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Subjective, forward-looking measure</span>
          </div>
          <div className="flex items-start gap-2">
            <Zap className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Reflects market's fear/expectations</span>
          </div>
          <div className="flex items-start gap-2">
            <Zap className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
            <span>THIS is what you trade when buying options</span>
          </div>
        </div>
      </div>
    </div>
  
    <InfoBox type="warning">
      <strong>Critical Distinction:</strong> When you buy an option, you're implicitly buying IV. If IV is 50% but the stock only realizes 30% volatility, you overpaid - even if the stock moves in your favor! This is why comparing IV to HV is crucial.
    </InfoBox>
  </div>
  
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">The Volatility Smile</h2>
    <p className="text-zinc-300 leading-relaxed">
      In reality, implied volatility is NOT constant across strikes. The "volatility smile" or "skew" shows how IV varies:
    </p>
  
    <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/80 to-black/60 border border-zinc-800/50 space-y-4">
      <h3 className="text-xl font-bold text-white">Equity Skew (Put Skew):</h3>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20">
          <strong className="text-rose-400">OTM Puts:</strong> Higher IV (35-40%) - market fears crashes
        </div>
        <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
          <strong className="text-cyan-400">ATM Options:</strong> Mid IV (~30%)
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <strong className="text-emerald-400">OTM Calls:</strong> Lower IV (25-28%) - rallies are gradual
        </div>
      </div>
      <div className="p-4 rounded-lg bg-amber-500/5 border-l-4 border-amber-400">
        <div className="text-sm font-semibold text-amber-400 mb-2">Why?</div>
        <div className="text-sm text-zinc-300">
          Markets crash faster than they rally. Investors pay up for downside protection (puts), creating higher IV for OTM puts. This is called "volatility skew" or "smirk."
        </div>
      </div>
    </div>
  </div>
  
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">VIX - The "Fear Gauge"</h2>
    <p className="text-zinc-300 leading-relaxed text-lg">
      The VIX index measures the market's expectation of 30-day volatility for the S&P 500. It's calculated from SPX option prices and is often called the "fear gauge."
    </p>
  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <div className="text-3xl font-bold text-emerald-400 mb-2">10-15</div>
        <div className="text-sm font-semibold text-white mb-2">Low VIX / Calm Markets</div>
        <div className="text-xs text-zinc-400">Complacency, smooth uptrends, sell premium strategies work</div>
      </div>
      <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <div className="text-3xl font-bold text-amber-400 mb-2">20-30</div>
        <div className="text-sm font-semibold text-white mb-2">Moderate VIX / Normal</div>
        <div className="text-xs text-zinc-400">Typical volatility, balanced strategies appropriate</div>
      </div>
      <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20">
        <div className="text-3xl font-bold text-rose-400 mb-2">30-80+</div>
        <div className="text-sm font-semibold text-white mb-2">High VIX / Fear/Panic</div>
        <div className="text-xs text-zinc-400">Market stress, option premiums expensive, beware vol crush</div>
      </div>
    </div>
  
    <InfoBox type="tip">
      <strong>VIX Trading Insight:</strong> VIX tends to mean-revert. When VIX spikes to 40+ during panics, it typically falls back to 15-20. Conversely, VIX rarely stays below 10 for long. Use this for timing - sell premium when VIX is high, buy when it's low.
    </InfoBox>
  </div>
  </div>
  );
  }
  
  
  
  export function CalculatorGuideSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <Calculator className="text-emerald-400" size={44} />
              Using the Calculator
            </h1>
            <p className="text-xl text-zinc-400">
              Complete guide to the Options Calculator interface
            </p>
          </div>
    
          {/* Interface Overview */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Interface Overview</h2>
            <p className="text-zinc-300 leading-relaxed">
              The Calculator tab is your primary workspace for analyzing individual options. It's divided into three main sections:
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Parameters Panel (Left)',
                  items: ['Call/Put toggle', 'Input controls', 'Sliders for each parameter', 'Quick preset buttons', 'Moneyness indicator'],
                  color: 'cyan'
                },
                {
                  title: 'Greeks Display (Right)',
                  items: ['Option price (large)', 'All 5 Greeks', 'Real-time updates', 'Color-coded metrics', 'Key insights'],
                  color: 'violet'
                },
                {
                  title: 'Payoff Chart (Bottom)',
                  items: ['P&L visualization', 'Current vs. expiry', 'Breakeven point', 'Max profit/loss', 'Interactive tooltip'],
                  color: 'emerald'
                },
              ].map((section) => (
                <div key={section.title} className={`p-6 rounded-xl bg-${section.color}-500/10 border border-${section.color}-500/20 space-y-3`}>
                  <h3 className="font-bold text-white">{section.title}</h3>
                  <ul className="space-y-1 text-sm text-zinc-400">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className={`text-${section.color}-400 mt-0.5 flex-shrink-0`} size={14} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
    
          {/* Step-by-Step Guide */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Step-by-Step Tutorial</h2>
            
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Choose Your Option Type',
                  content: 'Click the Call or Put button at the top of the parameters panel.',
                  tips: [
                    'Call = Bullish (expect stock to rise)',
                    'Put = Bearish (expect stock to fall)',
                    'The button highlights in green (call) or red (put)',
                    'All calculations update instantly when you switch'
                  ],
                  color: 'cyan'
                },
                {
                  step: 2,
                  title: 'Set the Spot Price (S)',
                  content: 'Enter the current stock price or use the slider. This is what the stock trades at RIGHT NOW.',
                  tips: [
                    'Default: $100 (easy for learning)',
                    'Range: $50 - $150 on slider',
                    'Can type any value in the input box',
                    'Watch how Greeks change as you adjust'
                  ],
                  color: 'violet'
                },
                {
                  step: 3,
                  title: 'Choose Strike Price (K)',
                  content: 'Set the price at which you can exercise the option.',
                  tips: [
                    'K = S creates an ATM option (start here!)',
                    'K < S makes calls ITM, puts OTM',
                    'K > S makes calls OTM, puts ITM',
                    'The moneyness indicator updates automatically'
                  ],
                  color: 'emerald'
                },
                {
                  step: 4,
                  title: 'Set Time to Expiration (T)',
                  content: 'Choose how much time remains until the option expires.',
                  tips: [
                    'Measured in years: 0.25 = 3 months',
                    'Days shown below: "91 days"',
                    'More time = higher option value (usually)',
                    'Try 0.25 (3mo), 0.50 (6mo), 1.0 (1yr)'
                  ],
                  color: 'amber'
                },
                {
                  step: 5,
                  title: 'Adjust Volatility (σ)',
                  content: 'Set expected annualized volatility as a percentage.',
                  tips: [
                    '20-30% is typical for stable stocks',
                    '40-60% for volatile tech stocks',
                    '100%+ for meme stocks or pre-earnings',
                    'Higher vol = higher option prices'
                  ],
                  color: 'fuchsia'
                },
                {
                  step: 6,
                  title: 'Set Risk-Free Rate (r)',
                  content: 'Usually left at 5% unless analyzing historical periods.',
                  tips: [
                    'Based on US Treasury yields',
                    'Has minimal impact on short-term options',
                    'More important for LEAPS (1-2 years)',
                    'Can ignore for most analyses'
                  ],
                  color: 'rose'
                },
              ].map((item) => (
                <div key={item.step} className="relative pl-16">
                  <div className={`absolute left-0 top-0 w-12 h-12 rounded-xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">{item.step}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-zinc-300 leading-relaxed">{item.content}</p>
                    <div className={`p-4 rounded-xl bg-${item.color}-500/5 border border-${item.color}-500/20 space-y-2`}>
                      {item.tips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-zinc-400">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-400 mt-1.5 flex-shrink-0`} />
                          <span>{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Using Sliders */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Slider Best Practices</h2>
            <p className="text-zinc-300">
              The sliders are your best tool for exploring how parameters affect pricing:
            </p>
    
            <div className="space-y-4">
              {[
                {
                  param: 'Spot Price Slider',
                  technique: 'Drag left to right to see how Delta works',
                  observation: 'Watch Delta increase for calls (decrease for puts) as spot rises',
                  color: 'cyan'
                },
                {
                  param: 'Strike Price Slider',
                  technique: 'Move strike while keeping spot constant',
                  observation: 'See how moneyness affects all Greeks and option price',
                  color: 'violet'
                },
                {
                  param: 'Volatility Slider',
                  technique: 'Sweep from 5% to 100%',
                  observation: 'Vega in action - price increases dramatically with vol',
                  color: 'emerald'
                },
                {
                  param: 'Time Slider',
                  technique: 'Drag from 1 year to 0.01 (expiration)',
                  observation: 'See Theta accelerate - time value evaporates',
                  color: 'amber'
                },
              ].map((item) => (
                <div key={item.param} className={`p-5 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className={`text-sm font-semibold text-${item.color}-400 mb-1`}>{item.param}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">Technique:</div>
                      <div className="text-sm text-zinc-300">{item.technique}</div>
                    </div>
                    <div>
                      <div className="text-xs text-zinc-500 mb-1">What to Observe:</div>
                      <div className="text-sm text-zinc-300">{item.observation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Quick Presets */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Quick Preset Buttons</h2>
            <p className="text-zinc-300">
              Three buttons provide common scenarios:
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 space-y-3">
                <div className="px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-400 font-bold text-center">ATM</div>
                <div className="text-sm text-zinc-300 space-y-2">
                  <div><strong className="text-white">S = K = $100</strong></div>
                  <div>Time: 3 months</div>
                  <div>Vol: 20%</div>
                  <div className="pt-2 text-xs text-zinc-500">Perfect for learning Greeks - maximum time value, Delta ≈ 0.50</div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-3">
                <div className="px-4 py-2 rounded-lg bg-rose-500/20 text-rose-400 font-bold text-center">OTM</div>
                <div className="text-sm text-zinc-300 space-y-2">
                  <div><strong className="text-white">S = $100, K = $110</strong></div>
                  <div>Time: 3 months</div>
                  <div>Vol: 20%</div>
                  <div className="pt-2 text-xs text-zinc-500">Lower premium, needs big move - lottery ticket scenario</div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-3">
                <div className="px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-center">ITM</div>
                <div className="text-sm text-zinc-300 space-y-2">
                  <div><strong className="text-white">S = $100, K = $90</strong></div>
                  <div>Time: 3 months</div>
                  <div>Vol: 20%</div>
                  <div className="pt-2 text-xs text-zinc-500">Higher premium, mostly intrinsic value, Delta ≈ 0.80</div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Reading the Greeks Display */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Understanding the Greeks Display</h2>
            
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
                <h3 className="text-xl font-bold text-white mb-4">Option Price (Top)</h3>
                <div className="text-sm text-zinc-300 space-y-2">
                  <div>• Displayed prominently with gradient text</div>
                  <div>• This is the <strong className="text-white">per-share premium</strong></div>
                  <div>• Multiply by 100 for contract cost (e.g., $6.59 → $659 per contract)</div>
                  <div>• Updates in real-time as you adjust parameters</div>
                </div>
              </div>
    
              <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Each Greek Card Shows:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
                      <span><strong className="text-white">Icon:</strong> Visual identifier</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
                      <span><strong className="text-white">Value:</strong> Current Greek value</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-cyan-400 mt-0.5 flex-shrink-0" size={14} />
                      <span><strong className="text-white">Name:</strong> Greek letter</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
                      <span><strong className="text-white">Description:</strong> What it measures</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
                      <span><strong className="text-white">Color coding:</strong> Each Greek has unique color</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
                      <span><strong className="text-white">Hover effect:</strong> Card glows on mouseover</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Interpreting the Payoff Chart */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Reading the Payoff Chart</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
                <h3 className="text-xl font-bold text-white mb-4">Chart Elements:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {[
                    { label: 'Cyan Line', meaning: 'Current P&L if you close position NOW', detail: 'Accounts for time value remaining' },
                    { label: 'Green Line', meaning: 'P&L at expiration', detail: 'Only intrinsic value - all time value gone' },
                    { label: 'Gray Line (Y=0)', meaning: 'Break-even', detail: 'Above = profit, below = loss' },
                    { label: 'Cyan Dashed', meaning: 'Current stock price', detail: 'Where the stock trades now' },
                    { label: 'Purple Dashed', meaning: 'Strike price', detail: 'Your exercise price' },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-lg bg-black/40 space-y-1">
                      <div className="font-semibold text-white">{item.label}</div>
                      <div className="text-zinc-300">{item.meaning}</div>
                      <div className="text-xs text-zinc-500">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">How to Use the Chart:</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400 text-xs">1</div>
                    <span>Hover over any point to see P&L at that stock price</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400 text-xs">2</div>
                    <span>Notice the gap between cyan (now) and green (expiry) lines - that's time value</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400 text-xs">3</div>
                    <span>Find breakeven where green line crosses Y=0</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400 text-xs">4</div>
                    <span>See max profit (call = unlimited, put = strike - premium)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400 text-xs">5</div>
                    <span>Max loss is always the premium paid (bottom of chart)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Common Mistakes */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Common Beginner Mistakes</h2>
            
            <div className="space-y-4">
              {[
                {
                  mistake: 'Forgetting to multiply by 100',
                  fix: 'Option premium of $5 = $500 per contract (100 shares)',
                  icon: AlertCircle
                },
                {
                  mistake: 'Ignoring time decay',
                  fix: 'Check Theta - you lose this amount DAILY, not at expiration',
                  icon: Clock
                },
                {
                  mistake: 'Buying high volatility',
                  fix: 'Before earnings, IV spikes. After earnings, vol crush kills value',
                  icon: Zap
                },
                {
                  mistake: 'Not checking moneyness',
                  fix: 'OTM options need large moves. Don\'t buy $110 calls on a $90 stock with 1 week left',
                  icon: Target
                },
                {
                  mistake: 'Confusing current vs expiry P&L',
                  fix: 'Cyan line = if you close now. Green line = if you hold to expiration',
                  icon: LineChart
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.mistake} className="p-5 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/5 border border-rose-500/20">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-rose-500/20">
                        <Icon className="text-rose-400" size={20} />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="font-semibold text-white">{item.mistake}</div>
                        <div className="text-sm text-zinc-300">
                          <span className="text-emerald-400 font-semibold">✓ Fix: </span>
                          {item.fix}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
  }
    
    export function SurfaceGuideSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <Box className="text-violet-400" size={44} />
              3D Surface Guide
            </h1>
            <p className="text-xl text-zinc-400">
              Master the volatility surface visualization
            </p>
          </div>
    
          {/* What is the Surface */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">What is the 3D Surface?</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The 3D volatility surface shows how option prices change across TWO dimensions simultaneously: strike prices (X-axis) and time to expiration (Y-axis). The height (Z-axis) represents the option's theoretical price.
            </p>
    
            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20">
              <h3 className="text-xl font-bold text-violet-400 mb-4">Why This Matters:</h3>
              <div className="space-y-3 text-zinc-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span>See the entire options landscape at once instead of one contract at a time</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span>Understand how time decay affects different strikes differently</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span>Identify pricing anomalies or arbitrage opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span>Build intuition for complex multi-leg strategies</span>
                </div>
              </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-3">
                <h3 className="font-bold text-cyan-400">X-Axis: Strike Price</h3>
                <div className="text-sm text-zinc-300">
                  Range: 70% to 130% of spot price<br/>
                  Example: S=$100 → K from $70 to $130
                </div>
              </div>
              <div className="p-5 rounded-xl bg-violet-500/10 border border-violet-500/20 space-y-3">
                <h3 className="font-bold text-violet-400">Y-Axis: Time to Expiry</h3>
                <div className="text-sm text-zinc-300">
                  Range: 0 to 1 year<br/>
                  Shows how time value decays
                </div>
              </div>
              <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
                <h3 className="font-bold text-emerald-400">Z-Axis: Option Price</h3>
                <div className="text-sm text-zinc-300">
                  Height = theoretical value<br/>
                  Color gradient: low (cyan) to high (purple)
                </div>
              </div>
            </div>
          </div>
    
          {/* Navigation Controls */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Navigation Controls</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
                <h3 className="text-xl font-bold text-white mb-4">Mouse Controls:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <div className="font-bold text-cyan-400 mb-2">Left Click + Drag</div>
                    <div className="text-sm text-zinc-300">Rotate the surface in 3D space</div>
                  </div>
                  <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <div className="font-bold text-violet-400 mb-2">Scroll Wheel</div>
                    <div className="text-sm text-zinc-300">Zoom in/out (15-50 units)</div>
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <div className="font-bold text-emerald-400 mb-2">Right Click + Drag</div>
                    <div className="text-sm text-zinc-300">Pan the view left/right/up/down</div>
                  </div>
                </div>
              </div>
    
              <InfoBox type="tip">
                <strong>Best Viewing Angle:</strong> Start with the default camera position, then rotate slightly to see the "smile" shape for calls or the "frown" for puts. Zoom in to see detail, zoom out for the big picture.
              </InfoBox>
            </div>
          </div>
    
          {/* Reading the Surface */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Interpreting the Surface Shape</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Call Option Surface</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Far Left (Deep ITM):</strong> High and flat - mostly intrinsic value, little time value
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Center (ATM):</strong> Peak of time value - maximum extrinsic premium
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Far Right (Deep OTM):</strong> Low and flat - minimal value, "lottery tickets"
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Front (Near Expiry):</strong> Rapid decay, surface drops steeply
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Back (Far Expiry):</strong> High values - lots of time premium
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20">
                <h3 className="text-xl font-bold text-rose-400 mb-4">Put Option Surface</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Shape:</strong> Mirror image of call surface (flipped left/right)
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Far Left (Deep OTM puts):</strong> Low values
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Far Right (Deep ITM puts):</strong> High values, mostly intrinsic
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Using Quick Controls */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Quick Control Sliders</h2>
            <p className="text-zinc-300">
              Below the 3D viewer, you'll find two sliders to explore how parameters affect the entire surface:
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20 space-y-4">
                <h3 className="text-xl font-bold text-cyan-400">Volatility Slider (σ)</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Low Vol (10-20%):</strong> Flatter surface - options cheaper across all strikes
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">High Vol (50-100%):</strong> Surface inflates upward - all options more expensive
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Experiment:</strong> Sweep from 5% to 100% and watch the surface grow
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-violet-500/10 border border-violet-500/20 space-y-4">
                <h3 className="text-xl font-bold text-violet-400">Spot Price Slider (S)</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Move Left (S decreases):</strong> Call surface shifts down, put surface shifts up
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Move Right (S increases):</strong> Call surface shifts up, put surface shifts down
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Experiment:</strong> Watch how the "peak" (ATM) moves with spot price
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Practical Insights */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">What to Look For</h2>
            
            <div className="space-y-4">
              {[
                {
                  insight: 'Time Decay Cliff',
                  description: 'Notice how the surface drops sharply near expiration (front edge). This visualizes Theta acceleration.',
                  action: 'Avoid buying options in this region unless you have strong short-term conviction',
                  color: 'amber'
                },
                {
                  insight: 'ATM Ridge',
                  description: 'The highest "ridge" runs through ATM options. This is where time value is maximized.',
                  action: 'Best place for volatility trades (straddles/strangles)',
                  color: 'cyan'
                },
                {
                  insight: 'OTM Flatlands',
                  description: 'Far OTM options (edges of surface) are nearly worthless - the "lottery ticket" zone.',
                  action: 'Only buy here if expecting massive moves (earnings, buyouts)',
                  color: 'rose'
                },
                {
                  insight: 'Volatility Inflation',
                  description: 'Increasing vol lifts the ENTIRE surface uniformly. All options gain value.',
                  action: 'Buy options before vol spikes, sell before vol crashes',
                  color: 'emerald'
                },
              ].map((item) => (
                <div key={item.insight} className={`p-5 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 space-y-3`}>
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <Lightbulb className={`text-${item.color}-400`} size={20} />
                    {item.insight}
                  </h3>
                  <p className="text-sm text-zinc-300">{item.description}</p>
                  <div className={`p-3 rounded-lg bg-black/40 border-l-2 border-${item.color}-400`}>
                    <span className={`text-${item.color}-400 font-semibold text-xs`}>Action: </span>
                    <span className="text-zinc-300 text-xs">{item.action}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Advanced Usage */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Advanced Surface Analysis</h2>
            
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
                <h3 className="text-xl font-bold text-white mb-4">Comparing Strategies:</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                    <span><strong className="text-white">Calendar Spread:</strong> Compare same strike at different times (move along Y-axis)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                    <span><strong className="text-white">Vertical Spread:</strong> Compare different strikes at same time (move along X-axis)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                    <span><strong className="text-white">Butterfly:</strong> Visualize symmetric strikes around ATM peak</span>
                  </div>
                </div>
              </div>
    
              <InfoBox type="success">
                <strong>Pro Insight:</strong> In real markets, you'd overlay IMPLIED volatility surface instead of theoretical prices. This shows the "volatility smile" where OTM puts have higher IV than ATM options - a deviation from Black-Scholes assumptions.
              </InfoBox>
            </div>
          </div>
        </div>
      );
    }
    
    export function StrategyGuideSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <Layers className="text-fuchsia-400" size={44} />
              Strategy Builder Guide
            </h1>
            <p className="text-xl text-zinc-400">
              Build and analyze complex multi-leg strategies
            </p>
          </div>
    
          {/* What is Strategy Builder */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">What is the Strategy Builder?</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              The Strategy Builder lets you combine multiple options (calls and puts at different strikes) into sophisticated strategies. You can use pre-built templates or create custom combinations to match your market outlook.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-pink-500/5 border border-fuchsia-500/20 space-y-4">
                <h3 className="text-xl font-bold text-fuchsia-400">Pre-Built Templates</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-fuchsia-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>8 popular strategies ready to use</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-fuchsia-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>One-click loading with optimal parameters</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-fuchsia-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Fully customizable after loading</span>
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20 space-y-4">
                <h3 className="text-xl font-bold text-violet-400">Custom Strategies</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Build from scratch with "Add Leg"</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Mix calls, puts, any strikes/expirations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-violet-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Unlimited creativity for your ideas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          // Continue StrategyGuideSection from where we left off
  
  {/* Using Templates */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Using Strategy Templates</h2>
    
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { name: 'Bull Call Spread', outlook: 'Moderately Bullish', risk: 'Limited', reward: 'Limited', color: 'emerald' },
          { name: 'Bear Put Spread', outlook: 'Moderately Bearish', risk: 'Limited', reward: 'Limited', color: 'rose' },
          { name: 'Long Straddle', outlook: 'High Volatility', risk: 'Limited (2x premium)', reward: 'Unlimited', color: 'violet' },
          { name: 'Long Strangle', outlook: 'Very High Vol', risk: 'Limited', reward: 'Unlimited', color: 'cyan' },
          { name: 'Iron Condor', outlook: 'Low Vol / Range', risk: 'Limited', reward: 'Limited', color: 'amber' },
          { name: 'Butterfly', outlook: 'Minimal Movement', risk: 'Limited', reward: 'Limited', color: 'fuchsia' },
          { name: 'Long Call', outlook: 'Bullish', risk: 'Premium', reward: 'Unlimited', color: 'emerald' },
          { name: 'Long Put', outlook: 'Bearish', risk: 'Premium', reward: 'Strike Price', color: 'rose' },
        ].map((strategy) => (
          <div key={strategy.name} className={`p-4 rounded-xl bg-${strategy.color}-500/10 border border-${strategy.color}-500/20 space-y-2`}>
            <div className="font-bold text-white text-sm">{strategy.name}</div>
            <div className="space-y-1 text-xs text-zinc-400">
              <div>Outlook: <span className={`text-${strategy.color}-400`}>{strategy.outlook}</span></div>
              <div>Risk: <span className="text-zinc-300">{strategy.risk}</span></div>
              <div>Reward: <span className="text-zinc-300">{strategy.reward}</span></div>
            </div>
          </div>
        ))}
      </div>
  
      <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
        <h3 className="text-xl font-bold text-white mb-4">How to Load a Template:</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 font-bold text-fuchsia-400 text-xs">1</div>
            <span>Click "Show Templates" button to reveal template cards</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 font-bold text-fuchsia-400 text-xs">2</div>
            <span>Read each strategy's description and outlook</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 font-bold text-fuchsia-400 text-xs">3</div>
            <span>Click on any template card to load it instantly</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 font-bold text-fuchsia-400 text-xs">4</div>
            <span>All legs populate automatically with default parameters from your base settings</span>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0 font-bold text-fuchsia-400 text-xs">5</div>
            <span>Customize strikes, quantities, and expirations as needed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Managing Legs */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Managing Individual Legs</h2>
    
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Adding a Leg:</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div className="p-3 rounded-lg bg-black/40">
            Click "Add Leg" button → New leg appears with base parameters from Calculator tab
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            Default quantity: +1 (long position)
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            Premium auto-calculates using Black-Scholes
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20">
        <h3 className="text-xl font-bold text-violet-400 mb-4">Editing a Leg:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          {[
            { field: 'Call/Put Toggle', desc: 'Switch between call and put for this leg' },
            { field: 'Strike Price', desc: 'Adjust strike - premium recalculates instantly' },
            { field: 'Time to Expiry', desc: 'Change expiration (in years)' },
            { field: 'Quantity', desc: 'Positive = long, Negative = short (sell)' },
          ].map((item) => (
            <div key={item.field} className="p-3 rounded-lg bg-black/40">
              <div className="font-semibold text-white mb-1">{item.field}</div>
              <div className="text-zinc-400 text-xs">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-gradient-to-r from-rose-500/10 to-pink-500/5 border border-rose-500/20">
        <h3 className="text-xl font-bold text-rose-400 mb-4">Removing a Leg:</h3>
        <div className="text-sm text-zinc-300">
          Click the trash icon (🗑️) on the right side of each leg card to remove it
        </div>
      </div>
    </div>
  </div>
  
  {/* Analyzing Combined Strategy */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Understanding Combined Results</h2>
    
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
        <h3 className="text-xl font-bold text-white mb-4">Risk Metrics Panel:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
          <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20">
            <div className="font-bold text-rose-400 mb-2">Net Cost</div>
            <div className="text-zinc-400">Total premium paid (positive) or collected (negative)</div>
            <div className="text-xs text-zinc-500 mt-2">Example: Buy $5 call, Sell $2 call = $3 net debit</div>
          </div>
          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="font-bold text-emerald-400 mb-2">Max Profit</div>
            <div className="text-zinc-400">Best case scenario (may be unlimited)</div>
            <div className="text-xs text-zinc-500 mt-2">Example: Bull spread = (High K - Low K - Net Cost) × 100</div>
          </div>
          <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20">
            <div className="font-bold text-rose-400 mb-2">Max Loss</div>
            <div className="text-zinc-400">Worst case scenario (may be unlimited)</div>
            <div className="text-xs text-zinc-500 mt-2">Example: Bull spread = Net cost × 100</div>
          </div>
          <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
            <div className="font-bold text-violet-400 mb-2">Breakeven Points</div>
            <div className="text-zinc-400">Stock prices where P&L = $0</div>
            <div className="text-xs text-zinc-500 mt-2">Can have 0, 1, 2, or more breakevens</div>
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Combined Payoff Chart:</h3>
        <div className="space-y-3 text-sm text-zinc-300">
          <div className="p-3 rounded-lg bg-black/40">
            <strong className="text-white">Purple Line:</strong> Current combined P&L (with time value)
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            <strong className="text-white">Green Area:</strong> P&L at expiration (fill shows profit zones)
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            <strong className="text-white">Shape Analysis:</strong> Flat top = capped profit, sloped = directional exposure
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Pro Tips */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Strategy Builder Pro Tips</h2>
    
    <div className="space-y-4">
      {[
        {
          tip: 'Start with Templates',
          detail: 'Don\'t build from scratch initially. Load a template, analyze it, THEN modify to your needs.',
          icon: Lightbulb,
          color: 'amber'
        },
        {
          tip: 'Check Max Loss First',
          detail: 'Always know your worst-case scenario. Never risk more than you can afford to lose.',
          icon: AlertCircle,
          color: 'rose'
        },
        {
          tip: 'Use Symmetry',
          detail: 'Many strategies work best with symmetric strikes (e.g., $95/$100/$105). Templates default to this.',
          icon: Target,
          color: 'violet'
        },
        {
          tip: 'Match Expirations',
          detail: 'Unless building calendar spreads, keep all legs at same expiration for simplicity.',
          icon: Clock,
          color: 'cyan'
        },
        {
          tip: 'Negative Quantity = Short',
          detail: 'To sell an option, use negative quantity (e.g., -1). Premium becomes a credit.',
          icon: ArrowDown,
          color: 'emerald'
        },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.tip} className={`p-5 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-lg bg-${item.color}-500/20`}>
                <Icon className={`text-${item.color}-400`} size={20} />
              </div>
              <div className="flex-1 space-y-2">
                <div className="font-bold text-white">{item.tip}</div>
                <div className="text-sm text-zinc-300">{item.detail}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  </div>
  );
  }
  
  // TUTORIAL SECTIONS - Hands-on practice
  
  export function TutorialBasicSection() {
  return (
  <div className="space-y-8">
  <div>
    <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
      <Play className="text-emerald-400" size={44} />
      Tutorial: Your First Option
    </h1>
    <p className="text-xl text-zinc-400">
      Hands-on walkthrough - buy a call option and understand every step
    </p>
  </div>
  
  {/* Scenario Setup */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Scenario: Bullish on XYZ Stock</h2>
    <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-4">
      <h3 className="text-xl font-bold text-emerald-400">Market Situation:</h3>
      <div className="space-y-2 text-zinc-300">
        <div className="p-3 rounded-lg bg-black/40">
          • XYZ stock currently trades at <strong className="text-white">$100</strong>
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          • You expect it to rise to $110+ within 3 months due to new product launch
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          • You have $1,000 to invest but want leverage
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          • Implied volatility is moderate at 30%
        </div>
      </div>
    </div>
  
    <InfoBox type="info">
      <strong>Goal:</strong> Buy a call option to profit from the expected rise while limiting risk to the premium paid.
    </InfoBox>
  </div>
  
  {/* Step-by-Step */}
  <div className="neo-card p-8 space-y-8">
    <h2 className="text-3xl font-bold text-white">Step-by-Step Tutorial</h2>
  
    {/* Step 1 */}
    <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center font-bold text-cyan-400 text-xl">1</div>
        <h3 className="text-2xl font-bold text-white">Navigate to Calculator Tab</h3>
      </div>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-4 rounded-lg bg-black/40">
          Open OptionsSurface and click the "Calculator & Greeks" tab at the top
        </div>
        <div className="p-4 rounded-lg bg-black/40">
          You'll see two panels: Parameters (left) and Greeks (right)
        </div>
      </div>
    </div>
  
    {/* Step 2 */}
    <div className="p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center font-bold text-violet-400 text-xl">2</div>
        <h3 className="text-2xl font-bold text-white">Select "Call" Option</h3>
      </div>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-4 rounded-lg bg-black/40">
          Click the green "Call" button at the top of the parameters panel
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/10 border-l-4 border-emerald-400">
          <strong className="text-emerald-400">Why Call?</strong> You're bullish - expecting the stock to rise. Calls profit when stock price increases.
        </div>
      </div>
    </div>
  
    {/* Step 3 */}
    <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center font-bold text-emerald-400 text-xl">3</div>
        <h3 className="text-2xl font-bold text-white">Set Spot Price = $100</h3>
      </div>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-4 rounded-lg bg-black/40">
          In the "Spot Price (S)" input, type <span className="font-mono text-cyan-400">100</span> or use the slider
        </div>
        <div className="p-4 rounded-lg bg-emerald-500/10 border-l-4 border-emerald-400">
          <strong className="text-emerald-400">What This Means:</strong> The stock is currently trading at $100 per share
        </div>
      </div>
    </div>
  
    {/* Step 4 */}
    <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/5 border border-amber-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center font-bold text-amber-400 text-xl">4</div>
        <h3 className="text-2xl font-bold text-white">Choose Strike Price = $105</h3>
      </div>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-4 rounded-lg bg-black/40">
          Set "Strike Price (K)" to <span className="font-mono text-violet-400">105</span>
        </div>
        <div className="p-4 rounded-lg bg-amber-500/10 border-l-4 border-amber-400 space-y-2">
          <div><strong className="text-amber-400">Strategy:</strong> We're buying a slightly OTM call</div>
          <div className="text-xs">• Cheaper than ATM ($100 strike)</div>
          <div className="text-xs">• Still within reach if stock hits $110</div>
          <div className="text-xs">• Higher leverage potential</div>
        </div>
      </div>
    </div>
  
    {/* Step 5 */}
    <div className="p-6 rounded-xl bg-gradient-to-r from-fuchsia-500/10 to-pink-500/5 border border-fuchsia-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-fuchsia-500/20 flex items-center justify-center font-bold text-fuchsia-400 text-xl">5</div>
        <h3 className="text-2xl font-bold text-white">Set Time to Expiration = 0.25 (3 months)</h3>
      </div>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-4 rounded-lg bg-black/40">
          Set "Time to Expiry (T)" to <span className="font-mono text-amber-400">0.25</span> years
        </div>
        <div className="p-4 rounded-lg bg-black/40">
          You'll see "91 days" displayed - this gives XYZ time to launch the product
        </div>
        <div className="p-4 rounded-lg bg-fuchsia-500/10 border-l-4 border-fuchsia-400">
          <strong className="text-fuchsia-400">Time Balance:</strong> 3 months is enough time for your thesis to play out, but not so long that you overpay for time value
        </div>
      </div>
    </div>
  
    {/* Step 6 */}
    <div className="p-6 rounded-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center font-bold text-violet-400 text-xl">6</div>
        <h3 className="text-2xl font-bold text-white">Set Volatility = 30%</h3>
      </div>
      <div className="space-y-3 text-sm text-zinc-300">
        <div className="p-4 rounded-lg bg-black/40">
          Set "Volatility (σ)" to <span className="font-mono text-fuchsia-400">30</span>%
        </div>
        <div className="p-4 rounded-lg bg-violet-500/10 border-l-4 border-violet-400">
          <strong className="text-violet-400">Market Context:</strong> 30% is moderate volatility - not super calm, not panic mode. Typical for established companies.
        </div>
      </div>
    </div>
  </div>
  
  {/* Analysis */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Analyzing Your Option</h2>
    
    <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
      <h3 className="text-2xl font-bold text-white mb-4">What You'll See:</h3>
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-black/40">
          <div className="font-bold text-cyan-400 mb-2">Option Price: ~$2.50-$3.00</div>
          <div className="text-sm text-zinc-300">This means each contract costs $250-$300 (× 100 shares)</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
            <div className="font-bold text-cyan-400 mb-2">Delta: ~0.35-0.40</div>
            <div className="text-zinc-300">For every $1 XYZ rises, your option gains ~$0.35-0.40</div>
          </div>
          <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
            <div className="font-bold text-violet-400 mb-2">Gamma: ~0.04</div>
            <div className="text-zinc-300">Delta will increase as stock approaches $105</div>
          </div>
          <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <div className="font-bold text-amber-400 mb-2">Theta: ~-$0.03</div>
            <div className="text-zinc-300">You lose ~$3/day from time decay</div>
          </div>
          <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
            <div className="font-bold text-emerald-400 mb-2">Vega: ~0.15</div>
            <div className="text-zinc-300">+$15 value if volatility increases 1%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Scenarios */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Potential Outcomes</h2>
    
    <div className="space-y-4">
      <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">🎉 Bull Case: Stock → $115</h3>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="p-3 rounded-lg bg-black/40">
            Intrinsic value at expiry: $115 - $105 = <strong className="text-white">$10/share</strong>
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            You paid: $2.50 premium
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            Profit: ($10 - $2.50) × 100 = <strong className="text-emerald-400">$750 per contract</strong>
          </div>
          <div className="p-3 rounded-lg bg-emerald-500/20 border-l-4 border-emerald-400">
            <strong className="text-emerald-400">300% return!</strong> $250 investment → $1,000 value
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
        <h3 className="text-xl font-bold text-amber-400 mb-4">😐 Sideways: Stock → $107</h3>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="p-3 rounded-lg bg-black/40">
            Intrinsic value: $107 - $105 = <strong className="text-white">$2/share</strong>
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            You paid: $2.50 premium
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            Loss: ($2 - $2.50) × 100 = <strong className="text-amber-400">-$50 per contract</strong>
          </div>
          <div className="p-3 rounded-lg bg-amber-500/20 border-l-4 border-amber-400">
            <strong className="text-amber-400">Small loss despite being right</strong> - didn't rise enough to cover premium
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20">
        <h3 className="text-xl font-bold text-rose-400 mb-4">📉 Bear Case: Stock → $95</h3>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="p-3 rounded-lg bg-black/40">
            Option expires worthless (OTM)
          </div>
          <div className="p-3 rounded-lg bg-black/40">
            Loss: Premium paid = <strong className="text-rose-400">-$250 per contract</strong>
          </div>
          <div className="p-3 rounded-lg bg-rose-500/20 border-l-4 border-rose-400">
            <strong className="text-rose-400">Max loss = premium paid</strong> - your risk was limited from the start
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Key Takeaways */}
  <div className="neo-card p-8 space-y-6 border-2 border-cyan-500/30">
    <h2 className="text-3xl font-bold text-white">🎓 Key Lessons</h2>
    
    <div className="space-y-3">
      {[
        'Options provide leverage - small premium controls large position',
        'OTM options are cheaper but need bigger moves to profit',
        'Time decay works against you - stock needs to move before expiration',
        'You can be RIGHT about direction but still lose if move is too small',
        'Maximum loss is always limited to premium paid',
        'Greeks help predict how option value changes',
      ].map((lesson, i) => (
        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20">
          <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400 text-xs">
            {i + 1}
          </div>
          <span className="text-zinc-300">{lesson}</span>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
  }
  
  export function TutorialSpreadsSection() {
  return (
  <div className="space-y-8">
  <div>
    <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
      <Play className="text-violet-400" size={44} />
      Tutorial: Bull Call Spread
    </h1>
    <p className="text-xl text-zinc-400">
      Learn to build a defined-risk spread strategy
    </p>
  </div>
  
  {/* Why Spreads */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Why Use Spreads?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-3">
        <h3 className="text-xl font-bold text-emerald-400">Advantages:</h3>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Lower cost than buying single options</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Defined max loss AND max profit</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Reduced Theta decay (selling offsets buying)</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Better probability of profit</span>
          </div>
        </div>
      </div>
  
      <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-3">
        <h3 className="text-xl font-bold text-rose-400">Trade-offs:</h3>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="flex items-start gap-2">
            <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Capped profit potential (no home runs)</span>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={14} />
            <span>More complex to manage</span>
          </div>
          <div className="flex items-start gap-2">
            <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={14} />
            <span>Two legs = two commissions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Step by Step */}
  <div className="neo-card p-8 space-y-8">
    <h2 className="text-3xl font-bold text-white">Building Your Bull Call Spread</h2>
  
    <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20">
      <h3 className="text-xl font-bold text-white mb-4">Scenario:</h3>
      <div className="space-y-2 text-zinc-300">
        <div>• Stock at $100, you expect it to reach $110</div>
        <div>• You want to profit with limited risk</div>
        <div>• You have $500 to invest</div>
      </div>
    </div>
  
    {/* Steps */}
    {[
      {
        step: 1,
        title: 'Open Strategy Builder',
        content: 'Navigate to the "Strategy Builder" tab',
        color: 'cyan'
      },
      {
        step: 2,
        title: 'Load Bull Call Spread Template',
        content: 'Click "Show Templates" → Click "Bull Call Spread"',
        detail: 'This loads 2 legs automatically: Buy lower strike call + Sell higher strike call',
        color: 'violet'
      },
      {
        step: 3,
        title: 'Review Default Legs',
        content: 'You\'ll see two leg cards appear',
        detail: 'Leg 1: Buy $95 Call (+1 quantity)\nLeg 2: Sell $105 Call (-1 quantity)',
        color: 'emerald'
      },
      {
        step: 4,
        title: 'Customize Strikes (Optional)',
        content: 'Adjust strikes to match your outlook',
        detail: 'For moderate bullishness:\n• Buy $100 Call (ATM)\n• Sell $110 Call (OTM)',
        color: 'amber'
      },
      {
        step: 5,
        title: 'Review Risk Metrics',
        content: 'Look at the metrics panel below the legs',
        detail: '• Net Cost: $300 (this is your max loss)\n• Max Profit: $700\n• Breakeven: $103',
        color: 'fuchsia'
      },
      {
        step: 6,
        title: 'Analyze Payoff Diagram',
        content: 'Scroll down to see combined P&L chart',
        detail: 'Green area fills between $100 and $110 - your profit zone',
        color: 'rose'
      },
    ].map((item) => (
      <div key={item.step} className={`p-6 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0 font-bold text-${item.color}-400 text-xl`}>
            {item.step}
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-zinc-300">{item.content}</p>
            {item.detail && (
              <div className="p-4 rounded-lg bg-black/40 text-sm text-zinc-400 whitespace-pre-line border-l-2 border-cyan-400">
                {item.detail}
              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
  
  {/* The Math */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Understanding the Math</h2>
    
    <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50 space-y-6">
      <div>
        <h3 className="text-xl font-bold text-cyan-400 mb-4">Example: $100/$110 Bull Call Spread</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
              <div className="font-bold text-emerald-400 mb-2">Leg 1: Buy $100 Call</div>
              <div className="text-sm text-zinc-300 space-y-1">
                <div>Premium: -$6.00 (you pay)</div>
                <div>Quantity: +1 (long)</div>
                <div>Cost: $600 debit</div>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20">
              <div className="font-bold text-rose-400 mb-2">Leg 2: Sell $110 Call</div>
              <div className="text-sm text-zinc-300 space-y-1">
                <div>Premium: +$2.00 (you collect)</div>
                <div>Quantity: -1 (short)</div>
                <div>Credit: $200 credit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div className="p-5 rounded-xl bg-violet-500/10 border border-violet-500/20">
        <div className="font-bold text-violet-400 mb-3">Net Position:</div>
        <div className="space-y-2 text-sm text-zinc-300">
          <div className="p-3 rounded-lg bg-black/40 font-mono">
            Net Cost = $6.00 - $2.00 = <strong className="text-white">$4.00 × 100 = $400</strong>
          </div>
          <div className="p-3 rounded-lg bg-black/40 font-mono">
            Max Profit = ($110 - $100 - $4) × 100 = <strong className="text-emerald-400">$600</strong>
          </div>
          <div className="p-3 rounded-lg bg-black/40 font-mono">
            Max Loss = Net Cost = <strong className="text-rose-400">$400</strong>
          </div>
          <div className="p-3 rounded-lg bg-black/40 font-mono">
            Breakeven = $100 + $4 = <strong className="text-cyan-400">$104</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  {/* Outcomes */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Outcome Scenarios</h2>
    
    <div className="space-y-4">
      {[
        {
          scenario: 'Stock → $115 (Big Win)',
          analysis: 'Both calls ITM. Long $100 call worth $15, short $110 call worth -$5',
          result: 'P&L = $15 - $5 - $4 cost = $6/share = $600 profit',
          note: 'Max profit capped at $600 even though stock went higher',
          color: 'emerald'
        },
        {
          scenario: 'Stock → $110 (Max Profit)',
          analysis: 'Long call worth $10, short call expires worthless',
          result: 'P&L = $10 - $0 - $4 = $6/share = $600 profit',
          note: 'Sweet spot - maximum profit achieved',
          color: 'emerald'
        },
        {
          scenario: 'Stock → $104 (Breakeven)',
          analysis: 'Long call worth $4, short call worthless',
          result: 'P&L = $4 - $0 - $4 = $0',
          note: 'No profit, no loss - exactly breakeven',
          color: 'amber'
        },
        {
          scenario: 'Stock → $95 (Max Loss)',
          analysis: 'Both calls expire worthless',
          result: 'P&L = $0 - $0 - $4 = -$4/share = -$400 loss',
          note: 'Max loss = net premium paid. Can\'t lose more.',
          color: 'rose'
        },
      ].map((outcome) => (
        <div key={outcome.scenario} className={`p-5 rounded-xl bg-${outcome.color}-500/10 border border-${outcome.color}-500/20`}>
          <div className="font-bold text-white mb-3">{outcome.scenario}</div>
          <div className="space-y-2 text-sm text-zinc-300">
            <div className="p-3 rounded-lg bg-black/40">{outcome.analysis}</div>
            <div className={`p-3 rounded-lg bg-${outcome.color}-500/20 font-mono font-bold text-${outcome.color}-400`}>
              {outcome.result}
            </div>
            <div className="text-xs text-zinc-500 italic">{outcome.note}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Key Lessons */}
  <div className="neo-card p-8 space-y-6 border-2 border-violet-500/30">
    <h2 className="text-3xl font-bold text-white">🎓 Spread Strategy Lessons</h2>
    
    <div className="space-y-3">
      {[
        'Spreads trade profit potential for reduced cost and risk',
        'Max profit = (Strike difference - Net cost) × 100',
        'Max loss = Net premium paid (always limited)',
        'Breakeven = Lower strike + Net cost',
        'Best when you expect moderate move, not huge rally',
        'Lower Theta decay than naked long options',
        'Use templates first, then customize to your view',
      ].map((lesson, i) => (
        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-violet-500/5 border border-violet-500/20">
          <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center flex-shrink-0 font-bold text-violet-400 text-xs">
            {i + 1}
          </div>
          <span className="text-zinc-300">{lesson}</span>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
  }
  
  export function TutorialVolatilitySection() {
  return (
  <div className="space-y-8">
  <div>
    <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
      <Play className="text-amber-400" size={44} />
      Tutorial: Volatility Trading
    </h1>
    <p className="text-xl text-zinc-400">
      Profit from volatility using straddles
    </p>
  </div>
  
  {/* Scenario */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Scenario: Earnings Announcement</h2>
    <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20 space-y-4">
      <h3 className="text-xl font-bold text-amber-400">Market Setup:</h3>
      <div className="space-y-2 text-zinc-300">
        <div className="p-3 rounded-lg bg-black/40">
          • TECH stock at $100, earnings report in 2 weeks
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          • Implied volatility spiked to 60% (normally 30%)
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          • You expect a BIG move but unsure of direction
        </div>
        <div className="p-3 rounded-lg bg-black/40">
          • Historical moves after earnings: ±15%
        </div>
      </div>
    </div>
  
    <InfoBox type="warning">
      <strong>Vol Trading Strategy:</strong> When you expect a large move but don't know direction, trade volatility instead of direction using straddles or strangles.
    </InfoBox>
  </div>
  
  {/* What is Straddle */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Understanding the Long Straddle</h2>
    
    <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20">
      <h3 className="text-xl font-bold text-violet-400 mb-4">Structure:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <div className="font-bold text-emerald-400 mb-3">Leg 1: Buy ATM Call</div>
          <div className="text-sm text-zinc-300 space-y-1">
            <div>Strike: $100 (same as stock)</div>
            <div>Profits if stock rises</div>
            <div>Unlimited upside</div>
          </div>
        </div>
        <div className="p-5 rounded-lg bg-rose-500/10 border border-rose-500/20">
          <div className="font-bold text-rose-400 mb-3">Leg 2: Buy ATM Put</div>
          <div className="text-sm text-zinc-300 space-y-1">
            <div>Strike: $100 (same strike!)</div>
            <div>Profits if stock falls</div>
            <div>Profit down to $0</div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
      <h3 className="font-bold text-amber-400 mb-3">The Beauty of Straddles:</h3>
      <div className="space-y-2 text-sm text-zinc-300">
        <div className="flex items-start gap-2">
          <Zap className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
          <span>Direction-neutral - profits from movement in EITHER direction</span>
        </div>
        <div className="flex items-start gap-2">
          <Zap className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
          <span>Maximum Vega exposure - benefits most from volatility</span>
        </div>
        <div className="flex items-start gap-2">
          <Zap className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
          <span>Worst case: Stock stays flat (lose both premiums)</span>
        </div>
      </div>
    </div>
  </div>
  
  {/* Building the Trade */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Building Your Straddle</h2>
    
    <div className="space-y-6">
      {[
        {
          step: 1,
          action: 'Go to Strategy Builder → Load "Long Straddle" template',
          result: '2 legs auto-populate: ATM call + ATM put',
        },
        {
          step: 2,
          action: 'Verify both strikes = $100 (ATM)',
          result: 'This maximizes Gamma and volatility sensitivity',
        },
        {
          step: 3,
          action: 'Set expiration AFTER earnings (e.g., 3 weeks = 0.058 years)',
          result: 'Need enough time for move to develop',
        },
        {
          step: 4,
          action: 'Input elevated volatility: 60%',
          result: 'Premiums will be expensive - that\'s the cost of vol trading',
        },
        {
          step: 5,
          action: 'Review total cost',
          result: 'Call premium ($8) + Put premium ($8) = $16 total × 100 = $1,600',
        },
      ].map((item) => (
        <div key={item.step} className="p-5 rounded-xl bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 font-bold text-amber-400">
              {item.step}
            </div>
            <div className="flex-1 space-y-2">
              <div className="text-white font-semibold">{item.action}</div>
              <div className="text-sm text-zinc-400 p-3 rounded-lg bg-black/40 border-l-2 border-amber-400">
                {item.result}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  {/* The Catch: Vol Crush */}
  <div className="neo-card p-8 space-y-6 border-2 border-rose-500/30">
    <h2 className="text-3xl font-bold text-white">⚠️ The Vol Crush Trap</h2>
    
    <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-4">
      <h3 className="text-xl font-bold text-rose-400">Critical Warning:</h3>
      <div className="space-y-3 text-zinc-300">
        <p className="leading-relaxed">
          Implied volatility often CRASHES immediately after earnings, even if the stock moves. This is called "volatility crush" and it can DESTROY straddle profitability.
        </p>
        <div className="p-4 rounded-lg bg-black/40 space-y-2">
          <div className="font-bold text-white">Example of Vol Crush:</div>
          <div className="text-sm space-y-1">
            <div>Before earnings: IV = 60%</div>
            <div>After earnings: IV drops to 25% (even with 10% stock move)</div>
            <div className="text-rose-400">Your straddle loses money despite being right about movement!</div>
          </div>
        </div>
      </div>
    </div>
  
    <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
      <h3 className="font-bold text-amber-400 mb-3">How to Avoid Vol Crush:</h3>
      <div className="space-y-2 text-sm text-zinc-300">
        <div className="flex items-start gap-2">
          <CheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
          <span><strong className="text-white">Sell before event:</strong> Buy straddle when IV is low (30%), sell when it spikes to 60%</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
          <span><strong className="text-white">Or sell the straddle:</strong> SELL high IV before earnings, buy back after crush</span>
        </div>
        <div className="flex items-start gap-2">
          <CheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
          <span><strong className="text-white">Only buy if:</strong> You expect move LARGER than IV implies</span>
        </div>
      </div>
    </div>
  </div>
  
  {/* Outcomes */}
  <div className="neo-card p-8 space-y-6">
    <h2 className="text-3xl font-bold text-white">Potential Outcomes</h2>
    
    <div className="space-y-4">
      {[
        {
          scenario: 'Stock → $120 (Big Up Move)',
          analysis: 'Call worth $20, Put worthless',
          beforeCrush: 'With IV still 60%: Straddle worth ~$22 → +$6 profit',
          afterCrush: 'After IV → 25%: Straddle worth ~$20.50 → +$4.50 profit',
          lesson: 'Vol crush reduces your profit by $1.50 even though you were right!',
          color: 'emerald'
        },
        {
          scenario: 'Stock → $108 (Moderate Up)',
          analysis: 'Call worth $8, Put worthless',
          beforeCrush: 'Value ~$9.50 → -$6.50 loss',
          afterCrush: 'Value ~$8 → -$8 loss (vol crush made it worse)',
          lesson: 'Not enough move to overcome the $16 cost + vol crush',
          color: 'rose'
        },
        {
          scenario: 'Stock → $100 (No Move - Worst Case)',
          analysis: 'Both options ATM',
          beforeCrush: 'Still worth ~$10 with time value',
          afterCrush: 'Worth ~$5 after vol crush → -$11 loss',
          lesson: 'Maximum loss scenario - paid for volatility that didn\'t happen',
          color: 'rose'
        },
        {
          scenario: 'Stock → $80 (Big Down Move)',
          analysis: 'Put worth $20, Call worthless',
          beforeCrush: 'Straddle worth ~$22 → +$6 profit',
          afterCrush: 'Worth ~$20 → +$4 profit',
          lesson: 'Profitable either direction, but vol crush still hurts',
          color: 'emerald'
        },
      ].map((outcome) => (
        <div key={outcome.scenario} className={`p-5 rounded-xl bg-${outcome.color}-500/10 border border-${outcome.color}-500/20 space-y-3`}>
          <div className="font-bold text-white text-lg">{outcome.scenario}</div>
          <div className="space-y-2 text-sm">
            <div className="p-3 rounded-lg bg-black/40 text-zinc-300">{outcome.analysis}</div>
            <div className="p-3 rounded-lg bg-violet-500/10 border-l-2 border-violet-400">
              <div className="text-violet-400 font-semibold mb-1">Before Vol Crush:</div>
              <div className="text-zinc-300 text-xs">{outcome.beforeCrush}</div>
            </div>
            <div className="p-3 rounded-lg bg-amber-500/10 border-l-2 border-amber-400">
              <div className="text-amber-400 font-semibold mb-1">After Vol Crush:</div>
              <div className="text-zinc-300 text-xs">{outcome.afterCrush}</div>
            </div>
            <div className="p-3 rounded-lg bg-cyan-500/5 border-l-2 border-cyan-400">
              <div className="text-cyan-400 font-semibold text-xs mb-1">💡 Lesson:</div>
              <div className="text-zinc-300 text-xs italic">{outcome.lesson}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Key Takeaways */}
  <div className="neo-card p-8 space-y-6 border-2 border-amber-500/30">
    <h2 className="text-3xl font-bold text-white">🎓 Volatility Trading Lessons</h2>
    
    <div className="space-y-3">
      {[
        'Straddles profit from large moves in EITHER direction',
        'You\'re buying volatility, not direction - Vega is your friend',
        'Vol crush after earnings can destroy profits even with big moves',
        'Stock needs to move MORE than the straddle cost to breakeven',
        'Breakevens: Stock ± Total Premium (e.g., $100 ± $16 = $84 or $116)',
        'Professional play: Sell straddles BEFORE earnings to collect high IV',
        'Only buy if you expect move larger than market expects',
        'Use OptionsSurface to see how Vega changes with volatility slider',
      ].map((lesson, i) => (
        <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
          <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 font-bold text-amber-400 text-xs">
            {i + 1}
          </div>
          <span className="text-zinc-300">{lesson}</span>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
  }
  
  // Advanced Documentation Sections
  
  export function AdvancedSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <Code className="text-fuchsia-400" size={44} />
              Advanced Concepts
            </h1>
            <p className="text-xl text-zinc-400">
              Professional-level techniques and market mechanics
            </p>
          </div>
    
          {/* Implied Vol Surface */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">The Implied Volatility Surface</h2>
            <p className="text-zinc-300 leading-relaxed text-lg">
              In reality, the Black-Scholes assumption of constant volatility is violated. Different strikes and expirations trade at different implied volatilities, creating a 3D "surface" when plotted.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20 space-y-4">
                <h3 className="text-xl font-bold text-violet-400">Volatility Smile/Skew</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Equity Skew:</strong> OTM puts have higher IV than ATM (fear of crashes)
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">FX Smile:</strong> Both OTM calls and puts have higher IV (symmetric)
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Cause:</strong> Supply/demand, crash risk, jump risk
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 space-y-4">
                <h3 className="text-xl font-bold text-cyan-400">Term Structure</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Contango:</strong> Longer-dated options have higher IV (normal)
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Backwardation:</strong> Near-term IV higher (event risk)
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Why:</strong> Uncertainty, events, mean reversion
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
              <h3 className="text-xl font-bold text-white mb-4">Trading the Surface:</h3>
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <ChevronRight className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong className="text-white">Relative Value:</strong> Identify mispriced options by comparing to surface</span>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong className="text-white">Skew Trades:</strong> Bet on skew flattening/steepening (buy low IV strikes, sell high IV)</span>
                </div>
                <div className="flex items-start gap-3">
                  <ChevronRight className="text-cyan-400 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong className="text-white">Calendar Spreads:</strong> Exploit term structure differences</span>
                </div>
              </div>
            </div>
          </div>
    
          {/* Pin Risk */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Pin Risk & Expiration Dynamics</h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-4">
              <h3 className="text-xl font-bold text-rose-400">What is Pin Risk?</h3>
              <p className="text-zinc-300 leading-relaxed">
                When a stock closes very close to a strike price at expiration, you face uncertainty about whether your short options will be assigned. This creates "pin risk" - you don't know your final position until after hours.
              </p>
              <div className="space-y-3 text-sm">
                <div className="p-4 rounded-lg bg-black/40">
                  <strong className="text-white">Example:</strong> You sold 10 contracts of $100 strike calls. Stock closes at $100.05 at 4pm Friday.
                </div>
                <div className="p-4 rounded-lg bg-rose-500/20 border-l-4 border-rose-400">
                  <strong className="text-rose-400">Problem:</strong> Some option holders will exercise (buy stock from you at $100), others won't. You might end up short 500 shares when you expected 0 or 1000. Over the weekend, stock could gap, leaving you exposed.
                </div>
              </div>
            </div>
    
            <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Managing Pin Risk:</h3>
              <div className="space-y-2 text-sm text-zinc-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
                  <span>Close short options before expiration Friday (Thursday/early Friday)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
                  <span>Avoid short options when stock is within $0.50 of strike</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
                  <span>Roll positions to next expiration if needed</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={14} />
                  <span>Have a plan for assignment - know your broker's rules</span>
                </div>
              </div>
            </div>
          </div>
    
          {/* Early Exercise */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Early Exercise Considerations</h2>
            
            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed">
                American-style options can be exercised before expiration. Understanding when this happens is crucial for short option positions.
              </p>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-4">
                  <h3 className="text-xl font-bold text-emerald-400">Calls - Rarely Exercised Early</h3>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Why Not:</strong> Exercising destroys time value
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Exception:</strong> Deep ITM calls before ex-dividend date (capture dividend &gt; time value)
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-500/20 border-l-4 border-emerald-400">
                      <strong className="text-emerald-400">Example:</strong> Stock pays $0.50 dividend tomorrow, call time value = $0.20 → Rational to exercise early
                    </div>
                  </div>
                </div>
    
                <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-4">
                  <h3 className="text-xl font-bold text-rose-400">Puts - More Common</h3>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Why:</strong> Deep ITM puts can be exercised to get cash now (interest on cash  time value)
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">When:</strong> Put time value very small, high interest rates
                    </div>
                    <div className="p-3 rounded-lg bg-rose-500/20 border-l-4 border-rose-400">
                      <strong className="text-rose-400">Risk:</strong> Short deep ITM puts can be assigned early, requiring you to buy stock
                    </div>
                  </div>
                </div>
              </div>
    
              <InfoBox type="warning">
                <strong>For Short Option Sellers:</strong> Deep ITM options (Delta near 1.0 or -1.0) have highest early exercise risk. Monitor these closely and close before expiration if concerned about assignment.
              </InfoBox>
            </div>
          </div>
    
          {/* Market Making */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Market Maker Dynamics</h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 space-y-4">
              <h3 className="text-xl font-bold text-cyan-400">How Market Makers Operate:</h3>
              <div className="space-y-3 text-zinc-300">
                <p className="leading-relaxed">
                  Market makers (MMs) provide liquidity by continuously quoting bid/ask prices. They profit from the spread but must manage risk. Understanding their behavior helps you trade smarter.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Delta Hedging:</strong> MMs immediately hedge by trading stock to maintain delta-neutral position
                  </div>
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Gamma Scalping:</strong> As stock moves, MMs rehedge, buying low and selling high
                  </div>
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Vega Risk:</strong> MMs manage vol risk across entire surface
                  </div>
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Inventory:</strong> Wide spreads when MMs have large long/short inventory
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-6 rounded-xl bg-violet-500/10 border border-violet-500/20">
              <h3 className="text-xl font-bold text-violet-400 mb-4">Implications for Retail Traders:</h3>
              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong className="text-white">Wide spreads = Poor liquidity:</strong> Don't trade illiquid options with 50% bid/ask spreads</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong className="text-white">Sell at ask, buy at bid:</strong> Use limit orders between spread</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong className="text-white">Volume ≠ Open Interest:</strong> Check both for true liquidity picture</span>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="text-violet-400 mt-0.5 flex-shrink-0" size={16} />
                  <span><strong className="text-white">Gamma pinning:</strong> MMs' hedging can push stock toward high OI strikes</span>
                </div>
              </div>
            </div>
          </div>
    
          {/* Greeks Interactions */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Advanced Greeks Relationships</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
                <h3 className="text-xl font-bold text-white mb-4">Greeks Don't Work in Isolation:</h3>
                <div className="space-y-4 text-sm text-zinc-300">
                  <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <strong className="text-cyan-400">Gamma ↔ Theta Trade-off:</strong> High Gamma means high Theta. ATM options have max Gamma (good volatility exposure) but max Theta (rapid decay). You can't have one without the other.
                  </div>
                  <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <strong className="text-violet-400">Vega ↔ Time:</strong> Longer-dated options have higher Vega. LEAPS are great vol plays but expensive and slow to move.
                  </div>
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <strong className="text-emerald-400">Delta ↔ Gamma:</strong> High Gamma (ATM) means Delta is unstable. Low Gamma (ITM/OTM) means Delta barely changes.
                  </div>
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <strong className="text-amber-400">Vol ↔ All Greeks:</strong> Higher vol increases Gamma, Vega, and Theta. Lower vol makes Greeks smaller (less sensitivity).
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20">
                <h3 className="text-xl font-bold text-fuchsia-400 mb-4">Second-Order Effects:</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Vanna:</strong> ∂Delta/∂Vol - Delta sensitivity to volatility changes
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Charm:</strong> ∂Delta/∂Time - Delta decay over time
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Vomma:</strong> ∂Vega/∂Vol - Vega sensitivity to volatility (convexity)
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 text-xs text-zinc-500">
                    Advanced traders use these to hedge complex books, but retail traders rarely need them
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export function StrategiesDeepSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <Target className="text-emerald-400" size={44} />
              Strategy Analysis Deep Dive
            </h1>
            <p className="text-xl text-zinc-400">
              Comprehensive analysis of each strategy template
            </p>
          </div>
    
          {/* Strategy Comparison Table */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Strategy Comparison Matrix</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-white">Strategy</th>
                    <th className="text-left py-3 px-4 text-white">Outlook</th>
                    <th className="text-left py-3 px-4 text-white">Max Risk</th>
                    <th className="text-left py-3 px-4 text-white">Max Reward</th>
                    <th className="text-left py-3 px-4 text-white">Breakeven</th>
                    <th className="text-left py-3 px-4 text-white">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-semibold text-emerald-400">Long Call</td>
                    <td className="py-3 px-4">Bullish</td>
                    <td className="py-3 px-4">Premium paid</td>
                    <td className="py-3 px-4">Unlimited</td>
                    <td className="py-3 px-4">K + Premium</td>
                    <td className="py-3 px-4">Strong upside conviction</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-semibold text-rose-400">Long Put</td>
                    <td className="py-3 px-4">Bearish</td>
                    <td className="py-3 px-4">Premium paid</td>
                    <td className="py-3 px-4">K - Premium</td>
                    <td className="py-3 px-4">K - Premium</td>
                    <td className="py-3 px-4">Downside protection/speculation</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-semibold text-cyan-400">Bull Call Spread</td>
                    <td className="py-3 px-4">Mod. Bullish</td>
                    <td className="py-3 px-4">Net debit</td>
                    <td className="py-3 px-4">Spread width - debit</td>
                    <td className="py-3 px-4">Low K + Net debit</td>
                    <td className="py-3 px-4">Moderate rally, lower cost</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-semibold text-violet-400">Bear Put Spread</td>
                    <td className="py-3 px-4">Mod. Bearish</td>
                    <td className="py-3 px-4">Net debit</td>
                    <td className="py-3 px-4">Spread width - debit</td>
                    <td className="py-3 px-4">High K - Net debit</td>
                    <td className="py-3 px-4">Moderate decline expected</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-semibold text-amber-400">Long Straddle</td>
                    <td className="py-3 px-4">High Vol</td>
                    <td className="py-3 px-4">Both premiums</td>
                    <td className="py-3 px-4">Unlimited</td>
                    <td className="py-3 px-4">K ± Total premium</td>
                    <td className="py-3 px-4">Big move either direction</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-semibold text-fuchsia-400">Long Strangle</td>
                    <td className="py-3 px-4">Very High Vol</td>
                    <td className="py-3 px-4">Both premiums</td>
                    <td className="py-3 px-4">Unlimited</td>
                    <td className="py-3 px-4">2 points further out</td>
                    <td className="py-3 px-4">Massive move, cheaper than straddle</td>
                  </tr>
                  <tr className="border-b border-zinc-800/50">
                    <td className="py-3 px-4 font-semibold text-emerald-400">Iron Condor</td>
                    <td className="py-3 px-4">Low Vol/Range</td>
                    <td className="py-3 px-4">Spread width - credit</td>
                    <td className="py-3 px-4">Net credit</td>
                    <td className="py-3 px-4">4 points</td>
                    <td className="py-3 px-4">Neutral, collect premium</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold text-cyan-400">Butterfly</td>
                    <td className="py-3 px-4">Minimal move</td>
                    <td className="py-3 px-4">Net debit</td>
                    <td className="py-3 px-4">Moderate</td>
                    <td className="py-3 px-4">2 points</td>
                    <td className="py-3 px-4">Pinpoint price target</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
    
          {/* Iron Condor Deep Dive */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Deep Dive: Iron Condor</h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-4">
              <h3 className="text-xl font-bold text-emerald-400">Structure (4 Legs):</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20">
                    <strong className="text-rose-400">Put Spread (Lower):</strong>
                    <div className="text-zinc-300 mt-2 space-y-1">
                      <div>• Buy $90 Put</div>
                      <div>• Sell $95 Put</div>
                      <div>Protection below $90</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <strong className="text-emerald-400">Call Spread (Upper):</strong>
                    <div className="text-zinc-300 mt-2 space-y-1">
                      <div>• Sell $105 Call</div>
                      <div>• Buy $110 Call</div>
                      <div>Protection above $110</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h3 className="text-lg font-bold text-emerald-400 mb-3">When to Use:</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Low volatility environment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Expect stock to stay range-bound</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Want to collect premium with defined risk</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>High probability strategy (wide range)</span>
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-rose-500/10 border border-rose-500/20">
                <h3 className="text-lg font-bold text-rose-400 mb-3">Risks:</h3>
                <div className="space-y-2 text-sm text-zinc-300">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Loses if stock moves outside range</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Max loss larger than max gain (poor risk/reward)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>Negative Vega - vol spike hurts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="text-rose-400 mt-0.5 flex-shrink-0" size={14} />
                    <span>4 legs = more commissions/slippage</span>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-5 rounded-xl bg-cyan-500/5 border-l-4 border-cyan-400">
              <div className="text-sm font-semibold text-cyan-400 mb-2">💡 Pro Tip:</div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Iron condors work best in low VIX environments (VIX 12-18). Set your strikes at ~1 standard deviation (16 delta) for ~84% probability of profit. But that 16% of the time, you'll take max loss. Manage winners at 50% max profit.
              </p>
            </div>
          </div>
    
          {/* Calendar Spreads */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Calendar Spreads (Time Spreads)</h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 border border-violet-500/20 space-y-4">
              <h3 className="text-xl font-bold text-violet-400">Not in Templates - Advanced Strategy</h3>
              <p className="text-zinc-300 leading-relaxed">
                Calendar spreads exploit different rates of time decay between near-term and longer-term options at the same strike.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-black/40">
                  <strong className="text-white">Structure:</strong>
                  <div className="text-zinc-300 mt-2">
                    • Sell near-term option (high Theta)<br/>
                    • Buy longer-term option (low Theta)<br/>
                    • Same strike, different expiries
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-black/40">
                  <strong className="text-white">Profit From:</strong>
                  <div className="text-zinc-300 mt-2">
                    • Near-term decay faster<br/>
                    • Stock stays near strike<br/>
                    • Volatility increase (long Vega)
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/20">
              <h3 className="text-lg font-bold text-amber-400 mb-3">Example:</h3>
              <div className="space-y-2 text-sm text-zinc-300">
                <div className="p-3 rounded-lg bg-black/40">
                  <strong className="text-white">Sell:</strong> $100 call expiring in 2 weeks → collect $3
                </div>
                <div className="p-3 rounded-lg bg-black/40">
                  <strong className="text-white">Buy:</strong> $100 call expiring in 8 weeks → pay $6
                </div>
                <div className="p-3 rounded-lg bg-black/40">
                  <strong className="text-white">Net Cost:</strong> $3 debit
                </div>
                <div className="p-3 rounded-lg bg-amber-500/20 border-l-4 border-amber-400">
                  <strong className="text-amber-400">After 2 weeks:</strong> Short expires worthless, long still worth ~$4. Profit = $1 if stock stayed near $100.
                </div>
              </div>
            </div>
          </div>
    
          {/* Ratio Spreads */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Ratio Spreads - Skewed Risk/Reward</h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-4">
              <h3 className="text-xl font-bold text-rose-400">Structure:</h3>
              <p className="text-zinc-300">
                Buy fewer options, sell more options at different strike. Creates asymmetric payoff.
              </p>
              <div className="p-4 rounded-lg bg-black/40">
                <strong className="text-white">Example - 1x2 Call Ratio Spread:</strong>
                <div className="mt-2 text-sm text-zinc-300 space-y-1">
                  <div>• Buy 1x $100 call</div>
                  <div>• Sell 2x $110 calls</div>
                  <div>• Profits if stock goes to $110</div>
                  <div className="text-rose-400 pt-2">⚠️ Unlimited risk above $110 (naked short call)</div>
                </div>
              </div>
            </div>
    
            <InfoBox type="warning">
              <strong>Danger:</strong> Ratio spreads can have unlimited risk if the sold options go ITM. Only for advanced traders who actively manage positions and understand the risks. Not recommended for beginners.
            </InfoBox>
          </div>
    
          {/* Diagonal Spreads */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Diagonal Spreads</h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/5 border border-cyan-500/20 space-y-4">
              <h3 className="text-xl font-bold text-cyan-400">Best of Both Worlds:</h3>
              <p className="text-zinc-300 leading-relaxed">
                Combine vertical and calendar spreads - different strikes AND different expirations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Poor Man's Covered Call:</strong>
                    <div className="text-sm text-zinc-300 mt-2 space-y-1">
                      <div>• Buy long-dated ITM call (stock replacement)</div>
                      <div>• Sell near-term OTM call</div>
                      <div>• Collect premium like covered call</div>
                      <div>• Less capital than owning stock</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Diagonal Put Spread:</strong>
                    <div className="text-sm text-zinc-300 mt-2 space-y-1">
                      <div>• Buy long-dated ITM put (protection)</div>
                      <div>• Sell near-term OTM put</div>
                      <div>• Reduces cost of long-term hedge</div>
                      <div>• Roll short put monthly</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export function RiskManagementSection() {
      return (
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <AlertCircle className="text-rose-400" size={44} />
              Risk Management
            </h1>
            <p className="text-xl text-zinc-400">
              Protect your capital and survive to trade another day
            </p>
          </div>
    
          {/* Position Sizing */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Position Sizing Rules</h2>
            
            <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-4">
              <h3 className="text-xl font-bold text-rose-400">The #1 Rule: Never Risk More Than You Can Afford to Lose</h3>
              <div className="space-y-4 text-zinc-300">
                <p className="leading-relaxed">
                  Options can go to zero. Every dollar you spend on premium is at risk. Size positions so that even a complete loss won't damage your account.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { rule: '2-5% Rule', desc: 'Never risk more than 2-5% of account on single trade', example: '$10K account = max $500 risk', color: 'emerald' },
                    { rule: '10% Rule', desc: 'Total options exposure < 10% of account', example: '$10K account = max $1,000 in options', color: 'amber' },
                    { rule: '1/3 Rule', desc: 'Only commit 1/3 of intended size initially', example: 'Want 3 contracts? Buy 1, add if right', color: 'cyan' },
                  ].map((item) => (
                    <div key={item.rule} className={`p-4 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                      <div className={`font-bold text-${item.color}-400 mb-2`}>{item.rule}</div>
                      <div className="text-sm mb-2">{item.desc}</div>
                      <div className="text-xs text-zinc-500 italic">{item.example}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
    
          {/* Stop Losses */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Stop Loss Strategies</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-zinc-900/50 to-black/50 border border-zinc-800/50">
                <h3 className="text-xl font-bold text-white mb-4">Option Stop Losses Are Different:</h3>
                <p className="text-zinc-300 mb-4">
                  Unlike stocks, options can swing wildly intraday. Traditional % stop losses don't work well. Use these instead:
                </p>
                <div className="space-y-4 text-sm">
                  {[
                    {
                      type: 'Premium-Based',
                      rule: 'Exit if option loses 50% of value',
                      example: 'Bought for $4, exit at $2',
                      pros: 'Clear, objective',
                      cons: 'Can be whipsawed',
                      color: 'cyan'
                    },
                    {
                      type: 'Time-Based',
                      rule: 'Exit 7-14 days before expiration',
                      example: 'Avoid Theta acceleration in final 2 weeks',
                      pros: 'Avoids rapid decay',
                      cons: 'May miss late rallies',
                      color: 'violet'
                    },
                    {
                      type: 'Underlying-Based',
                      rule: 'Exit if stock breaks key level',
                      example: 'Long $100 call, exit if stock < $95',
                      pros: 'Respects technical analysis',
                      cons: 'Requires stock monitoring',
                      color: 'emerald'
                    },
                    {
                      type: 'Delta-Based',
                      rule: 'Exit if Delta drops below threshold',
                      example: 'Exit if Delta falls below 0.30 (OTM)',
                      pros: 'Probability-based',
                      cons: 'Need real-time Greeks',
                      color: 'amber'
                    },
                  ].map((strategy) => (
                    <div key={strategy.type} className={`p-5 rounded-xl bg-${strategy.color}-500/10 border border-${strategy.color}-500/20`}>
                      <div className="flex items-center justify-between mb-3">
                        <div className={`font-bold text-${strategy.color}-400`}>{strategy.type}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 rounded-lg bg-black/40">
                          <strong className="text-white">Rule:</strong> {strategy.rule}
                        </div>
                        <div className="p-3 rounded-lg bg-black/40">
                          <strong className="text-white">Example:</strong> {strategy.example}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20">
                            <strong className="text-emerald-400">Pros:</strong> {strategy.pros}
                          </div>
                          <div className="p-2 rounded bg-rose-500/10 border border-rose-500/20">
                            <strong className="text-rose-400">Cons:</strong> {strategy.cons}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
    
              <InfoBox type="tip">
                <strong>Best Practice:</strong> Combine multiple approaches. For example: "Exit if option loses 50% OR stock breaks support OR 10 days before expiration - whichever comes first."
              </InfoBox>
            </div>
          </div>
    
          {/* Managing Winners */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Taking Profits</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-4">
                <h3 className="text-xl font-bold text-emerald-400">When to Take Profits:</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">50% Rule:</strong> Take profit at 50% of max gain
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Double Rule:</strong> Exit if option doubles (100% gain)
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">Target Rule:</strong> Set profit target (e.g., 30%) before entry
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-500/20 border-l-4 border-emerald-400">
                    <strong className="text-emerald-400">Why?</strong> Options decay. Bird in hand &gt; two in bush.
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-violet-500/10 border border-violet-500/20 space-y-4">
                <h3 className="text-xl font-bold text-violet-400">Scaling Out:</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">1/3 at 50%:</strong> Sell 1/3 at 50% gain
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">1/3 at 100%:</strong> Sell 1/3 at 100% gain
                  </div>
                  <div className="p-3 rounded-lg bg-black/40">
                    <strong className="text-white">1/3 runner:</strong> Hold last 1/3 for homerun
                  </div>
                  <div className="p-3 rounded-lg bg-violet-500/20 border-l-4 border-violet-400">
                    <strong className="text-violet-400">Result:</strong> Lock profits, keep upside exposure
                  </div>
                </div>
              </div>
            </div>
    
            <div className="p-5 rounded-xl bg-cyan-500/5 border-l-4 border-cyan-400">
              <div className="text-sm font-semibold text-cyan-400 mb-2">💡 Golden Rule:</div>
              <p className="text-sm text-zinc-300">
                "No one ever went broke taking profits." Don't let winners turn into losers. Options can gain 100% in a day and lose it all the next. Be greedy when fearful, fearful when greedy.
              </p>
            </div>
          </div>
    
          {/* Hedging Strategies */}
          <div className="neo-card p-8 space-y-6">
            <h2 className="text-3xl font-bold text-white">Portfolio Hedging</h2>
            
            <div className="space-y-6">
              <p className="text-zinc-300 leading-relaxed text-lg">
                If you own stocks, options provide insurance against crashes. Even if you don't trade options for speculation, hedging is valuable.
              </p>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/5 border border-rose-500/20 space-y-4">
                  <h3 className="text-xl font-bold text-rose-400">Protective Puts</h3>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Strategy:</strong> Own stock + buy put
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Effect:</strong> Limits downside to strike price
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Cost:</strong> Premium paid (insurance cost)
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Example:</strong> Own stock at $100, buy $95 put for $3 → Max loss = $8 (5+3)
                    </div>
                  </div>
                </div>
    
                <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/5 border border-emerald-500/20 space-y-4">
                  <h3 className="text-xl font-bold text-emerald-400">Covered Calls</h3>
                  <div className="space-y-3 text-sm text-zinc-300">
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Strategy:</strong> Own stock + sell call
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Effect:</strong> Generate income, cap upside
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Income:</strong> Collect premium
                    </div>
                    <div className="p-3 rounded-lg bg-black/40">
                      <strong className="text-white">Risk:</strong> Stock called away if rises above strike
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="p-6 rounded-xl bg-violet-500/10 border border-violet-500/20">
                <h3 className="text-xl font-bold text-violet-400 mb-4">Collar Strategy (Best of Both):</h3>
                <div className="space-y-3 text-sm text-zinc-300">
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Structure:</strong> Own stock + Buy put + Sell call
                  </div>
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Benefit:</strong> Downside protection funded by upside cap
                  </div>
                  <div className="p-4 rounded-lg bg-black/40">
                    <strong className="text-white">Cost:</strong> Often zero or small net credit (call premium pays for put)
                  </div>
                  <div className="p-4 rounded-lg bg-violet-500/20 border-l-4 border-violet-400">
                    <strong className="text-violet-400">Perfect For:</strong> Protecting gains without spending cash. Lock in range.
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Common Mistakes */}
          <div className="neo-card p-8 space-y-6 border-2 border-rose-500/30">
            <h2 className="text-3xl font-bold text-white">⚠️ Common Risk Management Failures</h2>
            
            <div className="space-y-4">
              {[
                {
                  mistake: 'Revenge Trading',
                  description: 'After a loss, immediately making another trade to "get even"',
                  fix: 'Take a break. Review what went wrong. Wait for A+ setup.',
                  severity: 'Critical'
                },
                {
                  mistake: 'Doubling Down',
                  description: 'Adding to losing position hoping it will recover',
                  fix: 'Admit when wrong. Cut losses. Don\'t throw good money after bad.',
                  severity: 'Critical'
                },
                {
                  mistake: 'No Exit Plan',
                  description: 'Entering trade without knowing when you\'ll exit (win or lose)',
                  fix: 'Define profit target and stop loss BEFORE entry.',
                  severity: 'High'
                },
                {
                  mistake: 'Holding Through Earnings',
                  description: 'Keeping long options through earnings expecting the move',
                  fix: 'Sell before earnings to avoid vol crush, or trade spreads.',
                  severity: 'High'
                },
                {
                  mistake: 'Ignoring Theta',
                  description: 'Buying options with <30 days thinking you have time',
                  fix: 'Avoid last-month options unless you have edge on timing.',
                  severity: 'Medium'
                },
                {
                  mistake: 'Over-Leveraging',
                  description: 'Using entire account on one or two option trades',
                  fix: 'Follow position sizing rules. Diversify across time/strikes.',
                  severity: 'Critical'
                },
                {
                  mistake: 'Selling Naked Options',
                  description: 'Selling calls/puts without protection (unlimited risk)',
                  fix: 'Always define risk with spreads unless expert.',
                  severity: 'Critical'
                },
              ].map((item) => (
                <div key={item.mistake} className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="font-bold text-white text-lg">{item.mistake}</div>
                    <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                      item.severity === 'Critical' ? 'bg-rose-500/20 text-rose-400' :
                      item.severity === 'High' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {item.severity}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-300">{item.description}</p>
                  <div className="p-3 rounded-lg bg-black/40 border-l-4 border-emerald-400">
                    <strong className="text-emerald-400 text-sm">✓ Fix: </strong>
                    <span className="text-zinc-300 text-sm">{item.fix}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          {/* Final Wisdom */}
          <div className="neo-card p-8 space-y-6 border-2 border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white">🎓 Final Risk Management Wisdom</h2>
            
            <div className="space-y-4 text-zinc-300">
              <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-violet-500/5 border border-cyan-500/20">
                <p className="text-lg leading-relaxed">
                  <strong className="text-white">"Rule #1: Don't lose money. Rule #2: Don't forget Rule #1."</strong> - Warren Buffett
                </p>
              </div>
    
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                {[
                  'Your goal is to SURVIVE, not to hit homeruns',
                  'Protect capital first, make profits second',
                  'One bad trade shouldn\'t blow up your account',
                  'Risk management is what separates pros from gamblers',
                  'Plan every trade. Trade every plan.',
                  'Cut losses quickly. Let winners run (to a point).',
                  'Never risk more than 5% on any single trade',
                  'Keep a trading journal - learn from mistakes',
                ].map((wisdom, i) => (
                  <div key={i} className="p-4 rounded-lg bg-gradient-to-r from-zinc-900/50 to-black/50 border border-zinc-800/50 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 font-bold text-cyan-400 text-xs">
                      {i + 1}
                    </div>
                    <span>{wisdom}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }