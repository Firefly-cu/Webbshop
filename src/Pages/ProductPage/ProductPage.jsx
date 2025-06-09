import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddToCartButton from "../../components/Shared/AddBtn";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
import AddProducts from "./AddProducts.jsx";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => {});
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <main className="flex-grow">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start">
        <ProductImage thumbnail={product.thumbnail} title={product.title} />

        <div className="flex flex-col gap-6 md:w-[45%] mt-20 md:mx-20 mx-10 sm:mx-10">
          <ProductInfo
            title={product.title}
            description={product.description}
            price={product.price}
          />

          <AddProducts
            quantity={quantity}
            setQuantity={setQuantity}
            product={product}
          />
        </div>
      </div>
    </main>
  );
}
