// DEPENDENCIES
import { Link } from "react-router-dom";

import VideoCard from "./VideoCard";

function VideoCards({ videos }) {
  return (
    <div>
      <main>
        {videos.map((video, i) => {
          return (
            <Link key={video.id.videoId + i} to={`/video/${video.id.videoId}`}>
              <VideoCard video={video} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}

export default VideoCards;
