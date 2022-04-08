import { useState } from "react";
import "./styles.css";

function NotesForm(props) {
  const [contactInfo, setContactInfo] = useState({ description: "" });

  const onContactFormSubmit = (e) => {
    e.preventDefault();

    if (contactInfo.description.length) {
      props.oncreate(contactInfo);
      setContactInfo({ description: "" });
    } else {
      return;
    }
  };

  const onChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  return (
    <form className="note-form" onSubmit={onContactFormSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Enter note description here"
        className="note-form__input"
        value={contactInfo.description}
        onChange={onChange}
      />
      <button type="submit" className="note-form__button">
        Add
      </button>
    </form>
  );
}

export default NotesForm;
