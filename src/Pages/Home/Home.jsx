import { useLocation } from "react-router-dom";
import HeaderBanner from "../../components/Header/HeaderBanner";
import HeaderTitle from "../../components/Header/HeaderTitle";
import HeaderLinks from "../../components/Header/HeaderLinks";
import HomeImg from "./HomeImg";
import CartMenu from "../../components/Cart/CartMenu";
import { useCallback, useState } from "react";

export default function Home({ selectedCategory, setSelectedCategory }) {
  const location = useLocation();
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const toggleCart = useCallback(() => {
    setIsCartMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsCartMenuOpen(false);
  }, []);

  return (
    <div>
      <header>
        <HeaderBanner onCartClick={toggleCart} />
        <CartMenu isOpen={isCartMenuOpen} closeMenu={closeMenu} />
        <HeaderTitle />
        <HeaderLinks
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </header>
      <main>
        <HomeImg location={location} />
      </main>
    </div>
  );
}
