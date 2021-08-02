import React, { useContext, useState, createContext, useEffect } from "react";
import { commerce } from "./lib/commerce";

const CartContext = createContext();

//Custom Hook
export function UseCart() {
  return useContext(CartContext); //CartContext.Cosumer
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleEmptyCart,
        handleRemoveFromCart,
        handleUpdateCartQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
