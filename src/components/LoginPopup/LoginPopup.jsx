import React, { useContext, useEffect, useRef, useState } from "react";
import "./LoginPopup.css";
import { IoClose } from "react-icons/io5";
import { BiShow, BiHide } from "react-icons/bi";
import { StoreContext } from "../../context/StoreContext";
import { useFocusTrap } from "../../hooks/useTrapFocus";
import { useEscapeKey } from "../../hooks/useEscapeKey";

function LoginPopup({ formRef }) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [ errors, setErrors ] = useState({});
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

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setForm({
        name: "",
        email: "",
        password: "",
        agreeToTerms: false,
      });
  
      setShowLogin(false);
    }
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // Clear error for the current field as the user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }

  useFocusTrap(popupRef, true, firstPopupElRef)

  // Close modal on escape
  useEscapeKey(() => setShowLogin(false));

  // Validate the form

  function validate() {
    const errors = {};

    if (!form.name.trim()) errors.name="Name is required";
    if (!form.password.trim()) errors.password="Password is required";
    if (!form.email.trim()) {
      errors.email="Email is required";
    } else if ((!/\S+@\S+\.\S+/.test(form.email))) {
      errors.email = "Email is invalid";
    }

    if (currentState === "Sign Up" && !form.agreeToTerms) {
      errors.agreeToTerms = "You must agree to the terms";
    }
    
    return errors;
  }

  // Render errors
  function renderError(fieldName) {
    if (!errors[fieldName]) return null;
    return (
      <p id={`${fieldName}-error`} role="alert" style={{ color: 'red' }} aria-live="assertive">
        {errors[fieldName]}
      </p>
    );
  }


  return (
    <div 
      className="login-popup"
      aria-modal="true"
      role="dialog"
      aria-labelledby="loginPopupTitle"
      ref={popupRef}
    >
      <form 
        onSubmit={handleOnSubmit} 
        ref={formRef} 
        className="login-popup-container"
        aria-describedby="loginPopupDesc"
        noValidate
      >
        <div className="login-popup-title">
          <h2 id="loginPopupTitle">{currentState}</h2>
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
            <div>
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
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {renderError("name")}
            </div>
          )}
          <div>
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
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {renderError("email")}
          </div>
          <div className="password-input-container">
            <label 
              htmlFor="password" 
              className="visually-hidden"
            >Password</label>
            <div>
              <div className="password-input-h-s-btn">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="input-password"
                  required
                  value={form.password}
                  onChange={handleOnChange}
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-describedby={errors.password ? "password-error" : undefined}
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
            {renderError("password")}
            </div>
        </div>
        {currentState === "Sign Up" && (
          <>
          <div className="login-popup-condition">
            <div className="login-popup-condition-container">
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
            {renderError("agreeToTerms")}
          </div>
          </>
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
