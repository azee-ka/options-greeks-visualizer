/**
 * Multi-leg option strategy builder
 * Calculate combined P&L for option strategies
 */

import { OptionParams, blackScholes } from './blackScholes';

export interface OptionLeg extends OptionParams {
  quantity: number; // Positive for long, negative for short
  premium: number;  // Price paid/received
}

export interface PayoffPoint {
  price: number;    // Underlying price
  pnl: number;      // Profit/Loss at this price
  pnlAtExpiry: number; // P&L if held to expiration
}

/**
 * Calculate payoff at expiration for a single option
 */
function optionPayoffAtExpiry(
  S: number,
  K: number,
  type: 'call' | 'put',
  quantity: number,
  premium: number
): number {
  let intrinsic: number;
  if (type === 'call') {
    intrinsic = Math.max(0, S - K);
  } else {
    intrinsic = Math.max(0, K - S);
  }
  
  // P&L = (intrinsic value - premium paid) * quantity
  return (intrinsic - premium) * quantity * 100; // *100 for contract multiplier
}

/**
 * Calculate current value of an option position
 */
function optionCurrentValue(
  leg: OptionLeg,
  currentPrice: number,
  currentTime: number
): number {
  const currentOptionPrice = blackScholes({
    ...leg,
    S: currentPrice,
    T: currentTime,
  }).price;

  // P&L = (current value - premium paid) * quantity
  return (currentOptionPrice - leg.premium) * leg.quantity * 100;
}

/**
 * Calculate combined payoff for a multi-leg strategy
 */
export function calculateStrategyPayoff(
  legs: OptionLeg[],
  priceRange: { min: number; max: number; steps: number },
  currentTime?: number // If provided, calculates current P&L; otherwise at expiry
): PayoffPoint[] {
  const payoff: PayoffPoint[] = [];
  const step = (priceRange.max - priceRange.min) / priceRange.steps;

  for (let i = 0; i <= priceRange.steps; i++) {
    const price = priceRange.min + i * step;
    
    // Calculate P&L at expiration
    let pnlAtExpiry = 0;
    for (const leg of legs) {
      pnlAtExpiry += optionPayoffAtExpiry(price, leg.K, leg.type, leg.quantity, leg.premium);
    }

    // Calculate current P&L if time is provided
    let pnl = pnlAtExpiry;
    if (currentTime !== undefined && currentTime > 0) {
      pnl = 0;
      for (const leg of legs) {
        pnl += optionCurrentValue(leg, price, currentTime);
      }
    }

    payoff.push({ price, pnl, pnlAtExpiry });
  }

  return payoff;
}

/**
 * Pre-defined strategy templates
 */
export interface StrategyTemplate {
  name: string;
  description: string;
  legs: Omit<OptionLeg, 'S' | 'r' | 'sigma' | 'premium'>[];
}

export const STRATEGY_TEMPLATES: StrategyTemplate[] = [
  {
    name: 'Long Call',
    description: 'Bullish strategy - unlimited upside, limited downside',
    legs: [
      { K: 100, T: 0.25, type: 'call', quantity: 1 },
    ],
  },
  {
    name: 'Long Put',
    description: 'Bearish strategy - profit from downside move',
    legs: [
      { K: 100, T: 0.25, type: 'put', quantity: 1 },
    ],
  },
  {
    name: 'Bull Call Spread',
    description: 'Limited risk, limited profit bullish strategy',
    legs: [
      { K: 95, T: 0.25, type: 'call', quantity: 1 },
      { K: 105, T: 0.25, type: 'call', quantity: -1 },
    ],
  },
  {
    name: 'Bear Put Spread',
    description: 'Limited risk, limited profit bearish strategy',
    legs: [
      { K: 105, T: 0.25, type: 'put', quantity: 1 },
      { K: 95, T: 0.25, type: 'put', quantity: -1 },
    ],
  },
  {
    name: 'Long Straddle',
    description: 'Profit from large move in either direction',
    legs: [
      { K: 100, T: 0.25, type: 'call', quantity: 1 },
      { K: 100, T: 0.25, type: 'put', quantity: 1 },
    ],
  },
  {
    name: 'Long Strangle',
    description: 'Cheaper than straddle, needs bigger move',
    legs: [
      { K: 95, T: 0.25, type: 'put', quantity: 1 },
      { K: 105, T: 0.25, type: 'call', quantity: 1 },
    ],
  },
  {
    name: 'Iron Condor',
    description: 'Profit from low volatility, limited risk',
    legs: [
      { K: 90, T: 0.25, type: 'put', quantity: 1 },
      { K: 95, T: 0.25, type: 'put', quantity: -1 },
      { K: 105, T: 0.25, type: 'call', quantity: -1 },
      { K: 110, T: 0.25, type: 'call', quantity: 1 },
    ],
  },
  {
    name: 'Butterfly Spread (Calls)',
    description: 'Limited risk, profit from minimal price movement',
    legs: [
      { K: 95, T: 0.25, type: 'call', quantity: 1 },
      { K: 100, T: 0.25, type: 'call', quantity: -2 },
      { K: 105, T: 0.25, type: 'call', quantity: 1 },
    ],
  },
];

/**
 * Calculate max profit, max loss, and breakeven points for a strategy
 */
export function analyzeStrategy(payoff: PayoffPoint[]): {
  maxProfit: number;
  maxLoss: number;
  breakevens: number[];
} {
  let maxProfit = -Infinity;
  let maxLoss = Infinity;
  const breakevens: number[] = [];

  for (let i = 0; i < payoff.length; i++) {
    const point = payoff[i];
    maxProfit = Math.max(maxProfit, point.pnlAtExpiry);
    maxLoss = Math.min(maxLoss, point.pnlAtExpiry);

    // Find breakeven points (where P&L crosses zero)
    if (i > 0) {
      const prev = payoff[i - 1];
      if ((prev.pnlAtExpiry < 0 && point.pnlAtExpiry >= 0) ||
          (prev.pnlAtExpiry > 0 && point.pnlAtExpiry <= 0)) {
        // Linear interpolation to find exact breakeven
        const ratio = -prev.pnlAtExpiry / (point.pnlAtExpiry - prev.pnlAtExpiry);
        const breakeven = prev.price + ratio * (point.price - prev.price);
        breakevens.push(breakeven);
      }
    }
  }

  return { maxProfit, maxLoss, breakevens };
}