import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "./data/products.json";
import { CartContext } from "./CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Product find by ID  
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product Not Found</h2>;
  }

  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "40px auto" }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />

      <h2>{product.name}</h2>
      <p style={{ fontSize: "18px", margin: "10px 0" }}>{product.desc}</p>
      <h3 style={{ color: "#ff3366" }}>₹{product.price}</h3>

      <button
        onClick={() => addToCart(product)}
        style={{
          marginTop: "20px",
          padding: "12px 25px",
          background: "#ff3366",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
