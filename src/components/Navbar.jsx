import React from "react";

function Navbar({ onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo" onClick={() => onNavigate("home")}>
          SkillSwap
        </h1>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#learn-more">Learn More</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Auth Buttons using onNavigate */}
        <div className="auth-buttons">
          <button className="btn login-btn" onClick={() => onNavigate("login")}>
            Login
          </button>
          <button className="btn signup-btn" onClick={() => onNavigate("signup")}>
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

