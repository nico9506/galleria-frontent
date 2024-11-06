import "./Banner.css";

function Banner() {
  return (
    <>
      <section className="hero-section">
        <div className="left-side">
          <h1>This website is awesome</h1>
          <p>
            This website has some subtext that goes here under the main title.
            It's a smaller font and the color is lower contrast.
          </p>
        </div>
        <div className="right-side">
          <img
            src="https://nico9506.github.io/TOP-Foundations-Landing-Page/images/crescent-g046240285_640.jpg"
            alt="banner section image"
          />
        </div>
      </section>
    </>
  );
}

export default Banner;
