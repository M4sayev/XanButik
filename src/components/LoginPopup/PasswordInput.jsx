import React from "react";
import { BiHide, BiShow } from "react-icons/bi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function PasswordInput({
  value,
  onChange,
  togglePasswordVisibility,
  error,
  showPassword,
}) {
  return (
    <div className="password-input-container">
      <label htmlFor="password" className="visually-hidden">
        Password
      </label>
      <div className="password-input-h-s-btn">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          placeholder="Password"
          className="input-password"
          required
          value={value}
          onChange={onChange}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? "password-error" : undefined}
        />
        <button
          type="button"
          className="icon-btn show-hide-icon"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <BiShow style={{ color: "var(--clr-primary-900)" }} />
          ) : (
            <BiHide style={{ color: "var(--clr-primary-900)" }} />
          )}
        </button>
      </div>
      <ErrorMessage message={error} fieldName="password" />
    </div>
  );
}

export default PasswordInput;
