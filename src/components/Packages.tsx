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
    "Who It's For",
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
            className="relative flex flex-none flex-col flex-nowrap items-center justify-center overflow-hidden box-border border border-transparent antialiased text-white font-manrope fill-white"
            style={{
                background: '#01040d',
                color: 'rgb(255 255 255)',
                fontFamily: '"Manrope", "Manrope Fallback"',
                WebkitTapHighlightColor: 'transparent',
                WebkitTextSizeAdjust: '100%',
                tabSize: 4,
            }}
        >
            <div className="items-center mt-25 mb-50 flex flex-none flex-col flex-nowrap gap-6 h-min justify-center overflow-visible relative w-min p-0">
                <div className="items-start grid gap-2.5 auto-rows-min grid-cols-[repeat(2,minmax(200px,1fr))] grid-rows-[repeat(2,min-content)] items-center self-stretch backdrop-blur-[15px] md:flex flex-none flex-row flex-nowrap md:gap-0 h-min justify-center overflow-hidden relative w-auto p-0">
                    {/* Left labels */}
                    <div className="w-full pt-3 max-[768px]:pt-[92px] justify-self-start md:justify-self-[unset] items-center flex flex-none flex-row flex-nowrap h-min justify-center overflow-hidden relative md:w-min rounded-[15px]">
                        <div className="items-start flex flex-none flex-col flex-nowrap gap-[15px] p-0 h-min overflow-hidden relative w-min md:p-[25px]">
                            <div className="h-12 flex items-center text-sm text-zinc-400" />
                            {rowTitles.map((title) => (
                                <React.Fragment key={title}>
                                    <div className="text-xs md:text-sm text-left font-semibold leading-5 tracking-[-0.01em] text-[hsla(0,0%,100%,0.75)] whitespace-nowrap">
                                        {title}
                                    </div>
                                    <div className="last:opacity-0 bg-[linear-gradient(270deg,#000000_0%,rgba(115,100,150,1)_53%,rgb(0,0,0)_100%)] flex-none h-px opacity-40 overflow-hidden relative w-[125px]" />
                                </React.Fragment>
                            ))}
                        </div>

                    </div>

                    {/* Plan cards */}
                    {plans.map((plan) => {
                        const content = (
                            <div className={plan.shiny ? "bg-black" : "bg-[linear-gradient(156deg,_rgba(56,_17,_56,_0.49)_0%,_rgb(0,_0,_0)_72%)]"}>
                                <div className="items-center flex flex-none flex-col flex-nowrap gap-5 h-min justify-center overflow-hidden relative w-min z-[3] p-4 md:p-[25px] rounded-[15px]">
                                    <div className="items-center flex flex-none flex-col flex-nowrap gap-0 justify-center overflow-hidden relative p-0">
                                        <p className="text-center md:whitespace-nowrap text-3xl font-semibold bg-[linear-gradient(90deg,rgb(255,255,255)_0%,rgba(158,158,158,0.97)_100%)] bg-clip-text text-transparent">
                                            {plan.name}
                                        </p>
                                    </div>
                                    <div className="text-white items-center flex flex-none flex-col flex-nowrap gap-[15px] h-min justify-center overflow-hidden relative w-min p-0">
                                        <div className="text-xs md:text-sm font-semibold leading-5 tracking-[-0.01em] text-center">
                                            {plan.description}
                                        </div>
                                        <div className="last:opacity-0 bg-[linear-gradient(270deg,#000000_0%,rgba(115,100,150,1)_53%,rgb(0,0,0)_100%)] flex-none h-px overflow-hidden relative w-[166px] md:w-[270px]" />
                                        {plan.features.map((feat, idx) => (
                                            <React.Fragment key={idx}>
                                                <div className="text-xs md:text-sm font-semibold leading-5 tracking-[-0.01em] text-center">
                                                    {feat}
                                                </div>
                                                <div className="last:opacity-0 bg-[linear-gradient(270deg,#000000_0%,rgba(115,100,150,1)_53%,rgb(0,0,0)_100%)] flex-none h-px overflow-hidden relative w-[166px] md:w-[270px]" />
                                            </React.Fragment>
                                        ))}
                                    </div>
                                    <div className="flex-none opacity-40 overflow-visible absolute z-10 rounded-[15px] inset-0 w-full h-full box-border pointer-events-none left-0 top-0 border border-white/50" style={{ mask: 'linear-gradient(180deg, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .25) 100%)' }} />
                                </div>
                                <div className="p-6">
                                    <button className="w-full py-2 bg-gradient-to-r from-[#8b5cf6] to-[#a78bfa] text-white font-medium rounded-[15px]">
                                        Start Trading
                                    </button>
                                </div>
                            </div>
                        )
                        return plan.shiny ? (
                            <ShinyWrapper key={plan.name} className="">
                                {content}
                            </ShinyWrapper>
                        ) : (
                            <div key={plan.name}>{content}</div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Packages