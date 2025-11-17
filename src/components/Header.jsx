import icon from "../assets/img/favicon.ico";

const Header = ({ restaurant }) => {
  return (
    <>
      <header>
        <div className="container">
          <div className="top">
            <img src={icon} />
            <p>deliveroo</p>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="restaurant">
          <div>
            <h1>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
          </div>
          <img src={restaurant.picture} />
        </div>
      </div>
    </>
  );
};

export default Header;
