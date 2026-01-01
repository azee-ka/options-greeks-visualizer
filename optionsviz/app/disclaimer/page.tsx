'use client';

import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Shield, 
  FileText, 
  Scale,
  Info,
  ExternalLink,
  XCircle,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function DisclaimerPage() {
  const { isDarkMode } = useTheme();

  const sections = [
    {
      icon: AlertTriangle,
      title: 'Not Financial Advice',
      content: [
        'The information provided on OptionsSurface is for educational and informational purposes only. Nothing on this platform constitutes financial advice, investment advice, trading advice, or any other sort of advice.',
        'You should not treat any of the information, calculations, visualizations, or tools as a substitute for professional financial advice from a licensed advisor.',
        'If you have any doubts about your financial decisions, you should consult a qualified financial advisor, accountant, or other professional before taking action.'
      ]
    },
    {
      icon: Shield,
      title: 'No Warranty or Guarantee',
      content: [
        'OptionsSurface is provided "as is" without any representations or warranties, express or implied. We make no representations or warranties regarding the accuracy, completeness, or reliability of any information, calculations, or tools provided.',
        'The Black-Scholes model and Greeks calculations are theoretical models with known limitations. Real-world options pricing may differ significantly due to market conditions, liquidity, transaction costs, bid-ask spreads, and other factors not accounted for in these models.',
        'We do not guarantee that the platform will be error-free, uninterrupted, secure, or free from bugs, viruses, or other harmful components.'
      ]
    },
    {
      icon: Scale,
      title: 'Limitation of Liability',
      content: [
        'Under no circumstances shall OptionsSurface, its developers, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of your use of this platform.',
        'This includes, but is not limited to, trading losses, lost profits, lost data, business interruption, or any other financial or non-financial losses resulting from the use or inability to use this platform.',
        'You acknowledge that options trading involves substantial risk of loss and is not suitable for all investors. You could lose all or more than your initial investment. You are solely responsible for your trading decisions and their outcomes.'
      ]
    },
    {
      icon: FileText,
      title: 'Educational Purpose Only',
      content: [
        'OptionsSurface is designed as an educational tool to help users understand options pricing theory, Greeks, volatility surfaces, and strategy analysis.',
        'All examples, calculations, visualizations, and strategies are for illustrative and educational purposes only. They do not constitute recommendations to buy, sell, or hold any financial instrument.',
        'Past performance, whether actual or indicated by simulated historical data or theoretical calculations, is no guarantee of future results.',
        'Any reference to specific securities, strategies, or market conditions is for educational illustration only and should not be interpreted as investment advice or a recommendation.'
      ]
    },
    {
      icon: Info,
      title: 'Accuracy and Verification',
      content: [
        'The information, documentation, calculations, and code on OptionsSurface have not been independently verified or audited by financial professionals, mathematicians, or certified options traders.',
        'The creator is not a licensed financial advisor, certified financial planner, registered investment advisor, or professional options trader.',
        'Users are responsible for independently verifying all information, formulas, calculations, and strategies before making any financial decisions or relying on any output from this platform.',
        'The theoretical models used (Black-Scholes, etc.) make simplifying assumptions that may not hold in real markets. Actual options pricing involves additional complexities including dividends, early exercise, transaction costs, market microstructure, supply/demand imbalances, and other factors.',
        'We do not update information in real-time. Market conditions, regulations, and best practices change rapidly. Information may become outdated.'
      ]
    }
  ];

  const importantNotes = [
    {
      title: 'Options Trading Risks',
      icon: AlertTriangle,
      points: [
        'Options trading involves substantial risk and is not suitable for all investors',
        'You can lose your entire investment or more in a short period of time',
        'Options are complex financial instruments requiring significant knowledge and experience',
        'Leverage can amplify both gains and losses exponentially',
        'Time decay (theta) works against option buyers every single day',
        'Volatility changes can dramatically impact option values regardless of direction',
        'Liquidity can dry up instantly, making it impossible to exit positions',
        'Assignment risk on short options can create unexpected large positions'
      ]
    },
    {
      title: 'Platform Limitations',
      icon: XCircle,
      points: [
        'Calculations are based on theoretical models with known and inherent limitations',
        'Does not account for transaction costs, commissions, taxes, slippage, or market impact',
        'Does not include real-time market data, live pricing, or actual exchange quotes',
        'Assumes continuous trading, perfect liquidity, and no market disruptions',
        'Assumes constant volatility (violates reality - volatility changes constantly)',
        'Assumes lognormal price distribution (real markets have fat tails and jumps)',
        'Does not model early exercise optimally for American options',
        'Greeks are approximations that change as market conditions evolve',
        'Visualizations are simplified representations - real markets are more complex'
      ]
    },
    {
      title: 'User Responsibilities',
      icon: Shield,
      points: [
        'Verify all information with licensed professionals before trading real money',
        'Understand the specific risks of each strategy before implementation',
        'Never risk more money than you can afford to lose entirely',
        'Consult with a qualified financial advisor for personalized advice',
        'Ensure options trading is legal and suitable in your jurisdiction',
        'Understand your broker\'s margin requirements, assignment procedures, and exercise policies',
        'Read and understand all option disclosure documents from your broker',
        'Paper trade and test strategies before using real capital',
        'Continuously educate yourself - this platform is a starting point, not the endpoint',
        'Take full responsibility for your trading decisions and outcomes'
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-black text-zinc-100' : 'bg-white text-gray-900'
    }`}>
      {/* Subtle Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(${isDarkMode ? 'rgba(82, 82, 91, 0.05)' : 'rgba(228, 228, 231, 0.5)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? 'rgba(82, 82, 91, 0.05)' : 'rgba(228, 228, 231, 0.5)'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
              isDarkMode 
                ? 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50' 
                : 'bg-gray-100 text-gray-600 border border-gray-200'
            }`}>
              Legal Information
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-light tracking-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Disclaimer & <br/>Legal Notice
            </h1>
            
            <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              Please read these disclaimers carefully before using OptionsSurface. By using this platform, you acknowledge and agree to these terms.
            </p>
          </motion.div>

          {/* Critical Warning - Minimal Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mt-12 p-8 rounded-2xl border ${
              isDarkMode 
                ? 'bg-zinc-900/50 border-zinc-800' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-start gap-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                isDarkMode ? 'bg-zinc-800' : 'bg-white'
              }`}>
                <AlertTriangle className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'} size={24} />
              </div>
              <div className="space-y-4">
                <h3 className={`text-xl font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Important Notice
                </h3>
                <div className={`space-y-4 text-sm leading-relaxed ${
                  isDarkMode ? 'text-zinc-400' : 'text-gray-600'
                }`}>
                  <p>
                    This platform is not professional financial software and has not been verified, audited, or certified by financial professionals, mathematicians, or regulatory bodies.
                  </p>
                  <p>
                    All information, calculations, documentation, visualizations, and tools are provided for educational purposes only. The creator is not a licensed financial advisor, certified financial planner, professional trader, or mathematician.
                  </p>
                  <p className={isDarkMode ? 'text-zinc-300' : 'text-gray-700'}>
                    Do not use this platform to make real trading decisions without first consulting licensed financial professionals and independently verifying all information.
                  </p>
                  <div className={`p-4 rounded-xl mt-6 ${
                    isDarkMode ? 'bg-zinc-800/50 border border-zinc-700/50' : 'bg-white border border-gray-200'
                  }`}>
                    <p className={`text-sm font-medium ${
                      isDarkMode ? 'text-zinc-300' : 'text-gray-700'
                    }`}>
                      Options trading involves substantial risk of loss. You could lose your entire investment or more. Only trade with money you can afford to lose completely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Disclaimer Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDarkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-gray-100 border border-gray-200'
                  }`}>
                    <Icon className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'} size={20} />
                  </div>
                  <h2 className={`text-2xl font-medium ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>{section.title}</h2>
                </div>
                <div className="space-y-4 pl-14">
                  {section.content.map((paragraph, i) => (
                    <p key={i} className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-zinc-400' : 'text-gray-600'
                    }`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Important Notes */}
      <section className={`py-24 ${isDarkMode ? 'bg-zinc-950/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className={`text-3xl font-medium mb-16 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Additional Information</h2>
          
          <div className="space-y-12">
            {importantNotes.map((note, idx) => {
              const Icon = note.icon;
              return (
                <motion.div
                  key={note.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isDarkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-gray-200'
                    }`}>
                      <Icon className={isDarkMode ? 'text-zinc-400' : 'text-gray-600'} size={20} />
                    </div>
                    <h3 className={`text-xl font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>{note.title}</h3>
                  </div>
                  <ul className="space-y-3 pl-14">
                    {note.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ArrowRight className={`flex-shrink-0 mt-0.5 ${
                          isDarkMode ? 'text-zinc-600' : 'text-gray-400'
                        }`} size={16} />
                        <span className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regulatory Disclosure */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`p-8 rounded-2xl border ${
            isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-gray-50 border-gray-200'
          }`}>
            <h2 className={`text-2xl font-medium mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Regulatory Disclosures</h2>
            <div className={`space-y-4 text-sm leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              <p>
                Before trading options, you should read the <a 
                  href="https://www.theocc.com/Company-Information/Documents-and-Archives/Options-Disclosure-Document" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`underline inline-flex items-center gap-1 ${
                    isDarkMode ? 'text-zinc-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Characteristics and Risks of Standardized Options
                  <ExternalLink size={12} />
                </a> published by The Options Clearing Corporation (OCC). This document explains the key characteristics and risks of exchange-traded options.
              </p>
              <p>
                Options are not suitable for all investors. The specific risks of options trading include, but are not limited to:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>The risk of losing your entire investment in a relatively short period of time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>Complex pricing mechanisms that can result in unexpected losses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>Leverage effects that can amplify gains but also magnify losses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>Time decay that erodes option value continuously</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>The possibility of assignment on short positions at inopportune times</span>
                </li>
              </ul>
              <p className="pt-4">
                OptionsSurface is not affiliated with, endorsed by, or connected to any broker, exchange, regulatory body, or financial institution. We do not execute trades, hold customer accounts, or provide personalized investment advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Notice */}
      <section className={`py-16 ${isDarkMode ? 'bg-zinc-950/30' : 'bg-gray-50/50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className={`p-8 rounded-2xl border ${
            isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-gray-200'
          }`}>
            <h2 className={`text-2xl font-medium mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Open Source - Use At Your Own Risk</h2>
            <div className={`space-y-4 text-sm leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              <p>
                OptionsSurface is provided as open-source software under the MIT License. The software is provided "as is", without warranty of any kind, express or implied.
              </p>
              <p>
                By using this software, whether through the website, cloning the repository, or any other means, you agree that:
              </p>
              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>You use the software entirely at your own risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>The developers and contributors are not liable for any damages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>No warranty is provided regarding accuracy, reliability, or fitness for any purpose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>You are responsible for verifying all outputs and calculations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`mt-1.5 ${isDarkMode ? 'text-zinc-600' : 'text-gray-400'}`}>•</span>
                  <span>You should not rely on this software for actual trading decisions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Acceptance */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`p-8 rounded-2xl border ${
            isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-gray-50 border-gray-200'
          }`}>
            <h2 className={`text-2xl font-medium mb-6 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Your Acceptance of These Terms</h2>
            <div className={`space-y-4 text-sm leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              <p>
                By using OptionsSurface, you acknowledge that you have read, understood, and agree to be bound by this disclaimer and all terms stated herein.
              </p>
              <p>
                If you do not agree with any part of this disclaimer, do not use this platform.
              </p>
              <p>
                These terms may be updated periodically. Continued use of the platform after changes constitutes acceptance of the revised terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`p-8 rounded-2xl text-center ${
            isDarkMode ? 'bg-zinc-900/50 border border-zinc-800' : 'bg-white border border-gray-200'
          }`}>
            <h2 className={`text-xl font-medium mb-3 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Questions or Concerns?</h2>
            <p className={`mb-6 text-sm ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              For questions about this disclaimer or the platform, please visit our GitHub repository.
            </p>
            <a
              href="https://github.com/azee-ka/options-greeks-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isDarkMode 
                  ? 'bg-white text-black hover:bg-zinc-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              <ExternalLink size={16} />
              GitHub Repository
            </a>
          </div>
        </div>
      </section>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}