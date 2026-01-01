'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles,
  Github,
  Code,
  Heart,
  Lightbulb,
  BookOpen,
  Users,
  Rocket,
  Star,
  GitBranch,
  Package,
  Zap,
  Shield
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const { isDarkMode } = useTheme();

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
      date: 'Jan 2026',
      title: 'Open Source Release',
      description: 'Released on GitHub with MIT license',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-zinc-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? 'rgba(6, 182, 212, 0.03)' : 'rgba(6, 182, 212, 0.08)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? 'rgba(6, 182, 212, 0.03)' : 'rgba(6, 182, 212, 0.08)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        <div className={`absolute top-0 right-1/4 w-96 h-96 ${
          isDarkMode ? 'bg-cyan-500/10' : 'bg-cyan-500/20'
        } rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 left-1/4 w-96 h-96 ${
          isDarkMode ? 'bg-violet-500/10' : 'bg-violet-500/20'
        } rounded-full blur-3xl`} />
      </div>

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">About</span>
              <br />
              <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>OptionsSurface</span>
            </h1>
            <p className={`text-xl leading-relaxed mb-8 ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              A modern, open-source platform for options analysis, education, and visualization. Built to make derivatives accessible to everyone.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://github.com/azee-ka/options-greeks-visualizer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn-primary flex items-center gap-2"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-24 ${isDarkMode ? 'bg-zinc-950/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-12`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                  <Lightbulb className="text-white" size={32} />
                </div>
                <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Purpose</h2>
              </div>
              <p className={`text-xl leading-relaxed mb-6 ${
                isDarkMode ? 'text-zinc-300' : 'text-gray-700'
              }`}>
                Options trading shouldn't be reserved for Wall Street professionals. OptionsSurface democratizes access to institutional-grade analytics tools, making them free and accessible to students, traders, and developers worldwide.
              </p>
              <p className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-gray-600'
              }`}>
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
            <h2 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Core Principles</h2>
            <p className={`text-xl ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>What drives our development</p>
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
                  className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-8 border-${principle.color}-500/${isDarkMode ? '20' : '30'} hover:border-${principle.color}-500/${isDarkMode ? '40' : '50'} transition-all`}
                >
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${
                    isDarkMode 
                      ? `bg-${principle.color}-500/10 border-${principle.color}-500/20` 
                      : `bg-${principle.color}-500/20 border-${principle.color}-500/30`
                  }`}>
                    <Icon className={`text-${principle.color}-400`} size={28} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{principle.title}</h3>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={`py-24 ${isDarkMode ? 'bg-zinc-950/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Technology Stack</h2>
            <p className={`text-xl ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Built with modern, cutting-edge tools</p>
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
                  className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-6 hover:border-cyan-500/${isDarkMode ? '30' : '40'} transition-all group`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{tech.name}</h3>
                    </div>
                  </div>
                  <p className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{tech.description}</p>
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
            <h2 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Development Journey</h2>
            <p className={`text-xl ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>From concept to reality</p>
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
                <div className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-6 flex-1 mb-8`}>
                  <div className="text-sm text-cyan-400 font-semibold mb-2">{milestone.date}</div>
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{milestone.title}</h3>
                  <p className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'}>{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source */}
      <section className={`py-24 ${isDarkMode ? 'bg-zinc-950/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-12 text-center border-2 ${
              isDarkMode ? 'border-violet-500/30' : 'border-violet-500/40'
            }`}
          >
            <Github className="w-20 h-20 text-violet-400 mx-auto mb-6" />
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Free & Open Source</h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              OptionsSurface is MIT licensed. Use it, learn from it, modify it, or contribute to it. The entire codebase is available on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://github.com/azee-ka/options-greeks-visualizer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn-primary flex items-center gap-2"
              >
                <Github size={20} />
                <span>View Repository</span>
              </a>
              <a 
                href="https://github.com/azee-ka/options-greeks-visualizer/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${isDarkMode ? 'neo-btn-secondary' : 'neo-btn-secondary-light'}`}
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
          <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get Involved</h2>
          <p className={`text-xl mb-12 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
            Questions, feedback, or want to contribute? We'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="https://github.com/azee-ka/options-greeks-visualizer/discussions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-6 hover:border-cyan-500/${isDarkMode ? '30' : '40'} transition-all group`}
            >
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Discussions</h3>
              <p className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Join the community</p>
            </a>
            <a 
              href="https://github.com/azee-ka/options-greeks-visualizer/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-6 hover:border-violet-500/${isDarkMode ? '30' : '40'} transition-all group`}
            >
              <Code className="w-12 h-12 text-violet-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Issues</h3>
              <p className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Report bugs or request features</p>
            </a>
            <a 
              href="https://github.com/azee-ka" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`neo-card ${isDarkMode ? '' : 'neo-card-light'} p-6 hover:border-emerald-500/${isDarkMode ? '30' : '40'} transition-all group`}
            >
              <Github className="w-12 h-12 text-emerald-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>GitHub</h3>
              <p className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Follow development</p>
            </a>
          </div>
        </div>
      </section>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}