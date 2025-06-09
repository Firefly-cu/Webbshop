export default function ProductInfo({ title, description, price }) {
  return (
    <div className="flex flex-col gap-4 mb-10">
      <h1 className="text-xl font-bold text-stone-600">{title}</h1>
      <p className="text-stone-500">{description}</p>
      <p className="text-stone-500">Price: {price} kr</p>
    </div>
  );
}
