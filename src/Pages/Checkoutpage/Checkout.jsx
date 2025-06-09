import { useCart } from "../../Context/CartContext.jsx";
import { useState } from "react";
import CartContent from "./CartContent.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

export default function CheckoutPage() {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();
  const totalPrice = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  //Formulärvalidering
  const [formErrors, setFormErrors] = useState("");
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    // Kontrollera om några fält är tomma
    const emptyFields = Array.from(formData.entries()).filter(
      ([, value]) => !value.trim()
    );
    if (cart.length === 0) {
      setFormErrors("Your cart is empty, lets add some stuff!");
      return;
    }

    if (emptyFields.length > 0) {
      setFormErrors("Oops, you have some empty fields");
      return;
    }
    setFormErrors(""); // Rensa felmeddelanden
    // e.target.reset();
    clearCart();
    setOrderSubmitted(true);

    setTimeout(() => {
      setOrderSubmitted(false);
    }, 5000); //Tar bort bekräftelse efter 5 sekunder
  };

  return (
    <main>
      <div className="flex flex-col justify-start text-stone-500 ">
        <h1 className="text-2xl font-bold m-8 text-stone-500">Checkout</h1>
        <div className="flex flex-col md:flex-row items-start justify-center gap-8 m-8 px-8 max-w-[1200px] mb-30 w-full mx-auto">
          <CartContent
            cart={cart}
            totalPrice={totalPrice}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
          <CheckoutForm
            formErrors={formErrors}
            onSubmit={handleFormSubmit}
            orderSubmitted={orderSubmitted}
          />
        </div>
      </div>
    </main>
  );
}
