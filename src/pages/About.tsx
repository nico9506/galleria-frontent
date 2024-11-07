import "./About.css";

const About = () => {
  return (
    <>
      <section className="aboutSection">
        <p>
          Welcome to <span className="siteName">Galleria</span>, your
          destination for curated, high-quality paintings that bring art to life
          in your space. We connect art lovers with talented artists from around
          the world, offering a range of styles—from contemporary abstracts to
          classic landscapes.
        </p>
        <img src="https://images.pexels.com/photos/219552/pexels-photo-219552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </section>
      <section className="aboutSection opposite">
        <p>
          Our mission is simple: to make owning beautiful, authentic art an
          accessible and inspiring experience. Each piece is selected for its
          craftsmanship and emotional resonance, ensuring you find artwork that
          truly speaks to you.
        </p>
        <img src="https://images.pexels.com/photos/3811830/pexels-photo-3811830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </section>
      <section className="aboutSection">
        <p>
          Discover your next masterpiece at
          <span className="siteName">Galleria</span> — where every painting
          tells a story.
        </p>
        <img src="https://images.pexels.com/photos/2372944/pexels-photo-2372944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </section>
    </>
  );
};

export default About;
