import "./header.css";
// IMPORT DE L'IMAGE
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo deliveroo" />
      </div>
    </header>
  );
};

export default Header;
