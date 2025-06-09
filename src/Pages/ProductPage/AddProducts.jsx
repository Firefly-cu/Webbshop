import AddToCartButton from "../../components/Shared/AddBtn";

export default function AddProducts({ quantity, setQuantity, product }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-start gap-4 mb-20">
      <label htmlFor="quantity" className="text-stone-500">
        Quantity:
      </label>
      <input
        id="quantity"
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-16 px-2 py-1 border border-gray-300 rounded"
      />
      <AddToCartButton product={product} quantity={quantity} />
    </div>
  );
}
