import { useLocation, useNavigate } from "react-router-dom";

function ProductDetails({ onAddToCart }) {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found</h2>

        <button onClick={() => navigate("/")}>
          Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-details">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Products
      </button>

      <div className="product-details-content">

        <div className="product-details-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="product-details-info">

          <p className="category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <p className="details-price">
            ${product.price.toFixed(2)}
          </p>

          <p className="description">
            {product.description}
          </p>

          <p>
            ⭐ {product.rating?.rate || "N/A"}
            {" "}
            ({product.rating?.count || 0} reviews)
          </p>

          <button
            className="add-details-button"
            onClick={handleAddToCart}
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;