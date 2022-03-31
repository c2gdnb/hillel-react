export default function ContactsListItem(props) {
  const { contact } = props;

  const onDeleteClick = (e) => {
    e.preventDefault();
    props.onDelete(props.contact);
  };

  return (
    <li
      className="contact-list-item"
      onClick={props.onSelect.bind(null, contact)}
    >
      {contact.name} {contact.surname} - {contact.phone}
      <button type="button" onClick={onDeleteClick}>
        Delete
      </button>
    </li>
  );
}