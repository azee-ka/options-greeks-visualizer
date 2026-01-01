# OptionsSurface

A web-based options analytics platform for calculating Greeks, visualizing volatility surfaces, and analyzing multi-leg strategies.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

[Live Demo](https://options-surface.vercel.app) • [Documentation](https://options-surface.vercel.app/docs)

---

## Overview

OptionsSurface is an options pricing and analysis tool built with Next.js, Three.js, and TypeScript. It implements the Black-Scholes-Merton model for European option pricing and provides real-time Greek calculations, 3D volatility surface visualization, and multi-leg strategy analysis.

### Key Features

- Real-time Black-Scholes pricing engine
- Interactive Greeks calculator (Delta, Gamma, Theta, Vega, Rho)
- 3D volatility surface visualization
- Multi-leg strategy builder with 8 templates
- Payoff diagram generation
- Comprehensive educational documentation

### Technical Highlights

- Client-side calculations (no backend required)
- 60 FPS 3D rendering with Three.js
- Zero data collection or analytics
- Works offline after initial load
- Responsive design for all screen sizes

---

## Installation

### Requirements

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Setup
```bash
# Clone repository
git clone https://github.com/azee-ka/options-greeks-visualizer.git
cd options-greeks-visualizer

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Application will be available at `http://localhost:3000`

---

## Tech Stack

**Framework & Language**
- Next.js 15 (React 19, App Router)
- TypeScript 5.0

**3D Visualization**
- Three.js r168
- @react-three/fiber 8.17
- @react-three/drei 9.114

**UI & Animation**
- Tailwind CSS 4.0
- Framer Motion 11.11
- Lucide React (icons)

**Charts**
- Recharts 2.15

---

## Project Structure
```
├── app/
│   ├── page.tsx                 # Main application
│   ├── docs/page.tsx            # Documentation
│   ├── features/page.tsx        # Features page
│   ├── about/page.tsx           # About page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── calculator/
│   │   ├── Calculator.tsx       # Greeks calculator
│   │   └── PayoffChart.tsx      # P&L charts
│   ├── surface/
│   │   ├── VolatilitySurface.tsx   # 3D surface
│   │   └── SurfaceControls.tsx     # Controls
│   ├── strategy/
│   │   ├── StrategyBuilder.tsx     # Multi-leg builder
│   │   ├── StrategyTemplates.tsx   # Templates
│   │   └── CombinedPayoff.tsx      # Combined charts
│   └── shared/
│       └── Navigation.tsx       # Navigation
├── lib/
│   ├── blackScholes.ts          # Pricing engine
│   ├── greeks.ts                # Greeks calculations
│   └── types.ts                 # Type definitions
└── public/                      # Static assets
```

---

## Core Functionality

### Black-Scholes Implementation

The pricing engine implements the Black-Scholes-Merton model:

**Call Price:**
```
C = S × N(d₁) - K × e^(-rT) × N(d₂)
```

**Put Price:**
```
P = K × e^(-rT) × N(-d₂) - S × N(-d₁)
```

Where:
- S = Spot price
- K = Strike price
- T = Time to expiration (years)
- r = Risk-free rate
- σ = Volatility
- N(x) = Cumulative normal distribution

### Greeks Calculations

All first-order Greeks are calculated analytically:

- **Delta (Δ)**: ∂V/∂S - Price sensitivity to underlying
- **Gamma (Γ)**: ∂²V/∂S² - Delta sensitivity to underlying
- **Theta (Θ)**: ∂V/∂t - Time decay
- **Vega (ν)**: ∂V/∂σ - Volatility sensitivity
- **Rho (ρ)**: ∂V/∂r - Interest rate sensitivity

### 3D Volatility Surface

The volatility surface plots option prices across:
- X-axis: Strike prices (70%-130% of spot)
- Y-axis: Time to expiration (0-1 year)
- Z-axis: Option theoretical value
- Color: Value gradient (cyan to purple)

Implemented using Three.js BufferGeometry with 50x50 mesh resolution.

### Strategy Builder

Supports multi-leg strategies with:
- Unlimited legs per strategy
- Call/Put selection
- Custom strikes and quantities
- Real-time P&L calculation
- Risk metrics (max profit/loss, breakeven)

**Pre-built Templates:**
- Long Call/Put
- Bull Call Spread
- Bear Put Spread
- Long Straddle
- Long Strangle
- Iron Condor
- Butterfly Spread

---

## Usage

### Calculator

1. Select option type (Call/Put)
2. Adjust parameters using sliders or inputs:
   - Spot Price (S)
   - Strike Price (K)
   - Time to Expiry (T)
   - Volatility (σ)
   - Risk-Free Rate (r)
3. View calculated price and Greeks
4. Analyze payoff diagram

### 3D Surface

1. Navigate to "3D Volatility Surface" tab
2. Use mouse controls:
   - Left-click + drag: Rotate
   - Scroll: Zoom
   - Right-click + drag: Pan
3. Adjust volatility and spot price sliders
4. Observe surface deformation

### Strategy Builder

1. Click "Show Templates" for pre-built strategies
2. Or click "Add Leg" to build custom
3. Configure each leg (type, strike, quantity)
4. Review combined payoff and risk metrics
5. Analyze breakeven points

---

## Documentation

Comprehensive documentation available at `/docs` covering:

- Options fundamentals
- Black-Scholes model derivation
- Greek definitions and usage
- Pricing dynamics
- Volatility concepts
- Strategy tutorials
- Risk management

---

## Development

### Scripts
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment

No environment variables required. All calculations are client-side.

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

## Performance

- Initial bundle: ~450KB gzipped
- 3D rendering: 60 FPS on modern hardware
- Calculation latency: <1ms per option
- Time to Interactive: <2s on 3G

---

## Known Limitations

- Implements European-style options only
- Does not account for dividends (can be extended)
- Assumes constant volatility (Black-Scholes limitation)
- Assumes continuous risk-free rate
- No real market data integration

---

## License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2024-2025

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## References

- Black, F., & Scholes, M. (1973). The Pricing of Options and Corporate Liabilities. Journal of Political Economy.
- Hull, J. C. (2017). Options, Futures, and Other Derivatives (10th ed.). Pearson.
- Haug, E. G. (2007). The Complete Guide to Option Pricing Formulas (2nd ed.). McGraw-Hill.

---

## Links

- Repository: https://github.com/azee-ka/options-greeks-visualizer
- Live Application: https://options-surface.vercel.app
- Documentation: https://options-surface.vercel.app/docs
- Issues: https://github.com/azee-ka/options-greeks-visualizer/issues