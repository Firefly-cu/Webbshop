import { createContext, useContext, useState, useEffect } from "react";

// Skapa Context
const CartContext = createContext();

// Custom hook för att använda CartContext
export const useCart = () => useContext(CartContext);

// Provider-komponent
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };


  const increaseQuantity = (id) => {
    updateQuantity(id, cart.find((item) => item.id === id).quantity + 1);
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    } else {
      removeItem(id); // Ta bort produkten om kvantiteten blir 0
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, removeItem, increaseQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};