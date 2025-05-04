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
    offset: ["start 1.0", "start 0.2"], 
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    mass: 0.2,
  });

  const fullTextContent = `${headingTextBefore || ""} ${
    highlightedText || ""
  } ${headingTextAfter || ""}`.trim();

  const parsedWords = fullTextContent
    .split(/(<br\s*\/?>|\s+)/i) // capture <br>, spaces
    .filter((w) => w && w.trim() !== "");

  const highlightWords = (highlightedText || "")
    .split(/\s+/)
    .filter((w) => w.trim());

  const isHighlighted = (word: string) => {
    return highlightWords.includes(word.trim());
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
          style={{
            whiteSpace: "pre-line",
            display: "inline-block",
            ...(blurAnimation
              ? {}
              : {
                  x: useTransform(
                    smoothProgress,
                    [0, 1],
                    [textDirection === "right" ? "100vw" : "-100vw", "0vw"]
                  ),
                  opacity: useTransform(smoothProgress, [0.2, 1], [0, 1]),
                }),
          }}
        >
          {parsedWords.map((word, index) => {
            const isBreak = word.toLowerCase().includes("<br");

            if (isBreak) {
              return <br key={`br-${index}`} />;
            }

            if (!blurAnimation) {
              return (
                <span
                  key={index}
                  style={{
                    marginRight: "0.3rem",
                    color: isHighlighted(word) ? "#a35ca2" : "inherit",
                    display: "inline-block",
                  }}
                  className="my-1"
                >
                  {word}
                </span>
              );
            }

            const wordCount = parsedWords.filter(
              (w) => !w.toLowerCase().includes("<br")
            ).length;
            
            const progressPerWord = 0.8 / wordCount;
            const validWordIndex = parsedWords
              .slice(0, index)
              .filter((w) => !w.toLowerCase().includes("<br")).length;
            const wordStartProgress = validWordIndex * progressPerWord;

            const wordOpacity = useTransform(
              smoothProgress,
              [wordStartProgress, wordStartProgress + 0.1],
              [0, 1]
            );
            const wordBlur = useTransform(
              smoothProgress,
              [
                wordStartProgress,
                wordStartProgress + 0.075,
                wordStartProgress + 0.15,
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
                  color: isHighlighted(word) ? "#a35ca2" : "inherit",
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
