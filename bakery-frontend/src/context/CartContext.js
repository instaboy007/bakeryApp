"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect, useContext } from "react";
import LoadingContext from "./LoadingContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {isLoading, setIsLoading} = useContext(LoadingContext);

  const router = useRouter;

  const setCartToState = () => {
    setIsLoading(true)
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
    setIsLoading(false)
  };

  useEffect(() => {
    setCartToState();
  }, []); // This effect runs only once on component mount

  const isItemInCart = (itemName) => {
    const isItemExist = cart?.cartItems?.find(
        (i) => i.product.name === itemName
    );

    return isItemExist ? true: false
  }

  const addItemToCart = async ({
    product,
    quantity = 1,
  }) => {
    const item = {
      product,
      quantity,
    };

    const isItemExist = cart?.cartItems?.find(
      (i) => i.product.name === item.product.name
    );

    let newCartItems;

    if (isItemExist) {
      newCartItems = cart?.cartItems?.map((i) =>
        i.product.name === isItemExist.product.name ? item : i
      );
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState(); // Move this outside of useEffect to prevent multiple calls
  };

  const deleteItemFromCart = (id) => {
    setIsLoading(true)
    const newCartItems = cart?.cartItems?.filter((i) => i.product.name !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState(); 
    setIsLoading(true)
  };

  const incrementItemQuantity = (itemName) => {
    const updatedCart = cart.cartItems.map((item) => {
      if (item.product.name === itemName) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
  
    localStorage.setItem("cart", JSON.stringify({ cartItems: updatedCart }));
    setCartToState();
  };
  
  const decrementItemQuantity = (itemName) => {
    const updatedCart = cart.cartItems.map((item) => {
      if (item.product.name === itemName) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) };
      }
      return item;
    });
  
    localStorage.setItem("cart", JSON.stringify({ cartItems: updatedCart }));
    setCartToState();
  };

  const clearCart = () => {
    setIsLoading(true)
    localStorage.removeItem("cart"); // Remove the cart data from local storage
    setCart([]);
    setIsLoading(false)
     // Set the cart state to an empty array
  };

  const  itemTotal = cart?.cartItems?.reduce((acc, item) => acc + item.quantity*item.product.price, 0);

  const deliveryFee = (40).toFixed(2);

  const platformFee = (5).toFixed(2);

  const packagingFee = (35).toFixed(2);

  const GST = (itemTotal*0.15).toFixed(2);

  const GSTonPlatformFee = (platformFee*0.18).toFixed(2);

  const grandTotal = Number(itemTotal) + Number(deliveryFee) + Number(platformFee) + Number(packagingFee) + Number(GST) + Number(GSTonPlatformFee);
  

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
        isItemInCart,
        incrementItemQuantity,
        decrementItemQuantity,
        clearCart,
        grandTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
