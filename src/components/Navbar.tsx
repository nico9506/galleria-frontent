import "./Navbar.css";
import { useState } from "react";
import menuIcon from "../assets/menuIcon.svg";

const Navbar = () => {
  const [topnavClass, setTopnavClass] = useState("topnav");

  const handleClick = () => {
    setTopnavClass(topnavClass === "topnav" ? "topnav responsive" : "topnav");
  };

  return (
    <nav className={topnavClass}>
      <a href="#home" className="active">
        Home
      </a>
      <a href="#galleria">Galleria</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="javascript:void(0);" className="icon" onClick={handleClick}>
        <img src={menuIcon} />
      </a>
    </nav>
  );
};

export default Navbar;
