// DEPENDENCIES
import YouTube from "react-youtube";
import { Link, useParams } from "react-router-dom";

// COMPONENTS
import Comments from "../components/Comments";

export default function Video({ comments, addComment }) {
  let { id } = useParams();
  return (
    <div className="Video">
      <header>
        <Link to="/">Go Back</Link>
      </header>
      <main>
        <YouTube videoId={id} />
        <Comments videoId={id} comments={comments} addComment={addComment} />
      </main>
    </div>
  );
}
