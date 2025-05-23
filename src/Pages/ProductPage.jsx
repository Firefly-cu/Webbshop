import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AddToCartButton from "../components/Cart/AddBtn";

export default function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="flex items-center md:items-start gap-8 bg-gray-100 ">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full md:w-1/2 max-w-md object-cover ml-40 p-10"
      />

      <div className=" flex flex-col gap-12 md:w-1/3 ml-20 m-20 p80">
        <h1 className="text-3xl font-bold text-stone-600">{product.title}</h1>
        <p className="text-stone-500">{product.description}</p>
        <p className="text-stone-500">{product.price} kr</p>

        {/* Välj antal produkter  */}
        <div className="flex items-center gap-4">
          <label htmlFor="quantity" className="text-stone-500">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 rounded"
          />
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
