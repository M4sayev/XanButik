import "./QuestionForm.css";
import { assets } from "../../../assets/assets";
import { useInView } from "react-intersection-observer";
import useForm from "../../../hooks/useForm";
import { toast } from "react-toastify";
import { handleAnimation } from "../../../utils/utils";
import QuestionFormInput from "./QuestionFormInput";
import QuestionFormTextarea from "./QuestionFormTextarea";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../../../utils/validate";

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
    name: "email",
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
  const { form, setForm, errors, setErrors, handleChange } = useForm(formData);

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

    newErrors.firstName = validateName(form.firstName, "first name");
    newErrors.lastName = validateName(form.lastName, "last name");

    newErrors.email = validateEmail(form.email);

    newErrors.phone = validatePhone(form.phone);

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
              <h2 className="qf-heading std-heading">Have a question?</h2>
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
          <img src={assets.contact_us_form} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

export default QuestionForm;
