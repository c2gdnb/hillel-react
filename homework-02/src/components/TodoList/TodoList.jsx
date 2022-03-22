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
        {this.state.tasks.map((task) => (
          <TodoItem key={task.id} data={task} deleteHandler={this.deleteHandler} />
        ))}
      </ul>
    );
  }

  deleteHandler = (id) => {
    const newTasks = this.state.tasks.filter((value) => value.id !== id);
    this.setState({ tasks: newTasks });
  };
}

export default TodoList;
