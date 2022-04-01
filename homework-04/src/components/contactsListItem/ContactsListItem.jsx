import "./ContactsListItem.css";

export default function ContactsListItem(props) {
  const { contact } = props;

  const onDeleteClick = (e) => {
    e.preventDefault();
    props.onDelete(props.contact);
  };

  const onSelectClick = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== "LI") {
      return;
    }
    props.onSelect(contact);
  };

  return (
    <li className="contact-list-item" onClick={onSelectClick}>
      {contact.name} {contact.surname} - {contact.phone}
      <a href="#" onClick={onDeleteClick}>
        Delete
      </a>
    </li>
  );
}
