import { useCart } from "../../Context/CartContext.jsx";

export default function AddToCartButton({ product, quantity = 1 }) {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => addToCart(product, quantity)}
      className="bg-stone-300 text-white px-4 py-2 rounded-lg hover:bg-stone-400 transition max-w-xs"
    >
      Add to cart
    </button>
  );
}
