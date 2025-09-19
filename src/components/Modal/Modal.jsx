import { createPortal } from "react-dom";
import "./Modal.css";

function Modal({ children, onClose, reviewsModalRef }) {
  return createPortal(
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
      aria-hidden="true"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        ref={reviewsModalRef}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
