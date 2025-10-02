import React from "react";

function SingUpButton({ setShowLogin }) {
  return (
    <button
      onClick={() => setShowLogin(true)}
      className="std-button sign-up-btn"
      aria-label="Sign up"
    >
      Sign up
    </button>
  );
}

export default SingUpButton;
