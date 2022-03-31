import { Component } from "react";
import trashBinIcon from "../../assets/trash.svg";

export default class ContactsItem extends Component {
  render() {
    const { name, surname, phone, id } = this.props.contact;
    return (
      <tr>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{phone}</td>
        <td>
          <button
            className="delete-btn"
            title="Delete"
            onClick={() => this.props.deleteHandler(id)}
          >
            <img src={trashBinIcon} className="delete-icon" alt="logo" />
          </button>
        </td>
      </tr>
    );
  }
}
