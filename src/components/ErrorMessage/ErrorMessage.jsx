function ErrorMessage({ message, fieldName }) {
  if (!message) return null;

  return (
    <p
      id={`${fieldName}-error`}
      role="alert"
      style={{ color: "var(--clr-validation-err)" }}
      aria-live="assertive"
    >
      {message}
    </p>
  );
}

export default ErrorMessage;
