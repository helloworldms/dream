import React from "react";

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  // const displayType = display === "list" ? style.list : Style.grid;

  return (
    <li onClick={() => onVideoClick(video)}>
      <h1>{snippet.title}</h1>;
      <img src={snippet.thumbnails.medium.url} alt="img" />
    </li>
  );
};
export default VideoItem;
