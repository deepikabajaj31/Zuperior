import React from "react";
import Button from "./Button";

const Video: React.FC = () => {
  return (
    <div>
      <div style={{ width: "100%", maxWidth: "470px", margin: "auto" }}>
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
      <Button label="Get Funded" className="w-min m-auto" bgColor="black"/>
    </div>
  );
};

export default Video;
