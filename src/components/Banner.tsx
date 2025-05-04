import { CSSProperties, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface BannerProps {
  buttonText: string;
  headingTextBefore?: string;
  highlightedText?: string;
  headingTextAfter?: string;
  footerText: string;
  blurAnimation?: boolean;
}

const Banner: React.FC<BannerProps> = ({
  buttonText,
  headingTextBefore,
  highlightedText,
  headingTextAfter,
  footerText,
  blurAnimation
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.3"], // Start when top of element is 90% from top, end at 30%
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.2,
  });

  const x = useTransform(smoothProgress, [0, 1], ["100vw", "0vw"]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      style={styles.banner}
      className="p-0 overflow-hidden justify-center items-center flex-nowrap w-min flex relative flex-col w-min h-min"
    >
      <button style={styles.button} className="h-min rounded-3xl">
        <p style={styles.btnText} className="rounded-3xl font-semibold">
          {buttonText}
        </p>
      </button>

      <div className="w-full text-center min-h-[60px]">
        <motion.div
          style={{ x, opacity }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 25,
            mass: 0.3,
          }}
          className="text-4xl md:text-5xl font-semibold px-6"
        >
          <span
            dangerouslySetInnerHTML={{
              __html: `${
                headingTextBefore || ""
              } <span style="color: #a35ca2;">${highlightedText || ""}</span> ${
                headingTextAfter || ""
              }`,
            }}
          />
        </motion.div>
      </div>

      <p>{footerText}</p>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  banner: {
    gap: "15px",
    width: "100%",
    height: "20%",
  },
  button: {
    border: "1px solid rgba(255, 255, 255, 0.25)",
    cursor: "pointer",
  },
  btnText: {
    padding: "0.2rem 1.3rem",
    color: "transparent",
    backgroundImage: "linear-gradient(91deg, #c8bae8, #b195f0 98.2475%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
};

export default Banner;
