import React from "react";
import Button from "./Button";

const Video: React.FC = () => {
  return (
    <div className="mb-67">
      <div className="w-[100%] m-auto max-w-[470px]">
        <video
          src="/videos/video.mp4"
          autoPlay
          muted
          loop
          preload="true"
          playsInline
          controls={false}
        ></video>
      </div>
      <Button
        label="Get Funded"
        bgColor="rgb(1, 4, 13)"
        isRotate={true}
        className="w-min m-auto border border-black mt-[-3.5rem]"
        width="10rem"
      />
    </div>
  );
};

export default Video;
