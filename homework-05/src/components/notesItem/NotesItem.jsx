import { useState } from "react";
import trashBinIcon from "../../assets/trash.svg";
import "./styles.css";

function NotesItem(props) {
  const { note } = props;
  const [descriptionMode, setDescriptionMode] = useState("text");

  const onDeleteClick = (e) => {
    e.preventDefault();
    props.onDelete(props.note);
  };

  const editDescriptionHandler = (e) => {
    setDescriptionMode("form");
  };

  return (
    <li className="note">
      {descriptionMode === "text" ? (
        <div className="note__description" onClick={editDescriptionHandler}>
          {note.description}
        </div>
      ) : (
        <form>
          <textarea name="" id="" value={note.description}></textarea>
        </form>
      )}
      <button className="delete-btn" title="Delete" onClick={onDeleteClick}>
        <img src={trashBinIcon} className="delete-icon" alt="logo" />
      </button>
    </li>
  );
}

export default NotesItem;
