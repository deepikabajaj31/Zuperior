// pages/api/plans.js

export default function handler(req, res) {
    const plans = [
      {
        name: "Zuper Vintage",
        description: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
        features: [
          "$10%", "from 0.2 pips", "No Commission", "1:Unlimited", "0.01",
          "200 trades during peak hours", "Unlimited", "0%", "30%", "0%",
          "Moderate", "Forex, Crypto, Stocks, Commodities, Indices"
        ]
      },
      {
        name: "Zuper Cent",
        description: "Designed for beginners ready to step into the trading world with minimal risk.",
        features: [
          "$10", "from 0.3 pips", "Zero Commission", "1:Unlimited", "Same",
          "200 trades during peak hours", "Unlimited", "0%", "30%", "0%",
          "Low", "Forex, Crypto, Stocks, Commodities, Indices"
        ],
        shiny: true
      },
      {
        name: "Zuper Pro",
        description: "Ideal for traders seeking precision, speed, and high-stakes performance.",
        features: [
          "$500", "from 0.1 pips", "No Commission", "1:Unlimited", "Same",
          "200 trades during peak hours", "Unlimited", "0%", "30%", "0%",
          "High", "Forex, Crypto, Stocks, Commodities, Indices"
        ]
      }
    ]
  
    const rowTitles = [
      "Who It's For", "Initial Capital Requirement", "Spread Advantage",
      "Trading Fees", "Leverage Capacity", "Minimum Lot Size", "Trade Execution Limit",
      "Open Position Capacity", "Stop Out Threshold", "Margin Call Activation",
      "Swap Policy", "Risk Exposure", "Asset Options"
    ]
  
    res.status(200).json({ plans, rowTitles })
  }
  