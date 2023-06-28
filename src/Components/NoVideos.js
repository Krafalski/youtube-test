export default function NoVideos({ closeModal }) {
  return (
    <div className="modal-wrapper" onClick={closeModal}>
      <div className="modal">
        <div>
          {" "}
          <h2>No Videos</h2>
          <button onClick={closeModal}>X</button>
        </div>
      </div>
    </div>
  );
}
