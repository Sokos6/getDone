import React from 'react';
import './App.css';
import Todo from './Todo';
import TodoList from './TodoList';

const details = {
  header: "getDone",
  headerColor: "red"
};

const headerDisplay = ({ header: title, headerColor: color}) => (
  <h2 style={{ color: color}}>{title}</h2>
)

const App = () => (
  <div className="App">
    {headerDisplay(details)}
    <br />
    <TodoList />
  </div>
);

export default App;