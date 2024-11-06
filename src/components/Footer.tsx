import "./Footer.css";
import facebookIcon from "../assets/facebookIcon.svg";
import instagramIcon from "../assets/instagramIcon.svg";
import twitterIcon from "../assets/twitterIcon.svg";
import githubIcon from "../assets/githubIcon.svg";
import envelopeIcon from "../assets/envelopeIcon.svg";

const Footer = () => {
  return (
    <footer>
      <ul className="iconList">
        <li>
          <a href="https://github.com/nico9506" target="_blank">
            <img src={facebookIcon} />
          </a>
        </li>
        <li>
          <a href="https://github.com/nico9506" target="_blank">
            <img src={instagramIcon} />
          </a>
        </li>
        <li>
          <a href="https://github.com/nico9506" target="_blank">
            <img src={twitterIcon} />
          </a>
        </li>
        <li>
          <a href="https://github.com/nico9506" target="_blank">
            <img src={githubIcon} />
          </a>
        </li>
        <li>
          <a href="https://github.com/nico9506" target="_blank">
            <img src={envelopeIcon} />
          </a>
        </li>
      </ul>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Galleria</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>

      <section className="disclaimer">
        <p>
          Beautifully hand-crafted with libre SVG icons, React, CSS and Vite.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
