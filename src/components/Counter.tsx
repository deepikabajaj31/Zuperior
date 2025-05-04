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
            className="w-min m-auto border border-black mt-[-6.5rem]"
            width="11rem"
          />
        </div>
      </div>
      <p className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-[12rem] text-center text-white">
        ${count.toLocaleString()}
        <span style={{ color: "rgb(159, 139, 207)" }}>+</span>
      </p>
    </div>
  );
};

export default Counter;
