export default function CheckoutForm({ formErrors, onSubmit, orderSubmitted }) {
  const formInput = (placeholder, name, type = "text") => (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData);
    e.target.reset(); // Rensa formuläret
  };

  return (
    <form
      className="flex flex-col gap-12 w-full md:w-1/2 "
      onSubmit={handleSubmit}
    >
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Address Information</h2>
        <div className="flex flex-col gap-4">
          {formInput("Full Name", "fullName")}
          {formInput("Address", "address")}
          {formInput("Postal Code", "postalCode")}
          {formInput("City", "city")}
          {formInput("Country", "country")}
          {formInput("Phone Number", "phone", "tel")}
          {formInput("Email", "email", "email")}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <div className="flex flex-col gap-4">
          {formInput("Card Number", "cardNumber", "text")}
          {formInput("Cardholder Name", "cardholderName")}
          {formInput("Expiration Date", "expirationDate", "text")}
          {formInput("CVV", "cvv", "password")}
        </div>
      </div>

      {formErrors && <p className="text-red-500 text-sm mt-2">{formErrors}</p>}

      {orderSubmitted && (
        <p className="text-center text-green-700 font-semibold mt-4">
          Your order is on the way!
        </p>
      )}

      <button
        type="submit"
        className="bg-stone-300 text-white py-2 rounded-lg font-bold hover:bg-stone-400 transition w-full"
      >
        Submit
      </button>
    </form>
  );
}
