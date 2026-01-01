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

import { IntroSection, 
    Options101Section, 
    BlackScholesDeepSection, 
    GreeksExplainedSection, 
    PricingDynamicsSection, 
    VolatilitySection, 
    CalculatorGuideSection,
     SurfaceGuideSection, 
     StrategyGuideSection, 
     TutorialBasicSection, 
     TutorialSpreadsSection, 
     TutorialVolatilitySection, 
     AdvancedSection, 
     StrategiesDeepSection, 
     RiskManagementSection 
    } from '@/components/DocsComponents';

const sections = [
  { id: 'intro', title: 'Introduction', icon: BookOpen, category: 'start' },
  { id: 'options-101', title: 'Options 101', icon: GraduationCap, category: 'theory' },
  { id: 'black-scholes', title: 'Black-Scholes Deep Dive', icon: Calculator, category: 'theory' },
  { id: 'greeks-explained', title: 'Greeks Explained', icon: Activity, category: 'theory' },
  { id: 'pricing-dynamics', title: 'Pricing Dynamics', icon: LineChart, category: 'theory' },
  { id: 'volatility', title: 'Understanding Volatility', icon: Zap, category: 'theory' },
  { id: 'calculator-guide', title: 'Using the Calculator', icon: Calculator, category: 'guides' },
  { id: 'surface-guide', title: '3D Surface Guide', icon: Box, category: 'guides' },
  { id: 'strategy-guide', title: 'Strategy Builder Guide', icon: Layers, category: 'guides' },
  { id: 'tutorial-basic', title: 'Tutorial: First Option', icon: Play, category: 'tutorials' },
  { id: 'tutorial-spreads', title: 'Tutorial: Spreads', icon: Play, category: 'tutorials' },
  { id: 'tutorial-volatility', title: 'Tutorial: Vol Trading', icon: Play, category: 'tutorials' },
  { id: 'advanced', title: 'Advanced Concepts', icon: Code, category: 'advanced' },
  { id: 'strategies-deep', title: 'Strategy Analysis', icon: Target, category: 'advanced' },
  { id: 'risk-management', title: 'Risk Management', icon: AlertCircle, category: 'advanced' },
];

const categories = [
  { id: 'start', label: 'Getting Started', color: 'cyan' },
  { id: 'theory', label: 'Theory & Concepts', color: 'violet' },
  { id: 'guides', label: 'How-To Guides', color: 'emerald' },
  { id: 'tutorials', label: 'Hands-On Tutorials', color: 'amber' },
  { id: 'advanced', label: 'Advanced Topics', color: 'fuchsia' },
];

export default function DocsPage() {
    // const { isDarkMode } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(true);

    const [activeSection, setActiveSection] = useState('intro');
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
    const filteredSections = activeCategory
      ? sections.filter(s => s.category === activeCategory)
      : sections;
  
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
                  <p className="text-xs text-zinc-500">Complete Documentation</p>
                </div>
              </Link>
              <Link href="/" className="neo-btn-secondary">
                Back to App
              </Link>
            </div>
          </div>
        </header>
  
        {/* Category Filter */}
        <div className="sticky top-[73px] z-40 backdrop-blur-2xl bg-black/60 border-b border-zinc-800/50">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex gap-2 overflow-x-auto">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === null
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-zinc-400 hover:text-zinc-300'
                }`}
              >
                All Topics
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? `bg-${cat.color}-500/20 text-${cat.color}-400 border border-${cat.color}-500/30`
                      : 'text-zinc-400 hover:text-zinc-300'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
  
        <DisclaimerBanner isDarkMode={isDarkMode} sticky={false} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
            <div className="sticky top-48">
            <div className="max-h-[calc(100vh-14rem)] overflow-y-auto pr-2 space-y-1 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
                {filteredSections.map((section) => {
                const Icon = section.icon;
                const category = categories.find(c => c.id === section.category);
                return (
                    <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 group ${
                        activeSection === section.id
                        ? 'bg-cyan-500/10 text-cyan-400 border-l-2 border-cyan-400'
                        : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-900/50'
                    }`}
                    >
                    <Icon size={16} className="flex-shrink-0" />
                    <span className="text-sm font-medium flex-1">{section.title}</span>
                    {activeSection !== section.id && (
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                    </button>
                );
                })}
            </div>
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
                {activeSection === 'options-101' && <Options101Section />}
                {activeSection === 'black-scholes' && <BlackScholesDeepSection />}
                {activeSection === 'greeks-explained' && <GreeksExplainedSection />}
                {activeSection === 'pricing-dynamics' && <PricingDynamicsSection />}
                {activeSection === 'volatility' && <VolatilitySection />}
                {activeSection === 'calculator-guide' && <CalculatorGuideSection />}
                {activeSection === 'surface-guide' && <SurfaceGuideSection />}
                {activeSection === 'strategy-guide' && <StrategyGuideSection />}
                {activeSection === 'tutorial-basic' && <TutorialBasicSection />}
                {activeSection === 'tutorial-spreads' && <TutorialSpreadsSection />}
                {activeSection === 'tutorial-volatility' && <TutorialVolatilitySection />}
                {activeSection === 'advanced' && <AdvancedSection />}
                {activeSection === 'strategies-deep' && <StrategiesDeepSection />}
                {activeSection === 'risk-management' && <RiskManagementSection />}
              </motion.div>
            </main>
          </div>
        </div>
  
        <Footer isDarkMode={isDarkMode} />
      </div>
    );
  }