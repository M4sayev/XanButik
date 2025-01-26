import React, { useContext, useState } from 'react'
import './QuestionForm.css'
import { assets } from '../../../assets/assets'
import { useInView } from 'react-intersection-observer'
import {StoreContext} from "../../../context/StoreContext"

function QuestionForm() {

    const { ref: qfTextRef, inView: qfTextInView } = useInView();
    const { ref: qfimgRef, inView: qfImgInView } = useInView();
    const { handleAnimation } = useContext(StoreContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");

    function handleQuestionSubmit(e) {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setNotes("");
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
                    <form onSubmit={handleQuestionSubmit} className="qf-contact-form">
                        <div>
                            <span>First Name</span>
                            <input 
                                type="text"
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                            />
                        </div>
                        <div>
                            <span>Last Name</span>
                            <input 
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div>
                            <span className="qf-email-input-lbl">Email address</span>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <span>Phone</span>
                            <input 
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <span>Notes</span>
                            <textarea 
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            />
                        </div>
                        <button className="qf-btn std-btn">Submit</button>
                    </form>
                </div>
            </div>
            <div ref={qfimgRef} className={`qf-img-container ${handleAnimation(qfImgInView)}`}>
                <img src={assets.contact_us_form} alt="Xan Butik" />
            </div>
        </div>
    </section>
  )
}

export default QuestionForm
