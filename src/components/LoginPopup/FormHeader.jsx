import { IoClose } from "react-icons/io5";

function FormHeader({ setShowLogin, currentState, firstPopupElRef }) {
  return (
    <div className="login-popup-title">
      <h2 id="loginPopupTitle">{currentState}</h2>
      <button
        className="icon-btn cross-icon"
        type="button"
        onClick={() => setShowLogin(false)}
        aria-label="Close login popup"
        ref={firstPopupElRef}
      >
        <IoClose
          className="cross"
          style={{ color: "var(--clr-primary-900)" }}
        />
      </button>
    </div>
  );
}

export default FormHeader;
