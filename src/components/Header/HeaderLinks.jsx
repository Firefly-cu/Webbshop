import { Link } from "react-router-dom";

export default function MenuLinks ({ selectedCategory, setSelectedCategory}) {

    const categories = [
        {name: 'Home', path: "/", value: null },
        {name: 'Beauty', path: "/category/beauty", value: "beauty" },
        {name: 'Fragrances', path: "/category/fragrances", value: 'fragrances' },
        {name: 'Furniture', path: "/category/furniture", value: 'furniture' },
        {name: 'Groceries', path: "/category/groceries", value: 'groceries' }

    ]
    return (
        <div className="w-full mt-10 bg-stone-300 min-h-[40px] flex justify-center items-center gap-6">
            {categories.map((category) => (
                <Link
                key={category.name}
                to={category.path}
                onClick={() =>
                    setSelectedCategory.value}
                    className={MenuLink(selectedCategory === category.value)}
                    >               
                    {category.name}
                </Link>
            ))}
            </div>
    );
}


    function MenuLink(isActive) {
        return isActive
          ? "text-stone-600 gap-6 font-bold"
          : "text-stone-600 hover:text-stone-400";
      }
      
