function SingUpButton({ setShowLogin }) {
  return (
    <button
      onClick={() => setShowLogin(true)}
      className="std-button sign-up-btn"
      aria-label="Open the sign up modal"
    >
      Sign up
    </button>
  );
}

export default SingUpButton;
