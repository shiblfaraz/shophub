function Navbar({
  search,
  setSearch,
  category,
  setCategory,
  cartCount,
  onCartClick,
  darkMode,
  setDarkMode,
}) {
  return (
    <header className="navbar">

      <div className="navbar-brand">
        <h1>ShopHub</h1>
      </div>

      <div className="navbar-controls">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="category-select"
        >
          <option value="all">
            All Categories
          </option>

          <option value="men's clothing">
            Men's Clothing
          </option>

          <option value="women's clothing">
            Women's Clothing
          </option>

          <option value="jewelery">
            Jewelry
          </option>

          <option value="electronics">
            Electronics
          </option>
        </select>

        <button
          className="theme-button"
          onClick={() =>
            setDarkMode(!darkMode)
          }
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="cart-button"
          onClick={onCartClick}
        >
          🛒 Cart
          <span className="cart-badge">
            {cartCount}
          </span>
        </button>

      </div>

    </header>
  );
}

export default Navbar;