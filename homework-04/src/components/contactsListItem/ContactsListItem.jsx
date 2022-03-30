import { Component } from "react";

class ContactsListItem extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  state = {};
  render() {
    const { contact } = this.props;
    return (
      <li
        className="contact-list-item"
        onClick={this.props.onSelect.bind(null, contact)}
      >
        {contact.name} {contact.sername} - {contact.phone}
        <button type="button" onClick={this.onDeleteClick}>
          Delete
        </button>
      </li>
    );
  }

  onDeleteClick(e) {
    e.preventDefault();
    this.props.onDelete(this.props.contact);
  }
}

export default ContactsListItem;
