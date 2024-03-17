import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>

      {/* clothes category */}
      <div className="category_picker">
        <select>
          <option>Category</option>
        </select>
      </div>

      {/* search box */}
      <div className="search_box">
        <input placeholder="Enter product name here" />
        <div className="search_icon">
          <FaMagnifyingGlass />
        </div>
      </div>

      {/* language picker */}
      <div className="language_picker">
        <select>
          <option>🇬🇧 English</option>
        </select>
      </div>

      {/* cart */}
      <div className="cart_nav">
        <div className="cart_icon">
          <FaShoppingCart />
        </div>
        Cart
      </div>

      {/* login */}
      <div className="login">
        <div className="login_icon">
          <IoPerson />
        </div>
        Login
      </div>
    </nav>
  );
};

export default NavBar;
