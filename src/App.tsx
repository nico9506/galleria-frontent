import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import GalleriaShowCase from "./pages/GalleriaShowCase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import ManageProducts from "./pages/ManageProducts";
import ProtectedRoute from "./services/ProtectedPage";

function App() {
  // To use with redux or a global state
  // const {user} = useAuth();

  const user = { role: "admin" };
  // const user = { role: "customer" };

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
        <Route
          path="/manageProducts"
          element={
            <ProtectedRoute allowedRoles={["admin"]} userRole={user.role}>
              <ManageProducts></ManageProducts>
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
