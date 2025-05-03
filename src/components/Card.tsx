import React, { useEffect, useRef, useState } from "react";
import { CSSProperties } from "react";

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
  const animationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      style={styles.header}
      className="p-0 overflow-hidden justify-center items-center flex-nowrap w-min flex relative flex-col w-min h-min"
    >
      <button style={styles.button} className="h-min rounded-3xl">
        <p style={styles.btnText} className="rounded-3xl font-semibold">
          {buttonText}
        </p>
      </button>

      <div
        ref={animationRef}
        className={`w-full text-center transform transition-all duration-2000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-24 opacity-0"
        }`}
      >
        <p className="text-5xl font-semibold">
          {headingTextBefore}{" "}
          <span style={{ color: "#a35ca2" }}>{highlightedText}</span>{" "}
          {headingTextAfter}
        </p>
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
