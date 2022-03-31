import { useState } from "react";

export default function ContactForm(props) {
  // constructor(props) {
  //   super(props);
  //   this.onChange = this.onChange.bind(this);
  //   this.onContactFormSubmit = this.onContactFormSubmit.bind(this);

  //   this.state = {
  //     ...props.contact,
  //   };
  // }

  const onDeleteBtnClick = () =>  {
    props.onDelete(this.state);
  }
  
  const onContactFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSave(this.state);
  }

  const [contactInfo, setContactInfo] = useState({...props.contact});

  const onChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };

  return (
    <form action="" className="contact-form" onSubmit={onContactFormSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
        type="text"
        name="name"
        id="nameInput"
        value={contactInfo.name}
        onChange={onChange}
      />
      <label htmlFor="surnameInput">Surname</label>
      <input
        type="text"
        name="surname"
        id="surnameInput"
        value={contactInfo.surname}
        onChange={onChange}
      />
      <label htmlFor="phoneInput">Phone</label>
      <input
        type="text"
        name="phone"
        id="phoneInput"
        value={contactInfo.phone}
        onChange={onChange}
      />
      <div className="buttons">
        <button type="submit" className="pull-right">
          Save
        </button>
        <button type="button" className="pull-left" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
