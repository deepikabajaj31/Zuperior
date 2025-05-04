"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Counter: React.FC = () => {
  const [count, setCount] = useState(999150);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-7 w-full relative">
      <div className="w-[100%]">
        <div
          className="relative overflow-hidden w-full"
          style={{ paddingTop: "40%" }}
        >
          <video
            src="/videos/counter.mp4"
            autoPlay
            muted
            loop
            preload="true"
            playsInline
            controls={false}
            className="absolute top-0 left-0 w-full h-[200%] object-cover"
          ></video>
          <Button
            label="Are you next?"
            bgColor="rgb(1, 4, 13)"
            isRotate={true}
            className="w-min m-auto border border-black mt-[-2rem] sm:mt-[-4rem] md:mt-[-6.5rem]"
            width="clamp(10rem, 20vw, 15rem)"
          />
        </div>
      </div>
      <div className="absolute top-[-3rem] sm:top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-full flex items-center justify-center">
      <p
          className="text-center text-white whitespace-nowrap overflow-hidden font-medium"
          style={{
            fontSize: "clamp(4rem, 15vw, 18rem)",
            maxWidth: "100%",
          }}
        >
          ${count.toLocaleString()}
          <span style={{ color: "rgb(159, 139, 207)" }}>+</span>
        </p>
      </div>
    </div>
  );
};

export default Counter;
