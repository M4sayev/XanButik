import "./Contacts.css";
import AddressSection from "./AddressSection";
import WorkingHours from "./WorkingHours";

function Contacts() {
  return (
    <section className="contacts-section">
      <h2 className="visually-hidden">Contact Information and Working Hours</h2>
      <div className="contacts-contents">
        <AddressSection />
        <WorkingHours />
      </div>
    </section>
  );
}

export default Contacts;
