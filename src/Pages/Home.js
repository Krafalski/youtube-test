// DEPENDENCIES
import { useState } from "react";

import SearchBar from "../components/SearchBar";
import NoVideos from "../components/NoVideos";
import VideoCards from "../components/VideoCards";

function Home() {
  const [showVideos, setShowVideos] = useState(false);
  const [videos, setVideos] = useState([]);

  function getVideos(searchCriteria) {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&kind=video&q=${searchCriteria}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((response) => {
        setVideos(response.items);
        if (response.items) {
          setShowVideos(true);
        } else {
          setShowVideos(false);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="Home">
      <SearchBar getVideos={getVideos} />
      {showVideos ? <VideoCards videos={videos} /> : <NoVideos />}
    </div>
  );
}

export default Home;
