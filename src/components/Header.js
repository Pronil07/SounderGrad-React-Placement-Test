import React from "react";
import "./Header.css";

function Header({ toggleTheme }) {
  return (
    <div className="header">
      <img
        className="icon"
        src="https://cdn-icons-png.flaticon.com/512/43/43860.png"
        alt=""
      />
      <h2>SlideShow App</h2>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Header;
