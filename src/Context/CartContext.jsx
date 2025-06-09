import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/LocalStorage";

// Skapa Context
const CartContext = createContext();

// skapa custom hook för att använda CartContext
export const useCart = () => useContext(CartContext);

// Provider-komponent
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: quantity }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
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
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
