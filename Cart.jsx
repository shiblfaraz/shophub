import { useNavigate } from "react-router-dom";
function Cart({
  cart,
  showCart,
  setShowCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  cartTotal,
}) {
    const navigate = useNavigate();
  if (!showCart) {
    return null;
  }

  return (
    <div className="cart-panel">

      <div className="cart-header">

        <h2>Your Cart</h2>

        <button
          className="close-cart"
          onClick={() => setShowCart(false)}
        >
          ✕
        </button>

      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cart-details">

                <h3>{item.title}</h3>

                <p>
                  ${item.price.toFixed(2)}
                </p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          <div className="cart-total">

  <h2>
    Total: ${cartTotal.toFixed(2)}
  </h2>

  <button
    className="continue-shopping-button"
    onClick={() => setShowCart(false)}
  >
    ← Continue Shopping
  </button>

  {cart.length > 0 && (
  <button
    className="checkout-button"
    onClick={() => {
      setShowCart(false);
      navigate("/checkout");
    }}
  >
    Proceed to Checkout →
  </button>
)}

</div>
        </>
      )}

    </div>
  );
}

export default Cart;