import { useLocation } from "react-router-dom";
import HeaderBanner from "../components/Header/HeaderBanner";
import HeaderTitle from "../components/Header/HeaderTitle";
import HeaderLinks from "../components/Header/HeaderLinks";
import HomeImg from "../components/Header/HomeImg";
import CartMenu from "../components/Cart/CartMenu";
import { useCallback, useState } from "react";

export default function Home({ selectedCategory, setSelectedCategory }) {
const location = useLocation();
const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);


const toggleCart = useCallback (() => {
  setIsCartMenuOpen((prev) => !prev);
}, []);

const closeMenu = useCallback(() => {
  setIsCartMenuOpen(false);
}, []);

return (
  <menu>
    <HeaderBanner onCartClick={toggleCart} />
    <CartMenu isOpen={isCartMenuOpen} closeMenu={closeMenu} />

    {/* <CartMenu
      isOpen={isCartMenuOpen}
      closeMenu={() => setIsCartMenuOpen(false)}
    /> */}
    <HeaderTitle />
    <HeaderLinks
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
    <HomeImg location={location} />
  </menu>
);
}


// const handleCartClick = () => {
//     setIsCartMenuOpen((prev) => !prev);
//   };

//   return (
//     <menu>
//       <HeaderBanner onCartClick={handleCartClick} />
//     <CartMenu isOpen={isCartMenuOpen}
//     closeMenu={() => setIsCartMenuOpen(false)}/>
//       <HeaderTitle />
//       <HeaderLinks
//         selectedCategory={selectedCategory}
//         setSelectedCategory={setSelectedCategory}
//       />
//       <HomeImg location={location} />
//     </menu>
//   );
// }
