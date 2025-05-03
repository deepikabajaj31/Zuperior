import React from "react";

const Video: React.FC = () => {
  return (
    <div>
      <div style={{ height: "263px", width: "100%", maxWidth: "470px", margin: "auto" }}>
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
    </div>
  );
};

export default Video;
