import CartItem from "../../components/Shared/CartItems.jsx";

export default function CartContent({
  cart,
  totalPrice,
  updateQuantity,
  removeItem,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:w-[45%] w-full">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-4">
        Cart
      </h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}
          <h2 className="text-xl font-semibold">Total: {totalPrice} SEK</h2>
        </div>
      )}
    </div>
  );
}
