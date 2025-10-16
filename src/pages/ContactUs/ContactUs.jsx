import React from "react";
import "./ContactUs.css";
import Contacts from "../../components/ContactUs/Contacts/Contacts";
import QuestionForm from "../../components/ContactUs/QuestionForm/QuestionForm";
import MapComponent from "../../components/ContactUs/MapComponent/MapComponent";
import FaqAccordion from "../../components/ContactUs/FaqAccordion/FaqAccordion";

function ContactUs() {
  return (
    <main>
      <Contacts />
      <QuestionForm />
      <MapComponent />
      <FaqAccordion />
    </main>
  );
}

export default ContactUs;
