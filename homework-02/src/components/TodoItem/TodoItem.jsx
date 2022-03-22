import { Component } from "react";
import trashBinIcon from "../../assets/trash.svg";

class TodoItem extends Component {  
  render() {
    const item = this.props.data;

    return (
        <li className={`list__item ${item.completed ? "list__item--done" : "list__item--not-done"}`}>
        {item.title}
        <button className="delete-btn" title="Delete" onClick={() => this.props.deleteHandler(item.id) }>
          <img src={trashBinIcon} className="delete-icon" alt="logo" />
        </button>
      </li>
      )
  }
}
export default TodoItem;
