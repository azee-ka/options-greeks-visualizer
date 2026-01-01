/**
 * Black-Scholes Option Pricing Model
 * Calculates theoretical option prices and Greeks
 */

// Standard normal cumulative distribution function
function normalCDF(x: number): number {
    const t = 1 / (1 + 0.2316419 * Math.abs(x));
    const d = 0.3989423 * Math.exp(-x * x / 2);
    const prob = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
    return x > 0 ? 1 - prob : prob;
  }
  
  // Standard normal probability density function
  function normalPDF(x: number): number {
    return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
  }
  
  // Calculate d1 parameter for Black-Scholes
  function calculateD1(
    S: number,    // Current stock price
    K: number,    // Strike price
    T: number,    // Time to expiration (years)
    r: number,    // Risk-free rate
    sigma: number // Volatility
  ): number {
    return (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  }
  
  // Calculate d2 parameter for Black-Scholes
  function calculateD2(d1: number, sigma: number, T: number): number {
    return d1 - sigma * Math.sqrt(T);
  }
  
  export interface OptionParams {
    S: number;      // Current stock price
    K: number;      // Strike price
    T: number;      // Time to expiration (years)
    r: number;      // Risk-free rate (decimal, e.g., 0.05 for 5%)
    sigma: number;  // Volatility (decimal, e.g., 0.30 for 30%)
    type: 'call' | 'put';
  }
  
  export interface OptionPriceResult {
    price: number;
    d1: number;
    d2: number;
  }
  
  /**
   * Calculate Black-Scholes option price
   */
  export function blackScholes(params: OptionParams): OptionPriceResult {
    const { S, K, T, r, sigma, type } = params;
  
    // Handle edge cases
    if (T <= 0) {
      const intrinsic = type === 'call' ? Math.max(0, S - K) : Math.max(0, K - S);
      return { price: intrinsic, d1: 0, d2: 0 };
    }
  
    const d1 = calculateD1(S, K, T, r, sigma);
    const d2 = calculateD2(d1, sigma, T);
  
    let price: number;
    if (type === 'call') {
      price = S * normalCDF(d1) - K * Math.exp(-r * T) * normalCDF(d2);
    } else {
      price = K * Math.exp(-r * T) * normalCDF(-d2) - S * normalCDF(-d1);
    }
  
    return { price, d1, d2 };
  }
  
  export interface Greeks {
    delta: number;   // Rate of change of option price w.r.t. underlying price
    gamma: number;   // Rate of change of delta w.r.t. underlying price
    theta: number;   // Rate of change of option price w.r.t. time (per day)
    vega: number;    // Rate of change of option price w.r.t. volatility (per 1%)
    rho: number;     // Rate of change of option price w.r.t. interest rate (per 1%)
  }
  
  /**
   * Calculate all Greeks for an option
   */
  export function calculateGreeks(params: OptionParams): Greeks {
    const { S, K, T, r, sigma, type } = params;
  
    // Handle edge case
    if (T <= 0) {
      return { delta: 0, gamma: 0, theta: 0, vega: 0, rho: 0 };
    }
  
    const d1 = calculateD1(S, K, T, r, sigma);
    const d2 = calculateD2(d1, sigma, T);
    const Nd1 = normalCDF(d1);
    const Nd2 = normalCDF(d2);
    const nd1 = normalPDF(d1);
  
    // Delta: ∂V/∂S
    const delta = type === 'call' ? Nd1 : Nd1 - 1;
  
    // Gamma: ∂²V/∂S² (same for calls and puts)
    const gamma = nd1 / (S * sigma * Math.sqrt(T));
  
    // Theta: ∂V/∂t (convert to per-day by dividing by 365)
    let theta: number;
    if (type === 'call') {
      theta = (
        -(S * nd1 * sigma) / (2 * Math.sqrt(T)) - 
        r * K * Math.exp(-r * T) * Nd2
      ) / 365;
    } else {
      theta = (
        -(S * nd1 * sigma) / (2 * Math.sqrt(T)) + 
        r * K * Math.exp(-r * T) * normalCDF(-d2)
      ) / 365;
    }
  
    // Vega: ∂V/∂σ (convert to per 1% by dividing by 100)
    const vega = (S * Math.sqrt(T) * nd1) / 100;
  
    // Rho: ∂V/∂r (convert to per 1% by dividing by 100)
    let rho: number;
    if (type === 'call') {
      rho = (K * T * Math.exp(-r * T) * Nd2) / 100;
    } else {
      rho = (-K * T * Math.exp(-r * T) * normalCDF(-d2)) / 100;
    }
  
    return { delta, gamma, theta, vega, rho };
  }
  
  /**
   * Generate 3D surface data for visualization
   * Returns array of {strike, time, price} points
   */
  export function generate3DSurface(
    baseParams: Omit<OptionParams, 'K' | 'T'>,
    strikeRange: { min: number; max: number; steps: number },
    timeRange: { min: number; max: number; steps: number }
  ): Array<{ strike: number; time: number; price: number }> {
    const surface: Array<{ strike: number; time: number; price: number }> = [];
  
    const strikeStep = (strikeRange.max - strikeRange.min) / strikeRange.steps;
    const timeStep = (timeRange.max - timeRange.min) / timeRange.steps;
  
    for (let i = 0; i <= strikeRange.steps; i++) {
      const K = strikeRange.min + i * strikeStep;
      for (let j = 0; j <= timeRange.steps; j++) {
        const T = timeRange.min + j * timeStep;
        
        // Skip if time is zero or negative
        if (T <= 0.001) continue;
  
        const { price } = blackScholes({ ...baseParams, K, T });
        surface.push({ strike: K, time: T, price });
      }
    }
  
    return surface;
  }