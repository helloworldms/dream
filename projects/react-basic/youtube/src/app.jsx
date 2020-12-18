import React, { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";

function App() {
  const [videos, setVideos] = useState([]);
  // const [searchs, setSearchs] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAtrSZkopq--QXlpEYQ5SrM9Kg5TZlZMl0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyAJSVCuvjbwIhwSkebEIstM14uu_Qy_Hlw`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
