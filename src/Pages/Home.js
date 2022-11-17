// DEPENDENCIES
import { useState } from "react";

import SearchBar from "../Components/SearchBar";
import NoVideos from "../Components/NoVideos";
import VideoCards from "../Components/VideoCards";

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
      .catch((error) => console.error(error) && showVideos(false));
  }

  function closeModal() {
    setVideos([]);
    setShowVideos(true);
  }

  return (
    <div className="Home">
      <SearchBar getVideos={getVideos} />
      {showVideos ? (
        <VideoCards videos={videos} />
      ) : (
        <NoVideos closeModal={closeModal} />
      )}
    </div>
  );
}

export default Home;
