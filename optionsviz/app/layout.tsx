import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OptionsSurface - Black-Scholes Greeks Visualizer',
  description: 'Interactive 3D options pricing calculator with real-time Greeks, volatility surfaces, and multi-leg strategy builder using Black-Scholes model.',
  keywords: ['options', 'black-scholes', 'greeks', 'volatility surface', 'options calculator', 'delta', 'gamma', 'theta', 'vega', 'finance'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}