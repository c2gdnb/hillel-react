import React, { useState, useContext } from "react";
import ContactForm from "../contactForm/ContactForm";
import ContactsList from "../contactsList/ContactsList";
import ContactThemeSwitcher from "../contactThemeSwitcher/ContactThemeSwitcher";
import useContacts from "../../hooks/common";
import ThemeContext from "../../context/ThemeContext";
import "./Contacts.css";

function getEmptyContact() {
  return {
    name: "",
    surname: "",
    phone: "",
  };
}

function Contacts() {
  const { contacts, addContact, deleteContact, updateContact } = useContacts();
  const [selectedContact, setSelectedContact] = useState(getEmptyContact());
  const [page, setPage] = useState("list");
  const { theme } = useContext(ThemeContext);

  const onCreateContact = (contact) => {
    addContact(contact);
  };

  const onUpdateContact = (contact) => {
    updateContact(contact);
  };

  const onContactDelete = (contact) => {
    deleteContact(contact.id);
  };

  const onAddNewBtnClick = () => {
    setSelectedContact(getEmptyContact());
    setPage("form");
  };

  const onCancel = () => {
    setPage("list");
  };

  const onContactSelect = (contact) => {
    setSelectedContact(contact);
    setPage("form");
  };

  const onSave = (contact) => {
    if (contact.id) {
      onUpdateContact(contact);
    } else {
      onCreateContact(contact);
    }
    setPage("list");
  };

  return (
    <div className={`container ${theme}`}>
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

      <ContactThemeSwitcher />
    </div>
  );
}

export default Contacts;
