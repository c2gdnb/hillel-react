import * as contactsService from "../../services/contactsService";
import { useState, useEffect } from "react";
import NotesList from "../notesList/NotesList";
import NotesForm from "../notesForm/NotesForm";

import "./styles.css";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    contactsService.getContactsList().then((data) => {
      setNotes(data);
    });
  }, []);

  function createContact(note) {
    contactsService.createContact(note).then((data) => {
      const newNotes = [...notes, data];

      setNotes(newNotes);
    });
  }

  function onNoteDelete(note) {
    const newNotes = notes.filter((el) => el !== note);
    contactsService.deleteContact(note.id);

    setNotes(newNotes);
  }

  return (
    <div className="container">
      <NotesForm oncreate={createContact}/>
      <NotesList notes={notes} onDelete={onNoteDelete} />
    </div>
  );
}

export default Notes;
