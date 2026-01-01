'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Sparkles, Github, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

export default function Header() {
  const { isDarkMode, themeMode, cycleTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getThemeIcon = () => {
    switch (themeMode) {
      case 'dark':
        return <Moon size={20} className="text-violet-400" />;
      case 'light':
        return <Sun size={20} className="text-amber-400" />;
      case 'system':
        return <Monitor size={20} className="text-cyan-400" />;
    }
  };

  const getThemeLabel = () => {
    switch (themeMode) {
      case 'dark':
        return 'Dark';
      case 'light':
        return 'Light';
      case 'system':
        return 'System';
    }
  };

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
            <Link 
              href="/" 
              className={`text-sm font-medium transition-all relative group ${
                isActive('/')
                  ? isDarkMode 
                    ? 'text-cyan-400' 
                    : 'text-cyan-600'
                  : isDarkMode 
                    ? 'text-zinc-400 hover:text-cyan-400' 
                    : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Home
              {isActive('/') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                  style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.5)' }}
                />
              )}
            </Link>
            <Link 
              href="/features" 
              className={`text-sm font-medium transition-all relative group ${
                isActive('/features')
                  ? isDarkMode 
                    ? 'text-cyan-400' 
                    : 'text-cyan-600'
                  : isDarkMode 
                    ? 'text-zinc-400 hover:text-cyan-400' 
                    : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Features
              {isActive('/features') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                  style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.5)' }}
                />
              )}
            </Link>
            <Link 
              href="/about" 
              className={`text-sm font-medium transition-all relative group ${
                isActive('/about')
                  ? isDarkMode 
                    ? 'text-cyan-400' 
                    : 'text-cyan-600'
                  : isDarkMode 
                    ? 'text-zinc-400 hover:text-cyan-400' 
                    : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              About
              {isActive('/about') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                  style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.5)' }}
                />
              )}
            </Link>
            <Link 
              href="/docs" 
              className={`text-sm font-medium transition-all relative group ${
                isActive('/docs')
                  ? isDarkMode 
                    ? 'text-cyan-400' 
                    : 'text-cyan-600'
                  : isDarkMode 
                    ? 'text-zinc-400 hover:text-cyan-400' 
                    : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              Docs
              {isActive('/docs') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400"
                  style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.5)' }}
                />
              )}
            </Link>
            <Link 
              href="/disclaimer" 
              className={`text-sm font-medium transition-all relative group ${
                isActive('/disclaimer')
                  ? isDarkMode 
                    ? 'text-red-400' 
                    : 'text-amber-600'
                  : isDarkMode 
                    ? 'text-zinc-400 hover:text-amber-400' 
                    : 'text-gray-600 hover:text-amber-600'
              }`}
            >
              Disclaimer
              {isActive('/disclaimer') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-red-400 to-amber-400"
                  style={{ boxShadow: '0 0 8px rgba(6, 182, 212, 0.5)' }}
                />
              )}
            </Link>
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
            
            {/* 3-State Theme Toggle */}
            <button
              type="button"
              onClick={cycleTheme}
              className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${
                isDarkMode 
                  ? 'bg-zinc-900/50 border-zinc-800 hover:border-cyan-500/50' 
                  : 'bg-white/50 border-gray-200 hover:border-cyan-500/50'
              }`}
              aria-label={`Current theme: ${getThemeLabel()}. Click to cycle.`}
              title={`Theme: ${getThemeLabel()} (Click to cycle)`}
            >
              <motion.div
                key={themeMode}
                initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.2 }}
              >
                {getThemeIcon()}
              </motion.div>
              <span className={`text-xs font-medium hidden sm:block ${
                isDarkMode ? 'text-zinc-400 group-hover:text-cyan-400' : 'text-gray-600 group-hover:text-cyan-600'
              }`}>
                {getThemeLabel()}
              </span>
              
              {/* Tooltip for cycling hint */}
              <div className={`absolute top-full right-0 mt-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                isDarkMode 
                  ? 'bg-zinc-900 border border-zinc-800 text-zinc-400' 
                  : 'bg-white border border-gray-200 text-gray-600 shadow-lg'
              }`}>
                Click to cycle: Dark → Light → System
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}