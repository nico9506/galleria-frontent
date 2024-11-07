import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GalleriaShowCase from "./pages/GalleriaShowCase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
