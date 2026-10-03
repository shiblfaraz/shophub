import { useEffect, useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";

import { getProducts } from "./services/api";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("shophub-dark-mode");
  return savedTheme === "true";
});

useEffect(() => {
  localStorage.setItem(
    "shophub-dark-mode",
    darkMode
  );
}, [darkMode]);
  // -----------------------------
  // Product State
  // -----------------------------

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // -----------------------------
  // Search & Category State
  // -----------------------------

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");


  // -----------------------------
  // Cart State
  // -----------------------------

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("shophub-cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];

  });


  // -----------------------------
  // Cart Display State
  // -----------------------------

  const [showCart, setShowCart] = useState(false);


  // -----------------------------
  // Fetch Products
  // -----------------------------

  useEffect(() => {

    setLoading(true);

    setError("");

    getProducts()

      .then((data) => {

        setProducts(data);

      })

      .catch((error) => {

        console.error(
          "Error loading products:",
          error
        );

        setError(
          "Unable to load products. Please try again."
        );

      })

      .finally(() => {

        setLoading(false);

      });

  }, []);


  // -----------------------------
  // Save Cart to Local Storage
  // -----------------------------

  useEffect(() => {

    localStorage.setItem(
      "shophub-cart",
      JSON.stringify(cart)
    );

  }, [cart]);


  // -----------------------------
  // Add Product to Cart
  // -----------------------------

  const addToCart = (product) => {

    setCart((currentCart) => {

      const existingProduct =
        currentCart.find(
          (item) => item.id === product.id
        );

      if (existingProduct) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];

    });

  };


  // -----------------------------
  // Remove Product
  // -----------------------------

  const removeFromCart = (productId) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== productId
      )
    );

  };


  // -----------------------------
  // Increase Quantity
  // -----------------------------

  const increaseQuantity = (productId) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );

  };


  // -----------------------------
  // Decrease Quantity
  // -----------------------------

  const decreaseQuantity = (productId) => {

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );

  };


  // -----------------------------
  // Filter Products
  // -----------------------------

  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );

    });


  // -----------------------------
  // Cart Count
  // -----------------------------

  const cartCount =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  // -----------------------------
  // Cart Total
  // -----------------------------

  const cartTotal =
    cart.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );


  // -----------------------------
  // App UI
  // -----------------------------
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
  return (
  <div className={darkMode ? "dark-mode" : ""}>
      <Routes>

        {/* =========================
            HOME PAGE
        ========================== */}

        <Route
          path="/"
          element={
            <>

              <Navbar
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCategory}
                cartCount={cartCount}
                onCartClick={() =>
                  setShowCart(true)
                }
                darkMode={darkMode}
setDarkMode={setDarkMode}
              />


              {/* Hero Section */}

              <section className="hero">

                <h1>
                  Welcome to ShopHub
                </h1>

                <p>
                  Find the products
                  you love.
                </p>

              </section>


              {/* Loading / Error / Products */}

              {loading ? (

                <div className="loading-message">

                  <h2>
                    ⏳ Loading products...
                  </h2>

                </div>

              ) : error ? (

                <div className="error-message">

                  <h2>
                    ❌ {error}
                  </h2>

                </div>

              ) : (

                <ProductList
                  products={
                    filteredProducts
                  }
                  onAddToCart={
                    addToCart
                  }
                />

              )}


              {/* Cart */}

              <Cart
                cart={cart}
                showCart={showCart}
                setShowCart={setShowCart}
                increaseQuantity={
                  increaseQuantity
                }
                decreaseQuantity={
                  decreaseQuantity
                }
                removeFromCart={
                  removeFromCart
                }
                cartTotal={cartTotal}
              />

            </>
          }
        />


        {/* =========================
            PRODUCT DETAILS
        ========================== */}

        <Route
          path="/product"
          element={
            <ProductDetails
              onAddToCart={
                addToCart
              }
            />
          }
        />


        {/* =========================
            CHECKOUT
        ========================== */}

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              cartTotal={cartTotal}
              clearCart={() =>
                setCart([])
              }
            />
          }
        />


        {/* =========================
            ORDER SUCCESS
        ========================== */}

        <Route
          path="/order-success"
          element={
            <OrderSuccess />
          }
        />

      </Routes>


      {/* =========================
          FOOTER
      ========================== */}

      <footer className="site-footer">

  <button
    className="back-to-top"
    onClick={scrollToTop}
  >
    ↑ Back to Top
  </button>

  <h3>ShopHub</h3>

  <p>
    © 2026 ShopHub. All rights reserved.
  </p>

  <p>
    Built with React, Vite and Fake Store API.
  </p>

</footer>

    </div>

  );

}

export default App;