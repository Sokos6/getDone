import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.description,
            done: false
        };
    }
    render() {
        return <div className="Todo">{this.state.description}</div>;
    }
}

export default Todo;