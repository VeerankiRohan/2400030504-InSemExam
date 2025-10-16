import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ background: "#eee", padding: "10px" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/courses" style={{ margin: "10px" }}>Courses</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;