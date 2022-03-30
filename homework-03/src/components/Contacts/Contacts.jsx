import { Component } from "react";
import * as contactsService from "../../services/contactsService";
import ContactsForm from "../ContactsForm/ContactsForm";
import ContactsList from "../ContactsList/ContactsList";

export default class Contacts extends Component {
  state = {
    contacts: [],
    mode: "list",
  };

  constructor(props) {
    super(props);
    this.onSave = this.onSave.bind(this);
  }

  componentDidMount() {
    contactsService.getContacts().then((data) => {
      this.setState({ contacts: data });
    });
  }

  onAddNewBtnClick = () => {
    this.setState({
      mode: "form",
    });
  };

  onCancel = () => {
    this.setState({
      mode: "list",
    });
  };

  deleteHandler = (id) => {
    const contacts = this.state.contacts.filter((value) => value.id !== id);
    contactsService.deleteContact(id);

    this.setState({
      contacts,
    });
  };

  onSave(contact) {
    this.createContact(contact);
  }

  createContact(contact) {
    contactsService.createContact(contact).then((data) => {
      const contacts = [...this.state.contacts, data];
      this.setState({
        contacts,
        mode: "list",
      });
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.mode === "list" ? (
          <>
            <ContactsList
              contacts={this.state.contacts}
              onSelect={this.onContactSelect}
              deleteHandler={this.deleteHandler}
            />

            <div className="centered">
              <button
                type="submit"
                className="button primary"
                onClick={this.onAddNewBtnClick}
              >
                Add contact
              </button>
            </div>
          </>
        ) : (
          <ContactsForm onCancel={this.onCancel} onSave={this.onSave} />
        )}
      </div>
    );
  }
}
