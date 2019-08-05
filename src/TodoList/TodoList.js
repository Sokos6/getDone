import React, { Fragment, Component } from "react";
import Todo from "../Todo";
import "./TodoList.css";

import NewTodo from "../NewTodo";
import Divider from "../Divider";

class TodoList extends Component {
  constructor(props) {
    super(props);
    const [item1, item2, ...rest] = [
      "Write some code",
      "Change the world",
      "Take a nap",
      "Eat a cookie"
    ];
    this.state = {
      items: [],
      loaded: false
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  async addTodo(description) {
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        description: description,
        critical: false,
        done: false
      })
    });
    if (res.status === 200) {
      const newItem = {
        id: this.state.items.length + 1,
        description: description,
        done: false,
        critical: false
      };
      this.setState({
        items: [...this.state.items, newItem]
      });
    }
    // const newItem = {
    //   description: description,
    //   done: false,
    //   critical: false
    // };
    // this.setState({
    //   items: [...this.state.items, newItem]
    // });
  }
  async removeTodo(removeItemId) {
    const res = await fetch(`/api/todos/${removeItemId}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      }
    });
    if (res.status === 200) {
      const filteredItems = this.state.items.filter(todo => {
        return todo.id !== removeItemId;
      });
      this.setState({ items: filteredItems });
    }
  }
  renderItems() {
    if (this.state.loaded) {
      return this.state.items.map(todo => (
        <Fragment key={"item-" + todo.description}>
          <Todo
            id={todo.id}
            key={todo.id}
            description={todo.description}
            removeTodo={this.removeTodo}
            done={todo.done}
            critical={todo.critical}
          />
          <Divider key={"divide-" + todo.description} />
        </Fragment>
      ));
    } else {
      return <p>Still Loading...</p>;
    }
  }

  async componentDidMount() {
    const res = await fetch("/api/todos", { accept: "application/json" });
    const json = await res.json();
    this.setState({ items: json.todos, loaded: true });
  }

  render() {
    return (
      <div className="TodoList">
        <NewTodo addTodo={this.addTodo} />
        {this.renderItems()}
      </div>
    );
  }
}

export default TodoList;
