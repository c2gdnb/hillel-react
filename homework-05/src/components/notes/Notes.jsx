import { createNote, deleteNote, getNotes, updateNote } from "../../services/notes";
import { useCallback, useEffect } from "react";
import NotesList from "../notesList/NotesList";
import NotesForm from "../notesForm/NotesForm";
import { useAsync } from "../../hooks/common";

import "./styles.css";

function Notes() {
  const { run, data: notes, setData: setNotes } = useAsync(getNotes, []);

  useEffect(() => run(), []);

  const onCreateNote = useCallback(
    (description) => {
      const newItem = {
        description,
      };
      createNote(newItem).then((data) => {
        setNotes([...notes, data]);
      });
    },
    [notes]
  );

  const onUpdateNote = (note) => {
    updateNote(note).then((data) => {
      const newNotes = notes.map((el) => (el.id === note.id ? note : el));

      setNotes(newNotes);
    });
  };

  const onNoteDelete = (note) => {
    const newNotes = notes.filter((el) => el !== note);
    deleteNote(note.id);

    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesForm onCreateNote={onCreateNote} />
      <NotesList
        notes={notes}
        onDelete={onNoteDelete}
        onUpdateNote={onUpdateNote}
      />
    </div>
  );
}

export default Notes;
