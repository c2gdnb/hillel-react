import NotesItem from "../notesItem/NotesItem";
import "./styles.css";

function NotesList(props) {
  return (
    <>
      <ul className="note-list">
        {props.notes.map((note) => (
          <NotesItem
            key={note.id}
            note={note}
            onDelete={props.onDelete}
            onUpdateNote={props.onUpdateNote}
          />
        ))}
      </ul>
    </>
  );
}

export default NotesList;
