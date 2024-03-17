import { useEffect } from "react";
import "./App.css";
import { useData } from "./AppContext";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { appState, setAppState } = useData();
  console.log(appState);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setAppState((prevState) => ({ ...prevState, items: data }));
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <header>
          <h1>Eflyer</h1>
          <NavBar />
        </header>
      </div>
    </>
  );
}

export default App;
