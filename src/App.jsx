import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Project from "./Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<About />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
