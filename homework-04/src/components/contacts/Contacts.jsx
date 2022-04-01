import { useState, useEffect } from "react";
import * as contactsService from "../../services/contactsService";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";

import "./Contacts.css";

export default function Contacts() {
  const [selectedContact, setSelectedContact] = useState(getEmptyContact());
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState("list");

  useEffect(() => {
    contactsService.getContactsList().then((data) => {
      setContacts(data);
    });
  }, []);

  function getEmptyContact() {
    return {
      name: "",
      surname: "",
      phone: "",
    };
  }

  function onAddNewBtnClick() {
    setSelectedContact(getEmptyContact());
    setPage("form");
  }

  function onCancel() {
    setPage("list");
  }

  function onContactSelect(contact) {
    setSelectedContact(contact);
    setPage("form");
  }

  function onContactDelete(contact) {
    const newContacts = contacts.filter((el) => el !== contact);
    contactsService.deleteContact(contact.id);

    setContacts(newContacts);
    setSelectedContact(getEmptyContact());
  }

  function onSave(contact) {
    if (contact.id) {
      updateContact(contact);
    } else {
      createContact(contact);
    }
    setPage("list");
  }

  function createContact(contact) {
    contactsService.createContact(contact).then((data) => {
      const newContacts = [...contacts, data];

      setContacts(newContacts);
      setSelectedContact(data);
    });
  }

  function updateContact(contact) {
    contactsService.updateContact(contact).then((data) => {
      const newContacts = contacts.map((el) =>
        el.id === contact.id ? contact : el
      );

      setContacts(newContacts);
      setSelectedContact(contact);
    });
  }

  return (
    <div className="container">
      {page === "list" ? (
        <>
          <ContactsList
            contacts={contacts}
            onSelect={onContactSelect}
            onDelete={onContactDelete}
          />
          <button onClick={onAddNewBtnClick} className={"add-new-contact-btn"}>
            Add new
          </button>
        </>
      ) : (
        <ContactForm
          contact={selectedContact}
          onCancel={onCancel}
          onSave={onSave}
        />
      )}
    </div>
  );
}
