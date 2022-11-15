import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import About from "./pages/About";
import Home from "./pages/Home";
import Video from "./pages/Video";
import NavBar from "./components/NavBar";

function App() {
  const [comments, setComments] = useState([]);

  function addComment(obj) {
    const updateComments = [...comments, obj];
    setComments(updateComments);
  }
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/video/:id"
            element={<Video comments={comments} addComment={addComment} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
