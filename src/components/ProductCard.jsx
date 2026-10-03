import { useNavigate } from "react-router-dom";

function ProductCard({ product, onAddToCart }) {
  const navigate = useNavigate();

  const viewProduct = () => {
    navigate("/product", {
      state: {
        product: product,
      },
    });
  };

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
        onClick={viewProduct}
      />

      <h3>{product.title}</h3>

      <p className="category">
        {product.category}
      </p>

      <p className="price">
        ${product.price.toFixed(2)}
      </p>

      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>

      <button
        className="view-button"
        onClick={viewProduct}
      >
        View Details
      </button>

    </div>
  );
}

export default ProductCard;