import React, { useContext, useRef, useState } from "react";
import "./LoginPopup.css";
import { StoreContext } from "../../context/StoreContext";
import { useFocusTrap } from "../../hooks/useTrapFocus";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import useForm from "../../hooks/useForm";
import { toast } from "react-toastify";
import LoginForm from "./LoginForm";
import SingUpForm from "./SingUpForm";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

function LoginPopup({ formRef }) {
  const [showPassword, setShowPassword] = useState(false);
  const [currentState, setCurrentState] = useState("Sign Up");
  const popupRef = useRef(null);
  const firstPopupElRef = useRef(null);
  const { setShowLogin } = useContext(StoreContext);
  const formSchema = {
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  };
  const { form, errors, setForm, setErrors, handleChange } = useForm(
    formSchema,
    {}
  );

  function handleOnSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setForm({
        name: "",
        email: "",
        password: "",
        agreeToTerms: false,
      });

      setShowLogin(false);

      if (currentState === "Sign Up") {
        toast("Account created successfully!");
      } else {
        toast("Logged in successfully!");
      }
    }
  }

  useFocusTrap(popupRef, true, firstPopupElRef);

  // Close modal on escape
  useEscapeKey(() => setShowLogin(false));

  // Validate the form

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    if (currentState === "Sign Up" && !form.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms";
    }

    return newErrors;
  }

  return (
    <div
      className="login-popup"
      aria-modal="true"
      role="dialog"
      aria-labelledby="loginPopupTitle"
      ref={popupRef}
    >
      <form
        onSubmit={handleOnSubmit}
        ref={formRef}
        className="login-popup-container"
        aria-describedby="loginPopupDesc"
        noValidate
      >
        <FormHeader
          currentState={currentState}
          setShowLogin={setShowLogin}
          firstPopupElRef={firstPopupElRef}
        />
        {currentState === "Login" ? (
          <LoginForm
            form={form}
            errors={errors}
            handleChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        ) : (
          <SingUpForm
            form={form}
            errors={errors}
            handleChange={handleChange}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        )}

        <FormFooter
          currentState={currentState}
          setCurrentState={setCurrentState}
        />
      </form>
    </div>
  );
}

export default LoginPopup;
