import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PasswordInput from "./PasswordInput";

function LoginForm({
  errors,
  handleChange,
  currentState,
  form,
  showPassword,
  setShowPassword,
}) {
  return (
    <div className="login-popup-inputs">
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
    </div>
  );
}

export default LoginForm;
