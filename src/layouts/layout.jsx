import React from "react";
import { Outlet, Link } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <header>
        <nav style={{ padding: "10px",display:"flex", gridGap: "12px", background: "#eee" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/theme">Theme</Link>
          <Link to="/FFI">FFI</Link>
        </nav>
      </header>
      {/* Outlet renders the content of the current matching child route */}
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>

      <footer>
        <p>© 2025 My React App</p>
      </footer>
    </div>
  );
}

export default RootLayout;
