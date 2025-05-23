import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCart } from "../components/Cart/CartContext.jsx";
import AddToCartButton from "../components/Cart/AddBtn.jsx";

function ProductList({}) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        console.log([
          ...new Set(data.products.map((product) => product.category)),
        ]);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="bg-gray-100">
      <div
        className="container mx-auto flex flex-wrap gap-10
 justify-center py-20"
      >
        {filteredProducts.map((product) => (
          <div key={product.id} className=" hover:shadow-lg">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="transition-transform duration-300 hover:scale-110"
              />
            </Link>
            <Link to={`/product/${product.id}`}>
              <h2>{product.title}</h2>
            </Link>
            <p>{product.price} sek</p>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
