import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { IoClose } from "react-icons/io5";
import { BiShow, BiHide } from "react-icons/bi";
import { StoreContext } from "../../context/StoreContext";

function LoginPopup({ innerRef }) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Sing Up");
  const { setShowLogin } = useContext(StoreContext);

  return (
    <div className="login-popup">
      <form ref={innerRef} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <IoClose
            className="cross-icon"
            onClick={() => setShowLogin(false)}
            alt="cross icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input-password"
              required
            />
            {showPassword ? (
              <BiShow
                className="show-hide-icon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <BiHide
                className="show-hide-icon"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input id="agreeWithConds" type="checkbox" required />
          <label htmlFor="agreeWithConds">By continuing, I agree to the terms of use & privacy policy</label>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account? <span onClick={() => setCurrentState("Sing Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
