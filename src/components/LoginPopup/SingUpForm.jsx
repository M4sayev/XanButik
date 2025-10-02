import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PasswordInput from "./PasswordInput";

function SingUpForm({
  form,
  errors,
  handleChange,
  showPassword,
  setShowPassword,
  setForm,
}) {
  return (
    <div className="login-popup-inputs">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="visually-hidden">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
          value={form.name}
          onChange={handleChange}
          autoFocus={true}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        <ErrorMessage message={errors.name} fieldName="name" />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
          value={form.email}
          onChange={handleChange}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        <ErrorMessage message={errors.email} fieldName="email" />
      </div>

      {/* Password Input  */}
      <PasswordInput
        error={errors.password}
        value={form.password}
        onChange={handleChange}
        showPassword={showPassword}
        togglePasswordVisibility={() => setShowPassword((prev) => !prev)}
      />

      {/* Terms & Conditions  */}
      <div className="login-popup-condition">
        <div className="login-popup-condition-container">
          <input
            id="agreeWithConds"
            type="checkbox"
            name="agreeToTerms"
            checked={form.agreeToTerms}
            onChange={(e) =>
              setForm({ ...form, agreeToTerms: e.target.checked })
            }
            required
          />
          <label htmlFor="agreeWithConds">
            By continuing, I agree to the terms of use & privacy policy
          </label>
        </div>
        <ErrorMessage message={errors.agreeToTerms} fieldName="agreeToTerms" />
      </div>
    </div>
  );
}

export default SingUpForm;
