function FormFooter({ submitLabel, suggestionText, onSwitch }) {
  return (
    <>
      <button type="submit" className="std-button">
        {submitLabel}
      </button>
      <p className="suggestion-text">
        {suggestionText}
        <button
          type="button"
          className="icon-btn link-button"
          onClick={onSwitch}
        >
          Click here
        </button>
      </p>
    </>
  );
}

export default FormFooter;
