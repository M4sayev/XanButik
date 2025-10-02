import React from "react";

function FormFooter({ currentState, setCurrentState }) {
  return (
    <>
      <button type="submit" className="std-button">
        {currentState === "Sign Up" ? "Create account" : "Login"}
      </button>
      <p className="suggestion-text">
        {currentState === "Login" ? (
          <>
            Create a new account?{" "}
            <button
              type="button"
              className="icon-btn link-button"
              onClick={() => setCurrentState("Sign Up")}
            >
              Click here
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              className="icon-btn link-button"
              onClick={() => setCurrentState("Login")}
            >
              Login here
            </button>
          </>
        )}
      </p>
    </>
  );
}

export default FormFooter;
