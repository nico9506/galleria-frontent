import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GalleriaShowCase from "./pages/GalleriaShowCase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/* Define Routes */}
        <Route path="/" element={<HomePage></HomePage>} />
        <Route
          path="/galleria"
          element={<GalleriaShowCase></GalleriaShowCase>}
        />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
