/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          terminal: {
            bg: '#0a0e14',
            surface: '#151a23',
            border: '#1f2937',
            cyan: '#00d9ff',
            green: '#00ff9f',
            amber: '#ffb454',
            red: '#ff6b6b',
            purple: '#bd93f9',
          },
        },
        fontFamily: {
          mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
          display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          glow: {
            '0%': { boxShadow: '0 0 5px rgba(0, 217, 255, 0.5)' },
            '100%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
          },
        },
      },
    },
    plugins: [],
  }