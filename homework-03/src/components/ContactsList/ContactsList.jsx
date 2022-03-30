import { Component } from "react";
import ContactsItem from "../ContactsItem/ContactsItem";

export default class ContactsList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map((contact) => (
            <ContactsItem
              key={contact.id}
              contact={contact}
              deleteHandler={this.props.deleteHandler} 
            />
          ))}
        </tbody>
      </table>
    );
  }
}
