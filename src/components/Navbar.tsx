import "./Navbar.css";
import { useState } from "react";
import menuIcon from "../assets/menuIcon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [topnavClass, setTopnavClass] = useState("topnav");

  const handleClickMenuDrop = () =>
    setTopnavClass(topnavClass === "topnav" ? "topnav responsive" : "topnav");

  const [activeLink, setActiveLink] = useState("home"); // Default active link

  const handleClickMenuItem = (link: string) => {
    setTopnavClass("topnav");
    setActiveLink(link); // Set the active link on click
  };

  return (
    <nav className={topnavClass}>
      <Link
        to="/"
        className={activeLink === "home" ? "active" : ""}
        onClick={() => handleClickMenuItem("home")}
      >
        Home
      </Link>
      <Link
        to="/galleria"
        className={activeLink === "galleria" ? "active" : ""}
        onClick={() => handleClickMenuItem("galleria")}
      >
        Galleria
      </Link>
      <Link
        to="/contact"
        className={activeLink === "contact" ? "active" : ""}
        onClick={() => handleClickMenuItem("contact")}
      >
        Contact
      </Link>
      <Link
        to="/about"
        className={activeLink === "about" ? "active" : ""}
        onClick={() => handleClickMenuItem("about")}
      >
        About
      </Link>
      <button className="icon" onClick={handleClickMenuDrop}>
        <img src={menuIcon} alt="Menu" />
      </button>
    </nav>
  );
};

export default Navbar;
