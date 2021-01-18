import React, { useEffect, useState } from "react";
// import "./app.css";
import VideoList from "./components/video_list/video_list";
import SearchBar from "./components/search_bar/search_bar";
import VideoDetail from "./components/video_detail/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
    //eslint-disable-line react-hooks/exhaustive-deps
  }, [youtube]);
  return (
    <>
      <SearchBar onSearch={search}></SearchBar>
      {selectedVideo && <VideoDetail video={selectedVideo}></VideoDetail>}
      <VideoList videos={videos} onVideoClick={selectVideo}></VideoList>
    </>
  );
}

export default App;
