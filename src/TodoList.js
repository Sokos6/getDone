import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {

constructor(props) {
    super(props);
    this.state = {items: ['Item #1', 'Item #2', 'Item #3'] };
}

renderItems() {
    return this.state.items.map(description => (
        <Todo key={description} description={description} />
    ));
}

  render() {
      return <div className="TodoList">{this.renderItems()}</div>
  }
}
export default TodoList;
