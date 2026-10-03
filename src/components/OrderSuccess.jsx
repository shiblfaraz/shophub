import { useNavigate } from "react-router-dom";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="order-success">

      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Confirmed!</h1>

        <p>
          Thank you for your purchase.
        </p>

        <p>
          Your order has been placed successfully.
        </p>

        <button
          className="continue-shopping-button"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>

      </div>

    </div>
  );
}

export default OrderSuccess;