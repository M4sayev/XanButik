import ErrorMessage from "../../ErrorMessage/ErrorMessage";

function QuestionFormTextarea({ form, handleChange, errors }) {
  return (
    <div>
      <label htmlFor="notes">Notes</label>
      <textarea
        name="notes"
        id="notes"
        required
        value={form.notes}
        onChange={handleChange}
        aria-invalid={errors.notes ? "true" : "false"}
        aria-describedby={errors.notes ? "notes-error" : undefined}
      />
      <ErrorMessage message={errors.notes} fieldName={"notes"} />
    </div>
  );
}

export default QuestionFormTextarea;
