import React from "react";

const MediaBackground = ({ backgroundImage, videoSrc, children }) => {
  return (
    <div
      className={`media-container ${
        videoSrc ? "video-background" : "image-background"
      }`}
    >
      {videoSrc ? (
        <video className="media-video" autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={backgroundImage}
          className="media-image"
          alt="Media background"
        />
      )}
      <div className="media-overlay"></div>
      <div className="media-content">{children}</div>
    </div>
  );
};

export default MediaBackground;
