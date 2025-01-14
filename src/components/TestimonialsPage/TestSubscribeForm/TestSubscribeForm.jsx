import React, { useContext, useState } from 'react';
import "./TestSubscribeForm.css";
import { Parallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';
import {StoreContext} from '../../../context/StoreContext';

function TestSubscribeForm() {
  const {ref: sFormRef, inView: sFormInView} = useInView();
  const {handleAnimation} = useContext(StoreContext);

  const [value, setValue] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    setValue("")
  }
  
  function handleOnChange(e) {
    setValue(e.target.value);
  }
  
  return (
    <section className="subcribe-form-section">
        <Parallax speed={-10} className="sf-section-bg-container"></Parallax>
        <article className="subscribe-form-contents">
            <form onSubmit={handleOnSubmit} ref={sFormRef} className={`subscribe-form ${handleAnimation(sFormInView)}`}>
                <h1 className="std-heading-cta">Subscribe form</h1>
                <p className="std-paragraph mi-auto">Want to be in the know? Subscribe to a newsletter to get all news and weekly updates.</p>
                <input value={value} onChange={handleOnChange} type="email" placeholder='Enter your email here' className="subscribe-form-input" required/>
                <button className="subscribe-btn std-btn">Subscribe</button>
            </form>
        </article>
    </section>
  )
}

export default TestSubscribeForm
