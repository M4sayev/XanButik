import React, { useContext, useRef, useState } from "react";
import "./LoginPopup.css";
import { IoClose } from "react-icons/io5";
import { BiShow, BiHide } from "react-icons/bi";
import { StoreContext } from "../../context/StoreContext";
import { useFocusTrap } from "../../hooks/useTrapFocus";

function LoginPopup({ formRef }) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Sign Up");
  const popupRef = useRef(null);
  const firstPopupElRef = useRef(null);
  const { setShowLogin } = useContext(StoreContext);

  const [ form, setForm ] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  })
  
  function handleOnSubmit(e) {
    e.preventDefault();

    setForm({
      name: "",
      email: "",
      password: "",
      agreeToTerms: false,
    });

    setShowLogin(false);
  }

  function handleOnChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  useFocusTrap(popupRef, true, firstPopupElRef)

  return (
    <div 
      className="login-popup"
      aria-modal="true"
      aria-labelledby="loginPopupTitle"
      ref={popupRef}
    >
      <form 
        onSubmit={handleOnSubmit} 
        ref={formRef} 
        className="login-popup-container"
        aria-describedby="loginPopupDesc"
      >
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <button 
            className="icon-btn cross-icon"
            type="button"
            onClick={() => setShowLogin(false)}
            aria-label="Close login popup"
            ref={firstPopupElRef}
          >
            <IoClose className="cross"/>
          </button>
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <>
              <label 
                htmlFor="name" 
                className="visually-hidden"
              >Name</label>
              <input  
                type="text" 
                id="name"
                name="name"
                placeholder="Your name" 
                required 
                value={form.name} 
                onChange={handleOnChange}
                autoFocus
              />
            </>
          )}
          <>
            <label 
              htmlFor="email" 
              className="visually-hidden"
            >Email</label>
            <input 
              type="email" 
              name="email"
              id="email"
              placeholder="Your email" 
              required 
              value={form.email} 
              onChange={handleOnChange}
              autoFocus={currentState === "Login"}
            />
          </>
          <div className="password-input-container">
            <label 
              htmlFor="password" 
              className="visually-hidden"
            >Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              className="input-password"
              required
              value={form.password}
              onChange={handleOnChange}
            />
            <button
              type="button"
              className="icon-btn show-hide-icon"
              onClick={() => setShowPassword(prev => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <BiShow/> : <BiHide/>}
            </button>
          </div>
        </div>
        {currentState === "Sign Up" && (
          <div className="login-popup-condition">
            <input 
              id="agreeWithConds"
              type="checkbox"
              name="agreeToTerms"
              checked={form.agreeToTerms}
              onChange={(e) => setForm({ ...form, agreeToTerms: e.target.checked })}
              required
            />
            <label htmlFor="agreeWithConds">
              By continuing, I agree to the terms of use & privacy policy
            </label>
          </div>
        )}
        <button 
          type="submit"
          className="std-button">
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
      </form>
    </div>
  );
}

export default LoginPopup;
