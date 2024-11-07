import { useNavigate } from "react-router-dom";
import "./HomeBanner.css";

function HomeBanner() {
  const navigate = useNavigate();

  return (
    <div className="homeBanner">
      <h1>
        Welcome to <span className="siteName">Galleria</span> – Where Art Meets
        Your Heart
      </h1>
      <p>
        Discover a curated collection of breathtaking paintings from talented
        artists around the world. Whether you're looking to add a personal touch
        to your space or find the perfect piece to inspire you, our gallery
        offers a wide variety of styles and themes to suit every taste. Explore,
        fall in love, and bring art into your life today.
      </p>
      <button onClick={() => navigate("/galleria")}>
        Visit <span className="siteName">Galleria</span>
      </button>
    </div>
  );
}

export default HomeBanner;
