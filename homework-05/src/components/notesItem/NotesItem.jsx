import { useState } from "react";
import trashBinIcon from "../../assets/trash.svg";
import "./styles.css";

function NotesItem(props) {
  const [noteInfo, setNoteInfo] = useState({ ...props.note });
  const [descriptionMode, setDescriptionMode] = useState("text");

  const onInputChange = (e) => {
    setNoteInfo({ ...noteInfo, [e.target.name]: e.target.value });
  };

  const onDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.onDelete(props.note);
  };

  const onContactFormSubmit = (e) => {
    e.preventDefault();
    setDescriptionMode("text");
    props.onUpdateNote(noteInfo);
  };

  const editDescriptionHandler = (e) => {
    setDescriptionMode("form");
  };

  return (
    <li className="note" onClick={editDescriptionHandler}>
      {descriptionMode === "text" ? (
        <div className="note__description">
          {noteInfo.description}
        </div>
      ) : (
        <form onMouseLeave={onContactFormSubmit}>
          <textarea
            name="description"
            id="note-desription"
            value={noteInfo.description}
            onChange={onInputChange}
          ></textarea>
        </form>
      )}
      <button className="delete-btn" title="Delete" onClick={onDeleteClick}>
        <img src={trashBinIcon} className="delete-icon" alt="logo" />
      </button>
    </li>
  );
}

export default NotesItem;
