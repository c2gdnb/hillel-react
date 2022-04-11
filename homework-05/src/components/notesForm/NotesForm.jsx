import { useState } from "react";
import "./styles.css";

function NotesForm({ onCreateNote }) {
  const [description, setDescription] = useState("");

  const onInputChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitButtonClick = (e) => {
    e.preventDefault();

    if (description.length) {
      onCreateNote(description);
      setDescription("");
    } else {
      return;
    }
  };

  return (
    <form action="" className="note-form">
      <input
        type="text"
        name="description"
        placeholder="Enter note description here"
        className="note-form__input"
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="note-form__button"
        onClick={onSubmitButtonClick}
      >
        Add
      </button>
    </form>
  );
}

export default NotesForm;
