import { useState } from "react";
import "../css/ContactForm.css";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    addContact({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ContactForm;
