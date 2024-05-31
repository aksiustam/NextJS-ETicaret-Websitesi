"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    let getItem = localStorage.getItem("cart");
    let getItemParse = JSON.parse(getItem) || [];
    if (getItemParse) {
      localStorage.setItem("cart", JSON.stringify(getItemParse));
      setBasket(getItemParse);
    }
  }, []);

  const addToBasket = useCallback(
    (newItem) => {
      let upBasket = [...basket];

      const Index = upBasket.findIndex((item) => item.id === newItem.id);
      if (Index !== -1) {
        upBasket[Index].quantity += newItem.quantity || 1;
      } else {
        upBasket = [...upBasket, newItem];
      }

      setBasket(upBasket);
      localStorage.setItem("cart", JSON.stringify(upBasket));
    },
    [basket]
  );

  const removeBasket = useCallback(
    (newItem) => {
      let upBasket = [...basket];
      const Index = upBasket.findIndex((item) => item.id === newItem.id);

      if (Index !== -1) {
        upBasket.splice(Index, 1);
        setBasket(upBasket);
        localStorage.setItem("cart", JSON.stringify(upBasket));
      }
    },
    [basket]
  );

  const emptyBasket = useCallback(() => {
    setBasket([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }, []);

  let value = {
    basket,
    addToBasket,
    removeBasket,
    emptyBasket,
  };
  return <CartContext.Provider value={value} {...props} />;
};

const useCart = () => {
  const context = useContext(CartContext);
  if (context == null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};

export default useCart;
