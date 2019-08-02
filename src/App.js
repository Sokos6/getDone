import React from 'react';
import './App.css';
import Todo from './Todo';

const App = () => (
  <div className="App">
    <h2>getDone</h2>
    <br />
    <Todo description="Let's Do It"/>
    <Todo description="Do the thing" />
    <Todo description="Do the other thing"/>
  </div>
);

export default App;