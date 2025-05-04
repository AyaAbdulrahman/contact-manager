import "../css/ContactItem.css";

function ContactItem({ contact, index, deleteContact }) {
  return (
    <div className="contact-item">
      <div>
        <strong>{contact.name}</strong>
        <div>{contact.email}</div>
      </div>
      <button className="delete-btn" onClick={() => deleteContact(index)}>
        Delete
      </button>
    </div>
  );
}

export default ContactItem;
