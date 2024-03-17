import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();
const initialState = {
  category: "all",
  items: [],
};
export const DataProvider = ({ children }) => {
  const [appState, setAppState] = useState(initialState);


  return (
    <DataContext.Provider value={{ appState, setAppState }}>
      {children}
    </DataContext.Provider>
  );
};

//hook
export const useData = () => useContext(DataContext);
