import React, { Component } from "react";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        <Todo description="Item #1" />
        <Todo description="Item #2" />
      </div>
    );
  }
}

export default TodoList;
