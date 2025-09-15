import React, { useState } from 'react';
import "./TestSubscribeForm.css";
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import { toast, ToastContainer } from 'react-toastify';
import { handleAnimation } from '../../../utils/utils';

function TestSubscribeForm() {
  const {ref: sFormRef, inView: sFormInView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const [ validEmail, setValidEmail ] = useState(true);

  const [value, setValue] = useState("");

  const notify = () => toast("Thanks for subscribing to us!");

  function handleOnSubmit(e) {
    e.preventDefault();

    const email = value.trim();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setValidEmail(false);
      return;
    }
    setValue("")
    notify();
  }
  
  function handleOnChange(e) {
    setValue(e.target.value);
    if (!validEmail) setValidEmail(true);
  }
  
  return (
    <section className="subcribe-form-section">
        <Parallax speed={-10} className="sf-section-bg-container" role='img'></Parallax>
        <article className="subscribe-form-contents">
            <form 
              onSubmit={handleOnSubmit} 
              ref={sFormRef} 
              className={`subscribe-form ${handleAnimation(sFormInView)}`}
              noValidate
            >
                <h1 className="std-heading-cta">Subscribe form</h1>
                <p className="std-paragraph mi-auto">Want to be in the know? Subscribe to a newsletter to get all news and weekly updates.</p>
                <label 
                  htmlFor="subscribeEmail" 
                  className='visually-hidden'
                >Email address for newsletter subscription</label>
                <input 
                  id='subscribeEmail' 
                  value={value} 
                  onChange={handleOnChange} 
                  type="email" 
                  placeholder='Enter your email here' 
                  className="subscribe-form-input" 
                  required
                  autoComplete="email"
                  aria-describedby={!validEmail ? "subscribeError" : undefined}
                  aria-invalid={!validEmail}
                />
                {!validEmail && <p id="subscribeError" className='email-error-message' role='alert'>Please enter a valid email address.</p>}
                <button className="subscribe-btn std-button" aria-label="Subscribe to newsletter">Subscribe</button>
            </form>
        </article>
    </section>
  )
}

export default TestSubscribeForm
