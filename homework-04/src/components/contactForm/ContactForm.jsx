import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onContactFormSubmit = this.onContactFormSubmit.bind(this);

    this.state = {
      ...props.contact,
    };
  }
  
  onDeleteBtnClick() {
    this.props.onDelete(this.state);
  }
  
  onContactFormSubmit(e) {
    e.preventDefault();

    this.props.onSave(this.state);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form
        action=""
        className="contact-form"
        onSubmit={this.onContactFormSubmit}
      >
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          name="name"
          id="nameInput"
          value={this.state.name}
          onChange={this.onChange}
        />
        <label htmlFor="surnameInput">Surname</label>
        <input
          type="text"
          name="sername"
          id="surnameInput"
          value={this.state.sername}
          onChange={this.onChange}
        />
        <label htmlFor="phoneInput">Phone</label>
        <input
          type="text"
          name="phone"
          id="phoneInput"
          value={this.state.phone}
          onChange={this.onChange}
        />
        <div className="buttons">
          <button type="submit" className="pull-right">
            Save
          </button>
          <button
            type="button"
            className="pull-left"
            onClick={this.props.onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
