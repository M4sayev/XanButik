import ErrorMessage from "../../ErrorMessage/ErrorMessage";

function QuestionFormInput({
  name,
  label,
  type,
  required,
  handleChange,
  errors,
  form,
}) {
  return (
    <div>
      <label htmlFor={name} id={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={form[name]}
        required={required}
        onChange={handleChange}
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      <ErrorMessage message={errors[name]} fieldName={name} />
    </div>
  );
}

export default QuestionFormInput;
