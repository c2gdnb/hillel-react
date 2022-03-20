import TodoItem from "../TodoItem/TodoItem";
import { Component } from "react";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: "14",
          title: "Сделать утреннюю зарядку",
          completed: true,
        },
        {
          id: "16",
          title: "Купить продуктьі",
          completed: false,
        },
        {
          id: "18",
          title: "Сделать домашнее задание",
          completed: false,
        },
        {
          id: "19",
          title: "Сходить в кино",
          completed: true,
        },
        {
          id: "20",
          title: "Позвонить другу",
          completed: false,
        },
      ],
    };
  }

  render() {
    return (
      <ul className="list">
          <TodoItem
            data={this.state.tasks}
            deleteHandler={this.deleteHandler}
          />
      </ul>
    );
  }

  deleteHandler = (index) => {
    const {tasks} = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks : tasks });
  };
}

export default TodoList;
