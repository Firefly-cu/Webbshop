import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../Context/CartContext.jsx";
import ProductCard from "./ProductCard.jsx";

export default function ProductList({}) {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const {} = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {});
  }, []);

  //Filtrerar efter kategori(om kategori finns)
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <main>
      <div className=" flex flex-wrap gap-5 justify-center py-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
