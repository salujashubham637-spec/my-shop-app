import { Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import products from "./data/products.json";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import { CartContext } from "./CartContext";
import Header from "./Header";

export default function App() {
  const { cart, addToCart } = useContext(CartContext);
  const [search, setSearch] = useState("");

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Header cartCount={cart.length} search={search} setSearch={setSearch} />

      <Routes>
        {/* HOME PAGE */}
        {/* HOME PAGE */}
<Route
  path="/"
  element={
    <div
	  className="product-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: "20px",
        padding: "20px",
        justifyContent: "center",
      }}
    >
      {products
        .filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((item) => (
          <div
		    className="product-card"
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              overflow: "hidden",
              paddingBottom: "10px",

              // 👉 FIX: prevent stretching
              maxWidth: "300px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            {/* PRODUCT IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "260px",       // 👉 FIX: perfect height
                objectFit: "cover",    // 👉 keeps images neat
              }}
            />

            {/* PRODUCT NAME */}
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginTop: "10px",
                paddingLeft: "10px",
                color: "#444",
              }}
            >
              {item.name}
            </h3>

            {/* PRICE */}
            <p
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "#4CAF50",
                paddingLeft: "10px",
                marginBottom: "10px",
              }}
            >
              ₹{item.price}
            </p>

            {/* ADD TO CART BUTTON */}
            <button
              onClick={() => addToCart(item)}
              style={{
                width: "90%",
                margin: "0 auto",
                display: "block",
                padding: "12px 20px",
                background: "green",
                color: "white",
                fontSize: "18px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  }
/>


        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
