import ContactItem from "./ContactItem";
import "../css/ContactList.css";

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contacts">
      <h2>Contact List</h2>
      {contacts.length === 0 ? (<p>No contacts yet</p>) : (
        contacts.map((contact, index) => (
          <ContactItem
            key={index}
            index={index}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
