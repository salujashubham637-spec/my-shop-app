import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            {/* ⭐ IMAGE LEFT */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />

            {/* ⭐ DETAILS RIGHT */}
            <div style={{ flexGrow: 1 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#222",
                  marginBottom: "6px",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "#444",
                }}
              >
                ₹{item.price}
              </p>
            </div>

            {/* ⭐ REMOVE BUTTON */}
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                padding: "8px 12px",
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      {/* ⭐ TOTAL PRICE */}
      {cart.length > 0 && (
        <h2 style={{ marginTop: "20px" }}>Total: ₹{total}</h2>
      )}

      {/* ⭐ CONTINUE SHOPPING */}
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          padding: "12px 20px",
          background: "#222",
          borderRadius: "10px",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "18px",
          marginTop: "20px",
          marginRight: "20px",
        }}
      >
        ⬅ Continue Shopping
      </button>

      {/* ⭐ WHATSAPP FULL CART ORDER BUTTON */}
      {cart.length > 0 && (
        <button
          onClick={() => {
            const phone = "918532090000"; // Your WhatsApp number

            const messageLines = cart.map(
              (item) => `• ${item.name} – ₹${item.price}`
            );

            const message = `Hello! I want to order:\n\n${messageLines.join(
              "\n"
            )}\n\nTotal Amount: ₹${total}`;

            window.open(
              `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
            );
          }}
          style={{
            padding: "12px 20px",
            background: "green",
            borderRadius: "10px",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            marginTop: "20px",
          }}
        >
          🟢 Order Cart on WhatsApp
        </button>
      )}
    </div>
  );
}
