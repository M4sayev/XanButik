import React from 'react'
import "./ContactUs.css"
import Contacts from '../../components/ContactUs/Contacts/Contacts'
import QuestionForm from '../../components/ContactUs/QuestionForm/QuestionForm'
import MapComponent from "../../components/ContactUs/MapComponent/MapComponent"


function ContactUs() {
  return (
    <main>
      <Contacts />
      <QuestionForm />
      <MapComponent />
    </main>
  )
}

export default ContactUs
