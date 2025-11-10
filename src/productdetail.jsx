import { useParams, useNavigate } from "react-router-dom";
import products from "./data/products.json";
import { CartContext } from "./CartContext.jsx";
import { useContext } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  // If invalid id or product not found
  if (!product) {
    return (
      <div style={{ padding: 20 }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#eee",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ⬅ Back
        </button>
        <h2>Product not found.</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          background: "#eee",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ⬅ Back
      </button>

      <img
        src={product.image}
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "10px",
          display: "block",
          marginBottom: "20px",
        }}
      />

      <h2 style={{ fontSize: "24px" }}>{product.name}</h2>
      <h3 style={{ fontSize: "22px", color: "#444" }}>₹{product.price}</h3>

      <button
        onClick={() => {
  addToCart(product);
  alert("Item added to cart!");
}}

        style={{
          marginTop: "20px",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          background: "orange",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          maxWidth: "300px",
        }}
      >
        Add to Cart
      </button>

      <button
        onClick={() => {
          const message = `Hello! I want to order:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nProduct ID: ${product.id}`;
          const phone = "918532090000";
          window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
        }}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          background: "green",
          color: "white",
          fontSize: "18px",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          maxWidth: "300px",
        }}
      >
        Order on WhatsApp
      </button>
    </div>
  );
}
