import { FaTrash } from "react-icons/fa"; // För papperskorgsikonen

import { useCart } from "./CartContext.jsx";

export default function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-2">
      {/* Produktbild och namn */}
      <div className="flex items-center gap-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-16 h-16 object-cover"
        />
        <div>
          <p className="text-sm">{item.title}</p>
          <p>{item.price} sek</p>
        </div>
      </div>

      {/* Antal och kontroller */}
      <div className="flex items-center gap-2">
       

        <button
          onClick={() => decreaseQuantity(item.id)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <p>{item.quantity}</p>

        <button
          onClick={() => increaseQuantity(item.id)}
          className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={() => removeItem(item.id)}
          className="text-stone-400 hover:text-stone-500"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

