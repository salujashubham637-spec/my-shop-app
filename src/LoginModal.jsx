import { useState } from "react";

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [mobile, setMobile] = useState("");

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          width: "350px",
          background: "white",
          borderRadius: "12px",
          padding: "25px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#C2185B", marginBottom: "20px" }}>
          Login / Sign Up
        </h2>

        <input
          type="text"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          maxLength={10}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "18px",
          }}
        />

        <button
          onClick={() => {
            if (mobile.length === 10) {
              onLogin(mobile);
              onClose();
            } else {
              alert("Enter valid 10 digit number");
            }
          }}
          style={{
            marginTop: "20px",
            width: "100%",
            background: "#C2185B",
            color: "white",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Continue
        </button>

        <button
          onClick={onClose}
          style={{
            marginTop: "15px",
            width: "100%",
            background: "#ddd",
            color: "#333",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
