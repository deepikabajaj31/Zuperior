import React from "react"
import ShinyWrapper from "./ShinyWrapper"

const plans = [
  {
    name: "Zuper Vintage",
    description:
      "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    features: [
      "$10%",
      "from 0.2 pips",
      "No Commission",
      "1:Unlimited",
      "0.01",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Moderate",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
  {
    name: "Zuper Cent",
    description:
      "Designed for beginners ready to step into the trading world with minimal risk.",
    features: [
      "$10",
      "from 0.3 pips",
      "Zero Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "Low",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
    shiny: true,
  },
  {
    name: "Zuper Pro",
    description:
      "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    features: [
      "$500",
      "from 0.1 pips",
      "No Commission",
      "1:Unlimited",
      "Same",
      "200 trades during peak hours",
      "Unlimited",
      "0%",
      "30%",
      "0%",
      "High",
      "Forex, Crypto, Stocks, Commodities, Indices",
    ],
  },
]

const rowTitles = [
  "Who It’s For",
  "Initial Capital Requirement",
  "Spread Advantage",
  "Trading Fees",
  "Leverage Capacity",
  "Minimum Lot Size",
  "Trade Execution Limit",
  "Open Position Capacity",
  "Stop Out Threshold",
  "Margin Call Activation",
  "Swap Policy",
  "Risk Exposure",
  "Asset Options",
]

const Packages: React.FC = () => {
  return (
    <section
      className="
        relative 
        flex 
        flex-col 
        items-center 
        justify-center  
        overflow-hidden 
        box-border 
        border 
        border-transparent 
        antialiased 
        text-white 
        font-manrope 
        fill-white
      "
      style={{
        background: '#01040d',
        color: 'rgb(255 255 255)',
        fontFamily: '"Manrope", "Manrope Fallback"',
        WebkitTapHighlightColor: 'transparent',
        WebkitTextSizeAdjust: '100%',
        tabSize: 4
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-4">
        {/* Left column: feature titles */}
        <div>
          <div className="h-12 flex items-center text-sm text-zinc-400" />
          {rowTitles.map((title) => (
            <React.Fragment key={title}>
              <div className="h-12 flex items-center text-sm text-zinc-400">
                {title}
              </div>
              <div
                className="
                  last:opacity-0 
                  bg-[linear-gradient(270deg,#000000_0%,rgba(115,100,150,1)_53%,rgb(0,0,0)_100%)] 
                  flex-none 
                  h-px 
                  opacity-40 
                  overflow-hidden 
                  relative 
                  w-[125px]
                "
              />
            </React.Fragment>
          ))}
        </div>

        {/* Plan columns */}
        {plans.map((plan) => {
          const content = (
            <>
              {/* card content */}
              <div
                className="relative flex flex-col bg-[linear-gradient(154deg,_#000000_0%,_rgb(13,2,13)_129%)]"
              >
                {/* header */}
                <div className="text-center py-6 px-4">
                  <h3 className="text-2xl">{plan.name}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{plan.description}</p>
                </div>
                <div className="border-t border-zinc-800" />

                {/* feature rows */}
                <div className="flex-1">
                  {plan.features.map((feat, idx) => (
                    <React.Fragment key={idx}>
                      <div className="h-12 flex items-center justify-center text-sm">
                        {feat}
                      </div>
                      <div
                        className="
                          last:opacity-0 
                          bg-[linear-gradient(270deg,#000000_0%,rgba(115,100,150,1)_53%,rgb(0,0,0)_100%)] 
                          flex-none 
                          h-px 
                          overflow-hidden 
                          relative 
                          w-[166px] 
                          md:w-[270px]
                        "
                      />
                    </React.Fragment>
                  ))}
                </div>

                {/* CTA button */}
                <div className="p-6">
                  <button
                    className="
                      w-full py-2
                      bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa]
                      text-white font-medium rounded-md
                    "
                  >
                    Start Trading
                  </button>
                </div>
              </div>
            </>
          )

          return plan.shiny ? (
            <ShinyWrapper key={plan.name} className="">
              {content} 
              </ShinyWrapper>    
          ):( 
        <div
        key={plan.name}
        className="relative flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-[linear-gradient(156deg,_rgba(56,17,56,0.49),_black_72%)]"
      >
        {content}
      </div>  
        )
        })}
      </div>
    </section>
  )
}

export default Packages
