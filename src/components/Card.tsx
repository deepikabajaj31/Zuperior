import { CSSProperties, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeaderProps {
  buttonText: string;
  headingTextBefore: string;
  highlightedText: string;
  headingTextAfter: string;
  footerText: string;
}

const Header: React.FC<HeaderProps> = ({
  buttonText,
  headingTextBefore,
  highlightedText,
  headingTextAfter,
  footerText,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.99", "start 0.3"], // Start when top of element is 99% from top, end at 30%
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={ref}
      style={styles.header}
      className="p-0 overflow-hidden justify-center items-center flex-nowrap w-min flex relative flex-col w-min h-min"
    >
      <button style={styles.button} className="h-min rounded-3xl">
        <p style={styles.btnText} className="rounded-3xl font-semibold">
          {buttonText}
        </p>
      </button>

      <div className="w-full text-center min-h-[60px]">
        <motion.div
          style={{ x, opacity }} // Bind x and opacity to scroll progress
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-5xl font-semibold"
        >
          {headingTextBefore}{" "}
          <span style={{ color: "#a35ca2" }}>{highlightedText}</span>{" "}
          {headingTextAfter}
        </motion.div>
      </div>

      <p>{footerText}</p>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  header: {
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

export default Header;