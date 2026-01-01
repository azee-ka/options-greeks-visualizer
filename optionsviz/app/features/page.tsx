'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Box, 
  Layers, 
  Activity,
  Zap,
  BookOpen,
  Code,
  Sparkles,
  TrendingUp,
  LineChart,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Github,
  Clock,
  DollarSign,
  BarChart3,
  PlayCircle,
  Workflow,
  Shield,
  Cpu,
  Palette
} from 'lucide-react';

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const heroFeatures = [
    {
      icon: Calculator,
      title: 'Real-Time Greeks Calculator',
      description: 'Calculate Delta, Gamma, Theta, Vega, and Rho instantly with interactive sliders',
      color: 'cyan'
    },
    {
      icon: Box,
      title: '3D Volatility Surface',
      description: 'Visualize option prices across strikes and expirations in stunning 3D',
      color: 'violet'
    },
    {
      icon: Layers,
      title: 'Multi-Leg Strategy Builder',
      description: 'Build complex spreads, straddles, condors with 8+ pre-built templates',
      color: 'emerald'
    },
  ];

  const coreFeatures = [
    {
      icon: Activity,
      category: 'Analytics',
      title: 'Black-Scholes Engine',
      description: 'Industry-standard pricing model with millisecond calculations',
      benefits: ['Accurate pricing', 'Real-time updates', 'No API required', 'Offline capable'],
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: TrendingUp,
      category: 'Visualization',
      title: 'Interactive Charts',
      description: 'Beautiful payoff diagrams with current vs. expiration P&L',
      benefits: ['Hover tooltips', 'Breakeven markers', 'Risk zones', 'Export ready'],
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Zap,
      category: 'Performance',
      title: 'Lightning Fast',
      description: 'Built with Next.js 15 and optimized Three.js rendering',
      benefits: ['60 FPS 3D', 'Instant updates', 'Zero lag', 'Smooth UI'],
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      icon: BookOpen,
      category: 'Education',
      title: 'Comprehensive Docs',
      description: 'From options 101 to advanced strategies and risk management',
      benefits: ['15+ sections', '3 tutorials', 'Theory + practice', 'Beginner friendly'],
      color: 'emerald',
      gradient: 'from-emerald-500 to-green-500'
    },
    {
      icon: Layers,
      category: 'Strategies',
      title: '8 Strategy Templates',
      description: 'Pre-built spreads, straddles, condors, butterflies and more',
      benefits: ['One-click load', 'Fully customizable', 'Risk metrics', 'Instant analysis'],
      color: 'fuchsia',
      gradient: 'from-fuchsia-500 to-pink-500'
    },
    {
      icon: Code,
      category: 'Developer',
      title: 'Open Source',
      description: 'MIT licensed, fully documented codebase on GitHub',
      benefits: ['Free forever', 'Fork & modify', 'Learn from code', 'Contribute back'],
      color: 'rose',
      gradient: 'from-rose-500 to-red-500'
    },
  ];

  const technicalFeatures = [
    {
      icon: Cpu,
      title: 'Advanced Mathematics',
      items: [
        'Black-Scholes-Merton model',
        'Cumulative normal distribution',
        'Greek derivatives calculation',
        'Volatility surface interpolation'
      ]
    },
    {
      icon: Palette,
      title: 'Modern UI/UX',
      items: [
        'Glassmorphism design',
        'Neon gradient effects',
        'Dark mode optimized',
        'Responsive layouts'
      ]
    },
    {
      icon: Workflow,
      title: 'Smart Workflows',
      items: [
        'Parameter presets (ATM, OTM, ITM)',
        'Quick strategy templates',
        'Keyboard shortcuts',
        'Export capabilities'
      ]
    },
    {
      icon: Shield,
      title: 'Reliable & Safe',
      items: [
        'Client-side calculations',
        'No data collection',
        'No account needed',
        'Works offline'
      ]
    },
  ];

  const useCases = [
    {
      persona: 'Students',
      icon: BookOpen,
      color: 'cyan',
      description: 'Learn options theory with interactive visualizations',
      features: ['Visual learning', 'Step-by-step tutorials', 'No risk of real money', 'Build intuition']
    },
    {
      persona: 'Traders',
      icon: TrendingUp,
      color: 'emerald',
      description: 'Analyze strategies before placing real trades',
      features: ['Quick pricing', 'Strategy comparison', 'Risk analysis', 'Breakeven calculations']
    },
    {
      persona: 'Developers',
      icon: Code,
      color: 'violet',
      description: 'Study financial engineering and option pricing code',
      features: ['Clean TypeScript', 'Documented algorithms', 'Reusable components', 'MIT licensed']
    },
    {
      persona: 'Educators',
      icon: Lightbulb,
      color: 'amber',
      description: 'Teach derivatives with powerful visual tools',
      features: ['Live demonstrations', 'Multiple scenarios', 'Comprehensive docs', 'Free to use']
    },
  ];

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
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
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
                <p className="text-xs text-zinc-500">Features & Capabilities</p>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/about" className="text-zinc-400 hover:text-zinc-300 text-sm">
                About
              </Link>
              <Link href="/docs" className="text-zinc-400 hover:text-zinc-300 text-sm">
                Docs
              </Link>
              <Link href="/" className="neo-btn-secondary">
                Launch App
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center mb-16"
>
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
    <Sparkles size={16} />
    <span>Professional Options Analytics</span>
  </div>
  <h1 className="text-6xl md:text-7xl font-bold mb-6">
    <span className="text-gradient">Everything You Need</span>
    <br />
    <span className="text-white">To Master Options</span>
  </h1>
  <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
    Real-time Greeks calculation, 3D volatility surfaces, and multi-leg strategy analysis. Built with modern web technologies for institutional-grade performance.
  </p>
</motion.div>

          {/* Hero Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {heroFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`neo-card p-8 hover:scale-105 transition-transform cursor-pointer group`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-zinc-400">Everything you need in one platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="neo-card p-8 group hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <div className={`text-xs text-${feature.color}-400 font-semibold mb-1`}>{feature.category}</div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2 text-sm text-zinc-500">
                        <CheckCircle className={`text-${feature.color}-400`} size={14} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Technical Excellence</h2>
            <p className="text-xl text-zinc-400">Built with cutting-edge technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="neo-card p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-4">{feature.title}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item) => (
                      <li key={item} className="text-sm text-zinc-400 flex items-start gap-2">
                        <div className="w-1 h-1 rounded-full bg-violet-400 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Built For Everyone</h2>
            <p className="text-xl text-zinc-400">From students to professional traders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={useCase.persona}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`neo-card p-8 border-${useCase.color}-500/20 hover:border-${useCase.color}-500/40 transition-all`}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-${useCase.color}-500/10 border border-${useCase.color}-500/20 flex items-center justify-center mb-6`}>
                    <Icon className={`text-${useCase.color}-400`} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{useCase.persona}</h3>
                  <p className="text-zinc-400 mb-6">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-zinc-500">
                        <CheckCircle className={`text-${useCase.color}-400`} size={14} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="neo-card p-12 border-2 border-cyan-500/30">
            <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Start exploring options with the most comprehensive analytics platform. No signup required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="neo-btn w-full sm:w-auto">
                <PlayCircle size={20} />
                <span>Launch App</span>
              </Link>
              <Link href="/docs" className="neo-btn-secondary w-full sm:w-auto">
                <BookOpen size={20} />
                <span>Read Docs</span>
              </Link>
              <a 
                href="https://github.com/azee-ka/options-greeks-visualizer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn-secondary w-full sm:w-auto"
              >
                <Github size={20} />
                <span>View Source</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}