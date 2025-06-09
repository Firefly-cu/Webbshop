import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./Pages/ProductList/Productlist.jsx";
import ProductPage from "./Pages/ProductPage/ProductPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import Checkout from "./Pages/Checkoutpage/Checkout.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import Footer from "./components/Shared/Footer.jsx";

function App() {
  const [selectedCategory] = useState(null);

  return (
    <div className="min-w-320px min-h-screen flex flex-col">
      <CartProvider>
        <Home />
        <Routes>
          <Route
            path="/"
            element={<ProductList selectedCategory={selectedCategory} />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<ProductList />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
