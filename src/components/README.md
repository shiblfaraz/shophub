# ShopHub - E-Commerce Product Catalog

ShopHub is a responsive e-commerce product catalog built using React and Vite.

The project demonstrates modern frontend development concepts such as reusable React components, API integration, product filtering, shopping cart management, routing, local storage, responsive design, dark mode, and checkout flow.

## 🚀 Features

- Product catalog
- Products fetched from a REST API
- Search products by name
- Filter products by category
- Product details page
- Add products to cart
- Increase and decrease product quantity
- Remove products from cart
- Dynamic cart item count
- Dynamic cart total
- Cart persistence using Local Storage
- Dark mode
- Dark mode preference persistence
- Responsive mobile design
- Loading state
- Error handling
- Empty product search state
- Checkout page
- Delivery details form
- Order summary
- Order confirmation page
- Back-to-top button
- React Router navigation
- Reusable React components

## 🛠️ Technologies Used

- React
- Vite
- JavaScript
- HTML5
- CSS3
- React Router DOM
- REST API
- Fetch API
- Local Storage

## 📂 Project Structure

```text
shophub/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Cart.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Checkout.jsx
│   │   └── OrderSuccess.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

🔌 API

ShopHub uses the Fake Store API to retrieve product information.

API endpoint:

https://fakestoreapi.com/products

The application uses the Fetch API with async JavaScript to retrieve the product data.

🛒 Shopping Cart

The shopping cart supports:

Adding products
Increasing quantity
Decreasing quantity
Removing products
Calculating total price
Displaying total item count

Cart data is stored in the browser's Local Storage so that the cart remains available after refreshing the page.

🌙 Dark Mode

ShopHub includes a dark mode feature.

The selected theme is stored in Local Storage using:

shophub-dark-mode

This allows the user's theme preference to remain after refreshing the page.

🔎 Search and Filtering

Users can search products using the search bar.

Products can also be filtered using categories:

All Categories
Men's Clothing
Women's Clothing
Jewelry
Electronics
📱 Responsive Design

The application is designed to work across different screen sizes, including:

Desktop
Laptop
Tablet
Mobile

CSS media queries are used to adapt the layout for smaller screens.

🧭 Navigation

React Router is used for page navigation.

Available routes:

/                    → Home Page
/product             → Product Details
/checkout            → Checkout
/order-success       → Order Confirmation
💳 Checkout Flow

The checkout process includes:

Add products to cart
Open the cart
Proceed to checkout
Enter delivery details
Review order summary
Place the order
Display order confirmation
Clear the cart
⚙️ Installation
1. Clone or download the project

Open the project folder in VS Code.

2. Install dependencies

Run:

npm install

If PowerShell blocks npm, use:

npm.cmd install
3. Start the development server

Run:

npm run dev

Or:

npm.cmd run dev
4. Open the application

Open the local URL shown in the terminal, usually:

http://localhost:5173/
🏗️ Production Build

To create a production build:

npm run build

Or:

npm.cmd run build

The production files will be generated inside the:

dist/

folder.

🎯 Learning Objectives

This project demonstrates practical knowledge of:

React component architecture
React state management
React Hooks
Props
Event handling
Conditional rendering
Array methods
REST API integration
Fetch API
Async JavaScript
Error handling
React Router
Local Storage
Responsive CSS
CSS variables
Dark mode
E-commerce UI development
👨‍💻 Project

Project Name: ShopHub

Project Type: Full-Stack Web Development Capstone - Frontend E-Commerce Application

Built With: React + Vite

Year: 2026