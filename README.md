# options-greeks-visualizer---

## 📘 Usage Guide

### 1. Calculator & Greeks

**Calculate option prices and Greeks:**

1. Select **Call** or **Put**
2. Adjust parameters with sliders:
   - **Spot Price (S)**: Current stock price
   - **Strike Price (K)**: Exercise price
   - **Time to Expiry (T)**: Time remaining (years)
   - **Volatility (σ)**: Implied volatility (%)
   - **Risk-Free Rate (r)**: Interest rate (%)
3. View real-time Greeks:
   - **Delta (Δ)**: Price sensitivity to stock movement
   - **Gamma (Γ)**: Delta change rate
   - **Theta (Θ)**: Daily time decay
   - **Vega (ν)**: Volatility sensitivity
   - **Rho (ρ)**: Interest rate sensitivity

**Quick Presets:**
- **ATM**: At-the-money (S = K = $100)
- **OTM**: Out-of-the-money ($100/$110)
- **ITM**: In-the-money ($100/$90)

### 2. 3D Volatility Surface

**Visualize option prices across strikes and time:**

1. Navigate to **3D Surface** tab
2. **Controls:**
   - **Left-click + drag**: Rotate view
   - **Scroll**: Zoom in/out
   - **Right-click + drag**: Pan camera
3. **Adjust parameters:**
   - **Volatility slider**: See entire surface inflate/deflate
   - **Spot price slider**: Watch surface shift
4. **Interpretation:**
   - **Height (Z-axis)**: Option value
   - **X-axis**: Strike prices
   - **Y-axis**: Time to expiration
   - **Color gradient**: Value intensity (cyan → purple)

### 3. Strategy Builder

**Build multi-leg strategies:**

1. Navigate to **Strategy Builder** tab
2. **Option 1: Use Templates**
   - Click "Show Templates"
   - Select from 8 pre-built strategies
   - Customize as needed
3. **Option 2: Build Custom**
   - Click "Add Leg"
   - Set Call/Put, Strike, Expiry, Quantity
   - Add more legs as needed
4. **Analyze:**
   - View **Net Cost** (total premium)
   - See **Max Profit/Loss**
   - Find **Breakeven Points**
   - Study **Combined Payoff Chart**

### 4. Risk Management

**Essential rules:**

- Never risk more than **2-5%** of account per trade
- Set **stop losses** before entering
- Take profits at **50-100%** gain
- Avoid options with <30 days unless you have edge
- Use defined-risk strategies (spreads) when starting

---

## 📚 Documentation

### Available Sections

Our comprehensive documentation covers:

1. **Introduction** - Getting started
2. **Options 101** - Complete basics
3. **Black-Scholes Deep Dive** - Pricing model
4. **Greeks Explained** - All 5 Greeks
5. **Pricing Dynamics** - How options are priced
6. **Understanding Volatility** - IV vs HV, VIX
7. **Calculator Guide** - Step-by-step
8. **3D Surface Guide** - Visualization usage
9. **Strategy Builder Guide** - Building strategies
10. **Tutorial: First Option** - Hands-on walkthrough
11. **Tutorial: Spreads** - Bull call spread
12. **Tutorial: Volatility Trading** - Straddles
13. **Advanced Concepts** - IV surface, pin risk
14. **Strategy Analysis** - Deep dive on 8+ strategies
15. **Risk Management** - Position sizing, stops, hedging

**Access:** [Read Full Documentation](https://options-surface.vercel.app/docs)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

1. **🐛 Report Bugs**: [Open an issue](https://github.com/azee-ka/options-greeks-visualizer/issues)
2. **💡 Request Features**: [Start a discussion](https://github.com/azee-ka/options-greeks-visualizer/discussions)
3. **📝 Improve Docs**: Submit documentation updates
4. **🔧 Submit Code**: Fork, develop, and create PR

### Development Workflow

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

### Code Standards

- Follow existing code style
- Add TypeScript types
- Write descriptive commit messages
- Test thoroughly before submitting
- Update documentation if needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means:

✅ **You can:**
- Use commercially
- Modify the code
- Distribute
- Use privately

❌ **You cannot:**
- Hold liable
- Use trademarks

📋 **You must:**
- Include license and copyright notice
- State changes made

---

## 🙏 Acknowledgments

### Inspiration & Resources

- **Black-Scholes Model**: Fischer Black, Myron Scholes, Robert Merton
- **Options Theory**: Hull's "Options, Futures, and Other Derivatives"
- **Visualization**: Three.js community
- **Design**: Modern glassmorphism trends

### Special Thanks

- Next.js team for amazing framework
- Three.js contributors for 3D engine
- Open source community for inspiration
- All users and contributors ❤️

---

## 🌐 Links

- **Website**: [https://options-surface.vercel.app](https://options-surface.vercel.app)
- **Documentation**: [https://options-surface.vercel.app/docs](https://options-surface.vercel.app/docs)
- **GitHub**: [https://github.com/azee-ka/options-greeks-visualizer](https://github.com/azee-ka/options-greeks-visualizer)
- **Issues**: [Report Bug](https://github.com/azee-ka/options-greeks-visualizer/issues)
- **Discussions**: [Join Community](https://github.com/azee-ka/options-greeks-visualizer/discussions)

---

## 💬 Support

Need help? Have questions?

- 📖 Check the [Documentation](https://options-surface.vercel.app/docs)
- 💬 Start a [Discussion](https://github.com/azee-ka/options-greeks-visualizer/discussions)
- 🐛 Report [Issues](https://github.com/azee-ka/options-greeks-visualizer/issues)

---

<div align="center">
    
  **If this project helped you, consider giving it a ⭐️**
  
  Made by [azee-ka](https://github.com/azee-ka)
  
</div>