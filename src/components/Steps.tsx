import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TimelineStepProps {
  number: string;
  title: string;
  subtitle: string;
  color: string;
}

const TimelineStep = ({
  number,
  title,
  subtitle,
  color,
}: TimelineStepProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const isEven = parseInt(number, 10) % 2 === 0;

  return (
    <div className="step-container" ref={ref}>
      <div className="desktop">
        {isEven ? (
          <>
            <div className="right step-text">
              <p className="step-sub">Step {parseInt(number, 10)}</p>
              <p className="step-title">{title}</p>
            </div>
            <div className="center">
              <div className="step-number">{number}</div>
              <div className="line-container">
                <motion.div
                  className="progress-line"
                  style={{ height, backgroundColor: color }}
                />
              </div>
            </div>
            <div className="right" />
          </>
        ) : (
          <>
            <div className="left" />
            <div className="center">
              <div className="step-number">{number}</div>
              <div className="line-container">
                <motion.div
                  className="progress-line"
                  style={{ height, backgroundColor: color }}
                />
              </div>
            </div>
            <div className="left step-text">
              <p className="step-sub">Step {parseInt(number, 10)}</p>
              <p className="step-title">{subtitle}</p>
            </div>
          </>
        )}
      </div>

      {/* Mobile layout */}
      <div className="mobile">
        <div className="center">
          <div className="step-number">{number}</div>
          <div className="line-container">
            <motion.div
              className="progress-line"
              style={{ height, backgroundColor: color }}
            />
          </div>
        </div>
        <div className="mobile-step-text">
          <p className="step-sub">Step {parseInt(number, 10)}</p>
          <p className="step-title">{isEven ? title : subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default function Timeline() {
  return (
    <div className="timeline-wrapper">
      <TimelineStep
        number="01"
        title="Register your account"
        subtitle="Register your account"
        color="#a35ca2"
      />
      <TimelineStep
        number="02"
        title="Deposit your funds"
        subtitle="Deposit your funds"
        color="rgb(180 158 232)"
      />
      <TimelineStep number="03" title="KYC" subtitle="KYC" color="#a35ca2" />
      <TimelineStep
        number="04"
        title="Start Trading & Earn Profits"
        subtitle="Start Trading & Earn Profits"
        color="rgb(180 158 232)"
      />
    </div>
  );
}
