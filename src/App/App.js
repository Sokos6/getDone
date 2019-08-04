import React from "react";
import "./App.css";

import TodoList from "../TodoList";

const details = {
 header: "getDone",
 headerColor: "red"
};

const moreDetails = {
 ...details,
 header: "getDone",
 background: "black"
};

const App = () => (
 <div className="App">
 {header(moreDetails)}
 <br />
 <TodoList />
 </div>
);

const header = ({
 header: title = "Todo List",
 headerColor: color = "blue",
 background: background = "none"
}) => <h2 style={{ color: color, background: background }}>{title}</h2>;

export default App;