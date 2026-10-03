import { useNavigate } from "react-router-dom";

function Checkout({ cart, cartTotal, clearCart }) {
  const navigate = useNavigate();

  // Prevent checkout when cart is empty
  if (cart.length === 0) {
    return (
      <div className="checkout-page">

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ← Back to Shop
        </button>

        <div className="empty-checkout">

          <h1>Your Cart Is Empty</h1>

          <p>
            Please add some products before
            proceeding to checkout.
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

  const handleSubmit = (e) => {
    e.preventDefault();

    clearCart();

    alert("Order placed successfully!");

    navigate("/order-success");
  };

  return (
    <div className="checkout-page">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Shop
      </button>

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* Checkout Form */}

        <div className="checkout-form">

          <h2>Delivery Details</h2>

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              required
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              required
            />

            <label>Address</label>

            <textarea
              placeholder="Enter your address"
              rows="4"
              required
            ></textarea>

            <label>City</label>

            <input
              type="text"
              placeholder="Enter your city"
              required
            />

            <label>PIN Code</label>

            <input
              type="text"
              placeholder="Enter PIN code"
              required
            />

            <button
              type="submit"
              className="place-order-button"
            >
              Place Order
            </button>

          </form>

        </div>

        {/* Order Summary */}

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div
              className="summary-item"
              key={item.id}
            >

              <span>
                {item.title} × {item.quantity}
              </span>

              <span>
                $
                {(
                  item.price *
                  item.quantity
                ).toFixed(2)}
              </span>

            </div>

          ))}

          <hr />

          <h2>
            Total: ${cartTotal.toFixed(2)}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default Checkout;