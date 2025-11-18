import "./hero.css";

const Hero = (props) => {
  const { restaurant } = props;
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.description}</p>
        </div>
        <img src={restaurant.picture} alt="magnifique aperçu d'un buffet" />
      </div>
    </section>
  );
};

export default Hero;
