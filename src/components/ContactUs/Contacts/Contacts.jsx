import React, { useContext } from 'react';
import "./Contacts.css";
import { useInView } from 'react-intersection-observer';
import {StoreContext} from "../../../context/StoreContext";

function Contacts() {
    const {ref: contactRef, inView: contactInView} = useInView();
    const {ref: WhRef, inView: WhInView} = useInView();
    const {handleAnimation} = useContext(StoreContext);

  return (
    <section className="contacts-section">
        <div className="contacts-contents">
            <div ref={contactRef} className={`contacts-address-info-container ${handleAnimation(contactInView)}`}>
                <h1 className="std-heading info-container-heading">Address</h1>
                <p className="std-paragraph mi-auto">We’re excited to meet you! Feel free to get in touch with us within these working hours.</p>
                <ul className="contact-widgets-container">
                    <li className="conatct-widget-item">
                        <span className="widget-name">Email</span>
                        <span className="widget-info">msayev02@gmail.com</span>
                    </li>
                    <li className="conatct-widget-item">
                        <span className="widget-name">Phone</span>
                        <span className="widget-info">0554584886</span>
                    </li>
                    <li className="conatct-widget-item">
                        <span className="widget-name">Address</span>
                        <span className="widget-info">Blah Blah Street, 420</span>
                    </li>
                </ul>
            </div>
            <div className="contacts-working-hours-info-container">
                <div ref={WhRef} className={`working-hours-contents ${handleAnimation(WhInView)}`}>
                    <h1 className="std-heading info-container-heading">Working Hours</h1>
                    <ul className="workin-hours-list">
                        <li className="work-hour-item">
                            <span className="day-of-the-week">Monday</span>
                            <span className="hours">09:00 <span>am</span> - 07:30 <span>pm</span></span>
                        </li>
                        <li className="work-hour-item">
                            <span className="day-of-the-week">Tuesday</span>
                            <span className="hours">09:00 <span>am</span> - 07:30 <span>pm</span></span>
                        </li>
                        <li className="work-hour-item">
                            <span className="day-of-the-week">Wednesday</span>
                            <span className="hours">09:00 <span>am</span> - 07:30 <span>pm</span></span>
                        </li>
                        <li className="work-hour-item">
                            <span className="day-of-the-week">Thursday</span>
                            <span className="hours">09:00 <span>am</span> - 07:30 <span>pm</span></span>
                        </li>
                        <li className="work-hour-item">
                            <span className="day-of-the-week">Friday</span>
                            <span className="hours">09:00 <span>am</span> - 07:30 <span>pm</span></span>
                        </li>
                        <li className="work-hour-item">
                            <span className="day-of-the-week">Saturday</span>
                            <span className="hours">09:00 <span>am</span> - 07:30 <span>pm</span></span>
                        </li>
                        <li className="work-hour-item">
                            <span className="day-of-the-week">Sunday</span>
                            <span className="hours">09:00 <span>am</span> - 07:30 <span>pm</span></span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacts
