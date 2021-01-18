import React from "react";

const VideoDetail = ({ video, video: { snippet } }) => (
  <>
    <iframe
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameborder="0"
      allowfullscreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channelTitle}</h3>
  </>
);

export default VideoDetail;
