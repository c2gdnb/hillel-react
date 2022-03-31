import { Component } from "react";

export default class ContactsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      phone: "",
    };

    this.onContactFormSubmit = this.onContactFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onContactFormSubmit(e) {
    e.preventDefault();
    const newItem = {
      name: this.state.name,
      surname: this.state.surname,
      phone: this.state.phone,
    };

    this.props.onSave(newItem);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <form className="form" onSubmit={this.onContactFormSubmit}>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="field">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Surname"
              value={this.state.surname}
              onChange={this.onChange}
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={this.state.phone}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div className="buttons">
          <button type="submit" className="button primary">
            Save
          </button>
          <button
            type="button"
            className="button"
            onClick={this.props.onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
