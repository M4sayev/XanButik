import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({
  children,
  onClose,
  reviewsModalRef,
  styles = null,
  maxWidth = "400px",
}) {
  return createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
      aria-hidden="true"
      style={styles}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        ref={reviewsModalRef}
        style={{ maxWidth }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
