import { FaTrash } from "react-icons/fa"; // För papperskorgsikonen
import { useCart } from "../../Context/CartContext.jsx";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-2 text-sm">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-12 h-12 object-cover"
      />

      {/* Antal och kontroller */}
      <div className="flex items-center flex-col gap-2">
        <p className="text-s mx-4 max-w-30 ">{item.title}</p>
        <div className="flex items-center gap-1 border border-gray-300 rounded px-1 py-0.5">
          <button
            onClick={() => decreaseQuantity(item.id)}
            className="px-1 py-0.5"
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-1 py-0.5"
          >
            +
          </button>
          <FaTrash
            onClick={() => removeItem(item.id)}
            className="w-4 h-3 text-gray-400 cursor-pointer ml-1"
          />
        </div>
      </div>
      <div className="flex justify-row">
        <p>{item.price} sek</p>
      </div>
    </div>
  );
}
