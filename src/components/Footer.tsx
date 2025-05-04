import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState({});
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  // Scroll-based animation
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"], // Animate as it enters/leaves viewport
  });

  const xRange = useTransform(scrollYProgress, [0, 1], ["-15%", "30%"]);
  const springX = useSpring(xRange, {
    stiffness: 100,
    damping: 30,
  });

  interface GlowPosition {
    x: number;
    y: number;
  }

  interface MouseMoveEvent
    extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const handleMouseMove = (e: MouseMoveEvent): void => {
    if (!imgContainerRef.current) return;
    const bounds = imgContainerRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateX = ((y - centerY) / bounds.height) * 30;
    const rotateY = ((x - centerX) / bounds.width) * -30;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`,
    });

    setGlowPos({ x, y });
  };

  const handleMouseLeave = () => {
    setTiltStyle({ transform: "rotateX(0deg) rotateY(0deg) scale(1)" });
  };

  return (
    <div
      ref={footerRef}
      className="relative h-[45rem] w-full flex items-center justify-center overflow-hidden"
    >
      <motion.div
        ref={imgContainerRef}
        className="absolute top-1/2 left-1/2 w-[14rem] h-[14rem] z-10 transform -translate-x-1/2 -translate-y-1/2 bg-[#2E2E2E] flex items-center justify-center rounded-[1.5rem] overflow-hidden transition-all duration-200 ease-in-out"
        style={{
          perspective: 1000,
          ...tiltStyle,
          transition: "transform 0.1s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="absolute w-full h-full pointer-events-none rounded-[1.5rem]"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}px ${glowPos.y}px, rgba(255,255,255,0.2), transparent 60%)`,
            transition: "background 0.05s ease-out",
          }}
        />
        <img
          src="https://framerusercontent.com/images/wPXXd95jZIk3zRQtU2enBhy2g8.png"
          alt="Decorative"
          className="w-[14.5rem] h-[14.5rem] object-cover filter brightness-0 invert p-3 rounded-[1.5rem] cursor-pointer"
          style={{ transformOrigin: "center" }}
        />
      </motion.div>

      <img
        src="https://framerusercontent.com/images/VK7tmBzTRU7cEgNp1WcXO7kHYuA.png"
        alt=""
        className="absolute top-[37rem] left-1/2 transform -translate-x-1/2 -translate-y-[30%] object-contain object-center rounded-xl z-5 h-[5rem] w-[10rem]"
      />

      <motion.div className="text-white text-4xl z-0" style={{ x: springX }}>
        <h2 className="text-[1.8rem] sm:text-[4rem] md:text-[5rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[6.5rem] font-semibold text-center px-4">
          Trade Anytime, <span style={{ color: "#A35CA2" }}>Anywhere</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default Footer;
