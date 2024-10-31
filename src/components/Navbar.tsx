import "./Navbar.css";
import { useState } from "react";
import menuIcon from "../assets/menuIcon.svg";

const Navbar = () => {
  const [topnavClass, setTopnavClass] = useState("topnav");

  const handleClickMenuDrop = () =>
    setTopnavClass(topnavClass === "topnav" ? "topnav responsive" : "topnav");

  const [activeLink, setActiveLink] = useState("home"); // Default active link

  const handleClickMenuItem = (link: string) => {
    setActiveLink(link); // Set the active link on click
  };

  return (
    <nav className={topnavClass}>
      <a
        href="#home"
        className={activeLink === "home" ? "active" : ""}
        onClick={() => handleClickMenuItem("home")}
      >
        Home
      </a>
      <a
        href="#galleria"
        className={activeLink === "galleria" ? "active" : ""}
        onClick={() => handleClickMenuItem("galleria")}
      >
        Galleria
      </a>
      <a
        href="#contact"
        className={activeLink === "contact" ? "active" : ""}
        onClick={() => handleClickMenuItem("contact")}
      >
        Contact
      </a>
      <a
        href="#about"
        className={activeLink === "about" ? "active" : ""}
        onClick={() => handleClickMenuItem("about")}
      >
        About
      </a>
      <a
        href="javascript:void(0);"
        className="icon"
        onClick={handleClickMenuDrop}
      >
        <img src={menuIcon} alt="Menu" />
      </a>
    </nav>
  );
};

export default Navbar;
