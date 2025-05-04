import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineStepProps {
  number: string;
  title: string;
  color: string;
}

const TimelineStep = ({ number, title, color }: TimelineStepProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const isEven = parseInt(number, 10) % 2 === 0;

  return (
    <div className="flex justify-center w-full relative" ref={ref}>
      <div className="w-full flex max-[768px]:hidden">
        {isEven ? (
          <>
            <div className="w-full min-h-[200px] flex flex-col text-left text-right">
              <p className="text-base opacity-60 m-0">
                Step {parseInt(number, 10)}
              </p>
              <p className="text-2xl font-semibold mt-1 mb-0">{title}</p>
            </div>
            <div className="w-[10%] flex flex-col items-center pb-4 mt-2">
              <div className="text-[2.7rem] font-bold mb-2">{number}</div>
              <div className="w-[2px] h-[285px] bg-[#222] relative overflow-hidden">
                <motion.div
                  className="absolute w-[2px] top-0 left-0 origin-top"
                  style={{ height, backgroundColor: color }}
                />
              </div>
            </div>
            <div className="w-full min-h-[200px] flex flex-col text-right" />
          </>
        ) : (
          <>
            <div className="w-full min-h-[200px] flex flex-col text-left" />
            <div className="w-[10%] flex flex-col items-center pb-4 mt-2">
              <div className="text-[2.7rem] font-bold mb-2">{number}</div>
              <div className="w-[2px] h-[285px] bg-[#222] relative overflow-hidden">
                <motion.div
                  className="absolute w-[2px] top-0 left-0 origin-top"
                  style={{ height, backgroundColor: color }}
                />
              </div>
            </div>
            <div className="w-full min-h-[200px] flex flex-col text-left">
              <p className="text-base opacity-60 m-0">
                Step {parseInt(number, 10)}
              </p>
              <p className="text-2xl font-semibold mt-1 mb-0">{title}</p>
            </div>
          </>
        )}
      </div>

      {/* Mobile layout */}
      <div className="hidden max-[768px]:flex w-full px-4 pl-8 flex-row items-start">
        <div className="flex flex-col items-center pb-0 w-[20%] mr-10">
          <div className="font-bold mb-2 text-[2.5rem]">{number}</div>
          <div className="w-[2px] h-[285px] bg-[#222] relative overflow-hidden">
            <motion.div
              className="absolute w-[2px] top-0 left-0 origin-top"
              style={{ height, backgroundColor: color }}
            />
          </div>
        </div>
        <div className="w-[80%] flex flex-col justify-center">
          <p className="text-base opacity-60 m-0 text-left">
            Step {parseInt(number, 10)}
          </p>
          <p className="text-xl font-semibold mt-1 mb-0 text-left">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="w-full text-white pt-20 px-4 flex flex-col items-center mb-4">
      <TimelineStep number="01" title="Register your account" color="#a35ca2" />
      <TimelineStep
        number="02"
        title="Deposit your funds"
        color="rgb(180 158 232)"
      />
      <TimelineStep number="03" title="KYC" color="#a35ca2" />
      <TimelineStep
        number="04"
        title="Start Trading & Earn Profits"
        color="rgb(180 158 232)"
      />
    </div>
  );
}
