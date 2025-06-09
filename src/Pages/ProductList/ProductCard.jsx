import { Link } from "react-router-dom";
import AddToCartButton from "../../components/Shared/AddBtn.jsx";

export default function ProductCard({ product }) {
  return (
    <div className="hover:shadow-lg p-6 rounded-lg flex flex-col items-center">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="transition-transform duration-300 hover:scale-110 w-50"
        />
      </Link>
      <Link to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
      </Link>
      <p>{product.price} sek</p>
      <AddToCartButton product={product} />
    </div>
  );
}
