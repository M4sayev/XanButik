import "./Contacts.css";
import AddressSection from "./AddressSection";
import WorkingHours from "./WorkingHours";

function Contacts() {
  return (
    <section className="contacts-section" aria-labelledby="contacts-heading">
      <h1 id="contacts-heading" className="visually-hidden">
        Contact Information and Working Hours
      </h1>
      <div className="contacts-contents">
        <AddressSection />
        <WorkingHours />
      </div>
    </section>
  );
}

export default Contacts;
