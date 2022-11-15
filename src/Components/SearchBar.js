import { useState } from "react";

function SearchBar({ getVideos }) {
  const [video, setVideo] = useState("");

  function handleChange(event) {
    setVideo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getVideos(video);
    setVideo("");
  }

  return (
    <div>
      <h2>Search for some videos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="video"></label>
        <input
          type="text"
          placeholder="search for a video"
          id="video"
          value={video}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SearchBar;
