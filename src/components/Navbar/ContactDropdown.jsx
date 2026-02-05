import { useEffect, useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";

const PHONE_NUMBER = "+994554584886";

function ContactDropdown() {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  function handleDropDownClick(e) {
    if (e.type === "keydown" && e.key !== "Enter") return;

    clearTimeout(timeoutRef.current);

    navigator.clipboard
      .writeText(PHONE_NUMBER)
      .then(() => {
        setCopied(true);
        timeoutRef.current = setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy phone number:", err);
      });
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="contact-us-dropdown-container">
      <button
        aria-label="Our contacts"
        aria-controls="contactsDropdown"
        className="mail-phone-icon-container"
        aria-haspopup="true"
        onFocus={() => setIsOpen(true)}
      >
        <CiMail
          className="btns-icon"
          style={{ color: "var(--clr-primary-900)" }}
        />
        <MdLocalPhone
          className="phone-icon"
          style={{ color: "var(--clr-primary-900)" }}
        />
      </button>
      <span className="dropdown-arrow">
        <IoIosArrowUp
          aria-hidden="true"
          className="dropdown-arrow-icon"
          style={{ color: "var(--clr-primary-900)" }}
        />
      </span>
      <div
        id="contactsDropdown"
        role="dropdown"
        aria-expanded={isOpen}
        className={`dropdown-contact-us ${isOpen ? "dropdown-active" : ""}`}
      >
        <span>
          <FiPhone
            aria-hidden="true"
            className="dropdown-phone-icon"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </span>
        <div
          onClick={handleDropDownClick}
          onKeyDown={handleDropDownClick}
          role="button"
          className="dropdown-item"
          tabIndex={isOpen ? 0 : -1}
          onBlur={() => setIsOpen(false)}
          aria-label={
            copied
              ? "Phone number copied to clipboard"
              : "Copy phone number to clipboard"
          }
        >
          <p className="dropdown-phone-number">
            <span className="dp-number">{PHONE_NUMBER}</span>
            <span className="copy-icon" aria-hidden="true">
              {copied ? (
                <LuCopyCheck style={{ color: "var(--clr-primary-900)" }} />
              ) : (
                <LuCopy style={{ color: "var(--clr-primary-900)" }} />
              )}
            </span>
            <span className="visually-hidden">
              {copied ? "Copied" : "Click to copy"}
            </span>
          </p>
          <p>Xan Butik</p>
        </div>
      </div>
    </div>
  );
}

export default ContactDropdown;
