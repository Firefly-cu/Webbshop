import { memo, useRef } from "react";
import { Link } from "react-router-dom";
import CartItem from "../Shared/CartItems.jsx";
import { closeMenuRef } from "./OpenCloseCart.jsx";
import { useCart } from "../../Context/CartContext.jsx";

const CartMenu = memo(function CartMenu({ isOpen, closeMenu }) {
  const { cart, updateQuantity, removeItem } = useCart();
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  const menuRef = useRef(null);

  // Hantera klick utanför menyn
  closeMenuRef(menuRef, closeMenu);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="absolute top-16 right-4 w-90 shadow-lg bg-white p-4 border border-gray-300"
    >
      <h1 className="text-stone-400 mb-4 text-sm">Your Items</h1>
      {cart.length === 0 ? (
        <p className="text-stone-600">Cart is empty</p>
      ) : (
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          ))}

          <div className="text-right mt-4">
            <p className="text-sm">Total: {totalPrice} sek</p>

            <Link
              to="/checkout"
              className="bg-stone-300 text-white text-center px-4 py-2 rounded-lg hover:bg-stone-400 transition block mt-4"
              onClick={closeMenu}
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
});
export default CartMenu;
