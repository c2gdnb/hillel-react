import { Component } from "react";
import trashBinIcon from "../../assets/trash.svg";

class TodoItem extends Component {
  render() {
    return (
      this.props.data.map((item, index) =>
        <li key={item.id} className={`list__item ${item.completed? "list__item--done": "list__item--not-done"}`}>
        {item.title}
        <button className="delete-btn" title="Delete" onClick={() => this.props.deleteHandler(index) }>
          <img src={trashBinIcon} className="delete-icon" alt="logo" />
        </button>
      </li>
      )
    );
  }
}
export default TodoItem;
