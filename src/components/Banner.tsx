import { CSSProperties, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface BannerProps {
  buttonText: string;
  headingTextBefore?: string;
  highlightedText?: string;
  headingTextAfter?: string;
  footerText: string;
  blurAnimation?: boolean;
  textDirection?: "right" | "left";
}

const Banner: React.FC<BannerProps> = ({
  buttonText,
  headingTextBefore,
  highlightedText,
  headingTextAfter,
  footerText,
  blurAnimation = false,
  textDirection = "right",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.2,
  });

  // Combine all text parts for word-by-word processing
  const fullTextContent = `${headingTextBefore || ""} ${
    highlightedText || ""
  } ${headingTextAfter || ""}`.trim();
  const words = fullTextContent.split(" ");

  // Function to determine if a word is part of the highlighted text
  const isHighlighted = (word: string, index: number) => {
    if (!highlightedText) return false;

    const highlightWords = highlightedText.split(" ");
    const beforeWords = (headingTextBefore || "").split(" ").filter((w) => w);
    const startIndex = beforeWords.length;
    const endIndex = startIndex + highlightWords.length - 1;

    return index >= startIndex && index <= endIndex;
  };

  return (
    <div
      ref={ref}
      style={{ ...styles.banner, position: "relative" }}
      className="p-0 overflow-hidden justify-center items-center flex-nowrap w-min flex flex-col w-min h-min"
    >
      <button style={styles.button} className="h-min rounded-3xl">
        <p style={styles.btnText} className="rounded-3xl font-semibold">
          {buttonText}
        </p>
      </button>

      <div className="w-full text-center min-h-[60px] overflow-hidden">
  <motion.div
    className="text-4xl md:text-5xl font-semibold px-6 flex flex-wrap justify-center"
    style={
      blurAnimation
        ? {} // No block movement when blur is on
        : {
            x: useTransform(smoothProgress, [0, 0.3], [
              textDirection === "right" ? 100 : -100,
              0,
            ]),
            opacity: useTransform(smoothProgress, [0, 0.3], [0, 1]),
          }
    }
  >
    {words.map((word, index) => {
      if (!blurAnimation) {
        // No need for word-level animation
        return (
          <span
            key={index}
            style={{
              marginRight: "0.3rem",
              color: isHighlighted(word, index) ? "#a35ca2" : "inherit",
              display: "inline-block",
            }}
            className="my-1"
          >
            {word}
          </span>
        );
      }

      // Word-by-word animation for blur mode
      const wordCount = words.length;
      const progressPerWord = 1 / wordCount;
      const wordStartProgress = index * progressPerWord;

      const wordOpacity = useTransform(
        smoothProgress,
        [wordStartProgress, wordStartProgress + 0.1],
        [0, 1]
      );
      const wordBlur = useTransform(
        smoothProgress,
        [
          wordStartProgress,
          wordStartProgress + 0.2,
          wordStartProgress + 0.3,
        ],
        ["blur(10px)", "blur(5px)", "blur(0px)"]
      );

      return (
        <motion.span
          key={index}
          style={{
            opacity: wordOpacity,
            filter: wordBlur,
            marginRight: "0.3rem",
            color: isHighlighted(word, index) ? "#a35ca2" : "inherit",
            display: "inline-block",
          }}
          className="my-1"
        >
          {word}
        </motion.span>
      );
    })}
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
