import logo from "./logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <div className="NavContainer">
      <div className="NavFlex">
        <div className="NavLogo">
          <Link to="/">
            <img src={logo} className="NavLogoImg" />
            
          </Link>
        </div>
        <div className="NavMenu">
          <Link to="/Projects" className="menuItem">Projects</Link>
          <Link to="/About" className="menuItem">About</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
