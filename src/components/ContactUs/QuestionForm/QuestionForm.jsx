import React from "react";
import "./QuestionForm.css";
import { assets } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import useForm from "../../../hooks/useForm";
import { toast } from "react-toastify";
import { handleAnimation } from "../../../utils/utils";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import QuestionFormInput from "./QuestionFormInput";
import QuestionFormTextarea from "./QuestionFormTextarea";

const inputFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: false,
  },
  {
    name: "emailC",
    label: "Email address",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: false,
  },
];

function QuestionForm() {
  const { ref: qfTextRef, inView: qfTextInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: qfimgRef, inView: qfImgInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const formData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  };
  const { form, setForm, errors, setErrors, handleChange } = useForm(
    formData,
    {}
  );

  function handleQuestionSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    const notify = () =>
      toast.success("We value each and every question you submit!");

    if (Object.keys(validationErrors).length === 0) {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: "",
      });
      notify();
    }
  }

  function validate() {
    const newErrors = {};

    const nameRegex = /^[a-zA-ZÀ-ÿ' -]+$/;
    if (
      !nameRegex.test(form.firstName.trim()) &&
      form.firstName.trim() !== ""
    ) {
      newErrors.firstName =
        "Please enter a valid first name using letters only";
    } else if (
      (form.firstName.length < 2 || form.firstName.length > 50) &&
      form.firstName.trim() !== ""
    ) {
      newErrors.firstName =
        "Please enter a valid first name using 2–50 letters";
    }

    if (form.lastName.trim() === "") {
    }
    if (!nameRegex.test(form.lastName.trim()) && form.lastName.trim() !== "") {
      newErrors.lastName = "Please enter a valid last name using letters only";
    } else if (
      (form.lastName.length < 2 || form.lastName.length > 50) &&
      form.lastName.trim() !== ""
    ) {
      newErrors.lastName = "Please enter a valid last name using 2–50 letters";
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Email is invalid";
    }

    const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
    if (!phoneRegex.test(form.phone.trim()) && form.phone.trim() !== "") {
      newErrors.phone = "Please enter a valid phone number using digits only";
    }

    if (!form.notes.trim()) {
      newErrors.notes = "Please add a question";
    }

    return newErrors;
  }

  return (
    <section className="question-form">
      <div className="question-form-contents">
        <div
          ref={qfTextRef}
          className={`qf-text-n-form ${handleAnimation(qfTextInView)}`}
        >
          <div className="qf-widgets-container">
            <div className="qf-text-container">
              <p className="std-paragraph std-subtitle-fs">Contacts</p>
              <h1 className="qf-heading std-heading">Have a question?</h1>
              <p className="std-paragraph">
                Contact us whenever you have any questions. We are always here
                for you!
              </p>
            </div>
            <form
              onSubmit={handleQuestionSubmit}
              className="qf-contact-form"
              noValidate
            >
              {inputFields.map((field) => (
                <QuestionFormInput
                  errors={errors}
                  form={form}
                  handleChange={handleChange}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  required={field.required}
                  key={field.name}
                />
              ))}

              <QuestionFormTextarea
                form={form}
                handleChange={handleChange}
                errors={errors}
              />
              <button className="qf-btn std-button">Submit</button>
            </form>
          </div>
        </div>
        <div
          ref={qfimgRef}
          className={`qf-img-container ${handleAnimation(qfImgInView)}`}
        >
          <img src={assets.contact_us_form} aria-hidden="" />
        </div>
      </div>
    </section>
  );
}

export default QuestionForm;
