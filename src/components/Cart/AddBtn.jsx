import { useCart } from "./CartContext.jsx";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-stone-300 text-white px-4 py-2 rounded-lg hover:bg-stone-400 transition max-w-xs"
    >
      Add to cart
    </button>
  );
}
