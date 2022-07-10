import React, { useState, useEffect, useContext } from "react";
import { commerce } from "../lib/commerce";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);
  const [productsLoader, setProductsLoader] = useState(true);
  const fetchProducts = async () => {
    const { data } = await commerce?.products?.list();
    setProducts(data);
    setProductsLoader(false);
  };
  const fetchCategories = async () => {
    const { data } = await commerce?.categories?.list();
    setCategories(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider
      value={{
        handleUpdateCartQty,
        handleRemoveFromCart,
        products,
        handleAddToCart,
        cart,
        handleEmptyCart,
        categories,
        productsLoader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
