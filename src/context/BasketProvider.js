import { createContext, useContext, useState } from "react";

import { getFromLocalStorage } from "../utils/getFromLocalStorage";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState(getFromLocalStorage("items", []));

  const value = { items, setItems };

  return (
    <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
