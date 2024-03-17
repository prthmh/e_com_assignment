import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useData } from "../../AppContext";
import { useEffect, useState } from "react";

const NavBar = () => {
  const {
    appState: { category },
    setAppState,
  } = useData();
  const [allCategories, setAllCategories] = useState([]);
  const [input, setInput] = useState("")

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      //making 1st letter capital of categores
      const categories = data.map(
        (item) => item[0].toUpperCase() + item.slice(1)
      );
      setAllCategories(categories);
    }
    fetchCategories();
  }, []);

  //   console.log(allCategories);
  console.log("chossen", category);
  return (
    <nav className="navbar">
      <div className="hamburger">
        <GiHamburgerMenu />
      </div>

      {/* clothes category */}
      <div className="category_picker">
        <select
          value={category}
          onChange={(e) =>
            setAppState((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          {/* <option>Category</option> */}
          <option value="all">All Categories</option>
          {allCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
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
