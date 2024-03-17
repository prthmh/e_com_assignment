import { useEffect } from "react";
import "./App.css";
import { useData } from "./AppContext";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/ProductCard/ProductCard";
import { getItems } from "./utils/getItems";

function App() {
  const {
    appState: { category, items },
    setAppState,
  } = useData();
  // console.log(appState);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setAppState((prevState) => ({ ...prevState, items: data }));
    }
    fetchData();
  }, []);

  const prodList = getItems(items, category);
  console.log(prodList);

  return (
    <>
      <div className="container">
        <header>
          <h1>Eflyer</h1>
          <NavBar />
        </header>
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
