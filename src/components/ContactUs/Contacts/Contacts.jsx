import React, { useContext } from 'react';
import "./Contacts.css";
import { useInView } from 'react-intersection-observer';
import {StoreContext} from "../../../context/StoreContext";

const workingHours = {
  Monday: ['09:00', '19:30'],
  Tuesday: ['09:00', '19:30'],
  Wednesday: ['09:00', '19:30'],
  Thursday: ['09:00', '19:30'],
  Friday: ['09:00', '19:30'],
  Saturday: ['09:00', '19:30'],
  Sunday: ['09:00', '19:30'],
};


function Contacts() {
    const {ref: contactRef, inView: contactInView} = useInView();
    const {ref: WhRef, inView: WhInView} = useInView();
    const {handleAnimation} = useContext(StoreContext);

  return (
    <section className="contacts-section"  aria-labelledby="contacts-heading">
        <h1 id="contacts-heading" className="visually-hidden">Contact Information and Working Hours</h1>
        <div className="contacts-contents">
            <div ref={contactRef} className={`contacts-address-info-container ${handleAnimation(contactInView)}`}>
                <h1 id="contacts-heading" className="std-heading info-container-heading">Address</h1>
                <p className="std-paragraph mi-auto">We’re excited to meet you! Feel free to get in touch with us within these working hours.</p>
                <address>
                    <ul aria-label="Contact details" className="contact-widgets-container">
                        <li className="contact-widget-item">
                        <span className="widget-name">Email</span>
                        <a className="widget-info" href="mailto:msayev02@gmail.com">msayev02@gmail.com</a>
                        </li>
                        <li className="contact-widget-item">
                        <span className="widget-name">Phone</span>
                        <a className="widget-info" href="tel:0554584886">0554584886</a>
                        </li>
                        <li className="contact-widget-item">
                        <span className="widget-name">Address</span>
                        <span className="widget-info">Blah Blah Street, 420</span>
                        </li>
                    </ul>
                </address>
            </div>
            <div className="contacts-working-hours-info-container">
                <div 
                    ref={WhRef} 
                    className={`working-hours-contents ${handleAnimation(WhInView)}`}
                    aria-labelledby="working-hours-heading"
                >
                    <h1 id="working-hours-heading" className="std-heading info-container-heading">Working Hours</h1>
                    <ul  aria-label="Working hours for each day of the week" className="workin-hours-list">
                        {Object.entries(workingHours).map(([day, hours]) => (
                            <li className="work-hour-item" key={day}>
                                <span className="day-of-the-week">{day}</span>
                                <span className="hours">
                                    <time dateTime={hours[0]}>
                                        {hours[0]} <span>am</span>
                                    </time>
                                    -
                                    <time dateTime={hours[1]}>
                                        {hours[1]} <span>pm</span>
                                    </time>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts
