import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import About from "./Pages/About";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import NavBar from "./Components/NavBar";

function App() {
  const [comments, setComments] = useState([]);

  console.log("hiii");
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
