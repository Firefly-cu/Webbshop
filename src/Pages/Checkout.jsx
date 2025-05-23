import { useCart } from "../components/Cart/CartContext.jsx";

export default function CheckoutPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>
        <p className="m-8">
        Checkout</p>
        </h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>
                {item.price} SEK
              </p>
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <h2>Total: {totalPrice} SEK</h2>
        </div>
      )}
    </div>
  );
}
