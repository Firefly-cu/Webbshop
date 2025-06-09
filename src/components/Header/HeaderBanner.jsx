import { useCart } from "../../Context/CartContext";

export default function HeaderBanner({ onCartClick }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full bg-stone-400 min-h-[40px] flex items-center justify-between">
      <p className="text-white ml-11">Free delivery on orders over 500kr</p>
      <div className="flex justify end">
        <button
          className="cart-icon text-white hover:text-stone-100 font-bold mr-11"
          onClick={onCartClick}
        >
          🛒 Cart ({totalItems})
        </button>
      </div>
    </div>
  );
}
