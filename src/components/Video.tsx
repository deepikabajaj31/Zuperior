import React from "react";
import Button from "./Button";

const Video: React.FC = () => {
  return (
    <div className="">
      <div style={{ width: "100%", maxWidth: "470px", margin: "auto" }} className="">
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
      <Button label="Get Funded" bgColor="black" isRotate={true} className="w-min m-auto border border-black mt-[1rem] " width="9rem"/>
    </div>
  );
};

export default Video;
