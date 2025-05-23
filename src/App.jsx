import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./Pages/Productlist";
import ProductPage from "./Pages/ProductPage";
import Home from "./Pages/Home.jsx";
import Checkout from "./Pages/Checkout";
import { CartProvider } from "./components/Cart/CartContext.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CartProvider>
      <Home />
      {/* TheamProvider
      /Navigation */}
      <Routes>
        <Route
          path="/"
          element={<ProductList selectedCategory={selectedCategory} />}
        />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/category/:category" element={<ProductList />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
