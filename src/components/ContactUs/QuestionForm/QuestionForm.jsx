import React, { useContext, useState } from 'react'
import './QuestionForm.css'
import { assets } from '../../../assets/assets'
import { useInView } from 'react-intersection-observer'
import {StoreContext} from "../../../context/StoreContext"
import useForm from '../../../hooks/useForm'

function QuestionForm() {

    const { ref: qfTextRef, inView: qfTextInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    const { ref: qfimgRef, inView: qfImgInView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });
    const { handleAnimation } = useContext(StoreContext);
    const formData = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: ""
    }
    const { form, setForm, errors, setErrors, handleChange } = useForm(formData, {});

    function handleQuestionSubmit(e) {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {  
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                notes: ""
            })
        }
    }

    function validate() {
        const newErrors = {};

        const nameRegex = /^[a-zA-ZÀ-ÿ' -]+$/;
        if (!nameRegex.test(form.firstName.trim())) {
            newErrors.firstName  = "Please enter a valid first name using letters only";
        } else if (form.firstName.length < 2 || form.firstName.length > 50) {
            newErrors.firstName = "Please enter a valid first name using 2–50 letters";
        }

        if (!nameRegex.test(form.lastName.trim())) {
            newErrors.lastName  = "Please enter a valid last name using letters only";
        } else if (form.lastName.length < 2 || form.lastName.length > 50) {
            newErrors.lastName = "Please enter a valid last name using 2–50 letters";
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!form.email.trim()) {
            newErrors.email="Email is required";
        } else if ((!emailRegex.test(form.email))) {
            newErrors.email = "Email is invalid";
        }

        const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;
        if (!phoneRegex.test(form.phone.trim())) {
            newErrors.phone = "Please enter a valid phone number using digits only"
        }

        if (!form.notes.trim()) {
            newErrors.notes = "Please add a question";
        }

        return newErrors;
    }

    function renderError(fieldName) {
    if (!errors[fieldName]) return null;
    return (
      <p id={`${fieldName}-error`} role="alert" style={{ color:  "var(--clr-validation-err)" }} aria-live="assertive">
        {errors[fieldName]}
      </p>
    );
  }

    
  return (
    <section className="question-form">
        <div className="question-form-contents">
            <div ref={qfTextRef} className={`qf-text-n-form ${handleAnimation(qfTextInView)}`}>
                <div className='qf-widgets-container'>
                    <div className="qf-text-container">
                        <p className="std-paragraph std-subtitle-fs">Contacts</p>
                        <h1 className="qf-heading std-heading">Have a question?</h1>
                        <p className="std-paragraph">Contact us whenever you have any questions. We are always here for you!</p>
                    </div>
                    <form onSubmit={handleQuestionSubmit} className="qf-contact-form" noValidate>
                        <div>
                            <label htmlFor='firstName'>First Name</label>
                            <input 
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={form.firstName} 
                                onChange={handleChange}
                                aria-invalid={errors.firstName ? "true" : "false"}
                                aria-describedby={errors.firstName ? "firstName-error" : undefined} 
                            />
                            {renderError("firstName")}
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last Name</label>
                            <input 
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                aria-invalid={errors.lastName ? "true" : "false"}
                                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                            />
                            {renderError("lastName")}
                        </div>
                        <div>
                            <label className="qf-email-input-lbl" htmlFor='email'>Email address</label>
                            <input 
                                type="email" 
                                name='email'
                                id='email'
                                value={form.email}
                                required
                                onChange={handleChange}
                                aria-required="true"
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {renderError("email")}
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone</label>
                            <input 
                                type="tel"
                                name='phone'
                                id='name'
                                value={form.phone}
                                onChange={handleChange}
                                aria-invalid={errors.phone ? "true" : "false"}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                            />
                            {renderError("phone")}
                        </div>
                        <div>
                            <label htmlFor='notes'>Notes</label>
                            <textarea 
                                name='notes'
                                id='notes'
                                required
                                value={form.notes}
                                onChange={handleChange}
                                aria-invalid={errors.notes ? "true" : "false"}
                                aria-describedby={errors.notes ? "notes-error" : undefined}
                            />
                            {renderError("notes")}
                        </div>
                        <button className="qf-btn std-button">Submit</button>
                    </form>
                </div>
            </div>
            <div ref={qfimgRef} className={`qf-img-container ${handleAnimation(qfImgInView)}`}>
                <img src={assets.contact_us_form} aria-hidden="" />
            </div>
        </div>
    </section>
  )
}

export default QuestionForm
