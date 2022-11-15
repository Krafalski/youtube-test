import Comment from "./Comment";
import CommentForm from "../components/CommentForm";

function Comments({ addComment, videoId, comments }) {
  return (
    <div>
      <header>
        <h3>A list of comments</h3>
      </header>
      <main>
        <CommentForm addComment={addComment} videoId={videoId} />
        {/* filter over comments and show comments */}
        {comments
          .filter((comment) => comment.id === videoId)
          .map((comment, i) => {
            return <Comment key={comment.id + i} comment={comment} />;
          })}
      </main>
    </div>
  );
}

export default Comments;
