'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Github, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-2xl border-b transition-colors duration-300 ${
      isDarkMode ? 'bg-black/40 border-zinc-800/50' : 'bg-white/40 border-gray-200/50'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 blur opacity-50" />
                <Sparkles className="relative text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient">OptionsSurface</h1>
                <p className={`text-xs ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>Options Analytics</p>
              </div>
            </Link>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm transition-colors ${
              isDarkMode ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
            }`}>Home</Link>
            <Link href="/features" className={`text-sm transition-colors ${
              isDarkMode ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
            }`}>Features</Link>
            <Link href="/about" className={`text-sm transition-colors ${
              isDarkMode ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
            }`}>About</Link>
            <Link href="/docs" className={`text-sm transition-colors ${
              isDarkMode ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
            }`}>Docs</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/azee-ka/options-greeks-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl border transition-all ${
                isDarkMode 
                  ? 'bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                  : 'bg-white/50 border-gray-200 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]'
              }`}
            >
              <Github size={20} className={`transition-colors ${
                isDarkMode ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
              }`} />
            </a>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-xl border transition-all ${
                isDarkMode 
                  ? 'bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50' 
                  : 'bg-white/50 border-gray-200 hover:border-cyan-500/50'
              }`}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-cyan-400" />
              ) : (
                <Moon size={20} className="text-violet-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}