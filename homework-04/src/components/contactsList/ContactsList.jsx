import ContactsListItem from "../contactsListItem/ContactsListItem";
import "./ContactsList.css";

export default function ContactsList(props) {
  return (
    <ul className="contacts-list">
      {props.contacts.map((contact) => (
        <ContactsListItem
          key={contact.id}
          contact={contact}
          onSelect={props.onSelect}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}
