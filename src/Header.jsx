import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import LoginModal from "./LoginModal";

export default function Header({ cartCount, search, setSearch }) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <>
      <div
        style={{
          width: "100%",
          padding: "15px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#fff",
          borderBottom: "1px solid #eee",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        {/* LOGO */}
        <h1 style={{ fontSize: "40px", color: "#C2185B", margin: 0 }}>
          Hair Accessories and Gift Gallery
        </h1>

        {/* SEARCH BAR INSIDE HEADER */}
        <div
          style={{
            flexGrow: 1,
            maxWidth: "600px",
            marginLeft: "40px",
            marginRight: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              border: "1px solid #ccc",
              padding: "10px 15px",
              borderRadius: "25px",
            }}
          >
            <FiSearch size={20} color="#555" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                paddingLeft: "10px",
                fontSize: "18px",
              }}
            />
          </div>
        </div>

        {/* LOGIN BUTTON */}
        <div
          onClick={() => setLoginOpen(true)}
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <FiUser size={26} color="#333" />
          <span style={{ marginLeft: "8px", fontSize: "18px", color: "#333" }}>
            {user ? `Hi, ${user}` : "Login"}
          </span>
        </div>

        {/* CART */}
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div
            style={{
              marginLeft: "25px",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <FiShoppingCart size={26} color="#333" />
            <span
              style={{
                fontSize: "18px",
                marginLeft: "5px",
                color: "#333",
              }}
            >
              ({cartCount})
            </span>
          </div>
        </Link>
      </div>

      {/* LOGIN POPUP */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={(mobile) => setUser(mobile)}
      />
    </>
  );
}
