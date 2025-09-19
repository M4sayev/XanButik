import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ children, onClose, reviewsModalRef }) {
  return createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
      aria-hidden="true"
      ref={reviewsModalRef}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
