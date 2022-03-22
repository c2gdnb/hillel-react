import { Component } from "react";
import trashBinIcon from "../../assets/trash.svg";

class TodoItem extends Component {  
  render() {
    return (
        <li className={`list__item ${this.props.data.completed ? "list__item--done" : "list__item--not-done"}`}>
        {this.props.data.title}
        <button className="delete-btn" title="Delete" onClick={() => this.props.deleteHandler(this.props.data.id) }>
          <img src={trashBinIcon} className="delete-icon" alt="logo" />
        </button>
      </li>
      )
  }
}
export default TodoItem;
