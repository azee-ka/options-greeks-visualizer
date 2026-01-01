'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Sparkles,
  Github,
  Code,
  Heart,
  Lightbulb,
  BookOpen,
  Users,
  Rocket,
  Coffee,
  Star,
  GitBranch,
  Package,
  Zap,
  Shield,
  Globe,
  Mail
} from 'lucide-react';

export default function AboutPage() {
  const techStack = [
    { name: 'Next.js 15', description: 'React framework with App Router', icon: Rocket },
    { name: 'TypeScript', description: 'Type-safe development', icon: Code },
    { name: 'Three.js', description: '3D visualization engine', icon: Package },
    { name: 'Framer Motion', description: 'Smooth animations', icon: Zap },
    { name: 'Tailwind CSS', description: 'Utility-first styling', icon: Sparkles },
    { name: 'Recharts', description: 'Chart library', icon: GitBranch },
  ];

  const principles = [
    {
      icon: BookOpen,
      title: 'Education First',
      description: 'Options are complex. We make them understandable through interactive visualization and comprehensive documentation.',
      color: 'cyan'
    },
    {
      icon: Shield,
      title: 'Privacy Focused',
      description: 'All calculations happen in your browser. We don\'t collect data, require accounts, or track you. Your analysis stays private.',
      color: 'emerald'
    },
    {
      icon: Heart,
      title: 'Open Source',
      description: 'Free forever, MIT licensed. Learn from the code, contribute improvements, or fork for your own projects.',
      color: 'rose'
    },
    {
      icon: Zap,
      title: 'Performance Obsessed',
      description: 'Every line of code is optimized for speed. Real-time calculations, 60 FPS 3D rendering, zero lag.',
      color: 'amber'
    },
  ];

  const milestones = [
    {
      date: 'Dec 2025',
      title: 'Project Inception',
      description: 'Started building OptionsSurface to help traders and students understand options pricing',
    },
    {
      date: 'Dec 2025',
      title: 'Core Engine',
      description: 'Implemented Black-Scholes model with all Greeks calculations',
    },
    {
      date: 'Dec 2025',
      title: '3D Surface',
      description: 'Added Three.js volatility surface visualization',
    },
    {
      date: 'Dec 2025',
      title: 'Strategy Builder',
      description: 'Built multi-leg strategy analyzer with 8 templates',
    },
    {
      date: 'Dec 2025',
      title: 'Documentation',
      description: 'Created comprehensive 15-section documentation covering theory to practice',
    },
    {
      date: 'Jan 2025',
      title: 'Open Source Release',
      description: 'Released on GitHub with MIT license',
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
                <p className="text-xs text-zinc-500">About the Project</p>
              </div>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/features" className="text-zinc-400 hover:text-zinc-300 text-sm">
                Features
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-6">
              <Heart size={16} />
              <span>Made with passion for finance</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">About</span>
              <br />
              <span className="text-white">OptionsSurface</span>
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              A modern, open-source platform for options analysis, education, and visualization. Built to make derivatives accessible to everyone.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://github.com/azee-ka/options-greeks-visualizer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="neo-card p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-bold text-white">Purpose</h2>
              </div>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                Options trading shouldn't be reserved for Wall Street professionals. OptionsSurface democratizes access to institutional-grade analytics tools, making them free and accessible to students, traders, and developers worldwide.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
              OptionsSurface provides professional-grade options analytics tools as a free, open-source platform. All calculations run client-side with no data collection or account requirements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Core Principles</h2>
            <p className="text-xl text-zinc-400">What drives our development</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`neo-card p-8 border-${principle.color}-500/20 hover:border-${principle.color}-500/40 transition-all`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-${principle.color}-500/10 border border-${principle.color}-500/20 flex items-center justify-center mb-6`}>
                    <Icon className={`text-${principle.color}-400`} size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{principle.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-xl text-zinc-400">Built with modern, cutting-edge tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="neo-card p-6 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{tech.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400">{tech.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Development Journey</h2>
            <p className="text-xl text-zinc-400">From concept to reality</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                    <Star className="text-white" size={20} />
                  </div>
                  {idx !== milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500/50 to-violet-500/50 mt-2" />
                  )}
                </div>
                <div className="neo-card p-6 flex-1 mb-8">
                  <div className="text-sm text-cyan-400 font-semibold mb-2">{milestone.date}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                  <p className="text-zinc-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className="py-24 bg-zinc-950/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="neo-card p-12 text-center border-2 border-violet-500/30"
          >
            <Github className="w-20 h-20 text-violet-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Free & Open Source</h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              OptionsSurface is MIT licensed. Use it, learn from it, modify it, or contribute to it. The entire codebase is available on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://github.com/azee-ka/options-greeks-visualizer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn"
              >
                <Github size={20} />
                <span>View Repository</span>
              </a>
              <a 
                href="https://github.com/azee-ka/options-greeks-visualizer/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn-secondary"
              >
                <GitBranch size={20} />
                <span>Contribute</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact/Community */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-xl text-zinc-400 mb-12">
            Questions, feedback, or want to contribute? We'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/azee-ka/options-greeks-visualizer/discussions" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-card p-6 hover:border-cyan-500/30 transition-all group"
            >
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Discussions</h3>
              <p className="text-sm text-zinc-400">Join the community</p>
            </a>
            <a 
              href="https://github.com/azee-ka/options-greeks-visualizer/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-card p-6 hover:border-violet-500/30 transition-all group"
            >
              <Code className="w-12 h-12 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">Issues</h3>
              <p className="text-sm text-zinc-400">Report bugs or request features</p>
            </a>
            <a 
              href="https://github.com/azee-ka" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neo-card p-6 hover:border-emerald-500/30 transition-all group"
            >
              <Github className="w-12 h-12 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
              <p className="text-sm text-zinc-400">Follow development</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}