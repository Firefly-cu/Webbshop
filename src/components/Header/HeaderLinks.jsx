import { Link, useLocation } from "react-router-dom";
import Burger from "./Burger";
import { useState } from "react";

export default function MenuLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const categories = [
    { name: "Home", path: "/", value: null },
    { name: "Beauty", path: "/category/beauty", value: "beauty" },
    { name: "Fragrances", path: "/category/fragrances", value: "fragrances" },
    { name: "Furniture", path: "/category/furniture", value: "furniture" },
    { name: "Groceries", path: "/category/groceries", value: "groceries" },
  ];

  function MenuLink(isActive) {
    return isActive
      ? "text-stone-600 font-bold border-stone-600"
      : "text-stone-600 hover:text-stone-400";
  }

  return (
    <main>
      <div className="w-full mt-10 bg-stone-300 min-h-[40px] flex justify-center items-center">
        <div>
          <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } md:hidden flex flex-col justify-center items-center gap-4 m-5`}
          >
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.path}
                onClick={() => {
                  setSelectedCategory(category.value);
                  setIsOpen(false); //Stänger efter klick
                }}
                className={`${MenuLink(
                  location.pathname === category.path
                )} my-2`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Desktopvy */}
        <div className="hidden md:flex flex-col md:flex-row justify-center items-center m-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              onClick={() => setSelectedCategory(category.value)}
              className={`${MenuLink(
                location.pathname === category.path
              )} mx-2`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
