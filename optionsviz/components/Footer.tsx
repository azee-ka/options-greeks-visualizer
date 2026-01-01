'use client';

import Link from 'next/link';
import { Sparkles, AlertTriangle, Github, ExternalLink } from 'lucide-react';

export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <footer className={`border-t backdrop-blur-xl mt-20 transition-colors duration-300 ${
      isDarkMode ? 'border-zinc-800/50 bg-black/40' : 'border-gray-200/50 bg-white/40'
    }`}>
      {/* Legal Warning Banner */}
      <div className={`border-b ${
        isDarkMode ? 'bg-rose-500/5 border-rose-500/20' : 'bg-rose-500/10 border-rose-500/30'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-rose-400 flex-shrink-0 mt-0.5" size={20} />
            <div className="flex-1">
              <p className={`text-sm leading-relaxed ${
                isDarkMode ? 'text-zinc-300' : 'text-gray-700'
              }`}>
                <strong className={isDarkMode ? 'text-white' : 'text-gray-900'}>Disclaimer:</strong> OptionsSurface is for educational purposes only. Information has not been verified by financial professionals. Options trading involves substantial risk of loss. Not financial advice. See our{' '}
                <Link href="/disclaimer" className="text-rose-400 hover:text-rose-300 underline">
                  full disclaimer
                </Link>
                {' '}before use.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Branding */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="font-bold text-gradient">OptionsSurface</span>
            </div>
            <p className={`text-sm leading-relaxed max-w-md ${
              isDarkMode ? 'text-zinc-500' : 'text-gray-600'
            }`}>
              Educational options analytics platform powered by Black-Scholes mathematics and real-time 3D visualization. Open source and free to use.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/azee-ka/options-greeks-visualizer"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 text-sm transition-colors ${
                  isDarkMode ? 'text-zinc-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'
                }`}
              >
                <Github size={16} />
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Legal
            </h4>
            <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-zinc-500' : 'text-gray-600'}`}>
              <li>
                <Link href="/disclaimer" className={`transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}>
                  Disclaimer & Legal Notice
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.theocc.com/Company-Information/Documents-and-Archives/Options-Disclosure-Document" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors inline-flex items-center gap-1 ${
                    isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                  }`}
                >
                  OCC Risk Disclosure
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/azee-ka/options-greeks-visualizer/blob/main/LICENSE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors inline-flex items-center gap-1 ${
                    isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                  }`}
                >
                  MIT License
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Resources
            </h4>
            <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-zinc-500' : 'text-gray-600'}`}>
              <li>
                <Link href="/docs" className={`transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}>
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/features" className={`transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className={`transition-colors ${
                  isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                }`}>
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/azee-ka/options-greeks-visualizer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors inline-flex items-center gap-1 ${
                    isDarkMode ? 'hover:text-cyan-400' : 'hover:text-cyan-600'
                  }`}
                >
                  GitHub Repository
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className={`mt-12 pt-8 border-t ${
          isDarkMode ? 'border-zinc-800/50' : 'border-gray-200/50'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`text-center md:text-left text-sm ${
              isDarkMode ? 'text-zinc-600' : 'text-gray-500'
            }`}>
              © 2025 OptionsSurface. Built with React, Three.js, and Black-Scholes mathematics.
            </p>
            <p className={`text-center md:text-right text-xs ${
              isDarkMode ? 'text-zinc-600' : 'text-gray-500'
            }`}>
              Not financial advice. For educational purposes only. Trade at your own risk.
            </p>
          </div>
        </div>
      </div>

      {/* Final Legal Notice */}
      <div className={`border-t text-center py-4 ${
        isDarkMode ? 'bg-zinc-950/50 border-zinc-800/50' : 'bg-gray-100/50 border-gray-200/50'
      }`}>
        <p className={`text-xs ${isDarkMode ? 'text-zinc-600' : 'text-gray-500'}`}>
          Options trading involves substantial risk and is not suitable for all investors. Past performance is not indicative of future results.
        </p>
      </div>
    </footer>
  );
}