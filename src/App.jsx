import { useEffect } from "react";
import "./App.css";
import { useData } from "./AppContext";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import { getItems } from "./utils/getItems";

function App() {
  const {
    appState: { items, category, search },
    setAppState,
  } = useData();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setAppState((prevState) => ({ ...prevState, items: data }));
    }
    fetchData();
  }, []);

  const prodList = getItems(items, category, search);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="top_banner">
            <div className="top_banner_text">
              <div>Best Sellers</div>
              <div>Gift Ideas</div>
              <div>New Releases</div>
              <div>Todays Deals</div>
              <div>Customer Service</div>
            </div>
          </div>
          <h1>Eflyer</h1>
          <NavBar />
          <div className="banner">
            GET STARTED
            <br />
            WITH YOUR FAVOURITE SHOPING
          </div>
          <button className="buy_btn">BUY NOW</button>
        </div>
        <h1 id="fashion" >Man & Women Fashion</h1>
        <div className="products">
          {prodList?.map((prod) => (
            <div key={prod.id}>
              <ProductCard item={prod} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
