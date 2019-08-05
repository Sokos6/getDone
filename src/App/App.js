import React from "react";
import "./App.css";
import { Navbar, NavbarBrand } from "reactstrap";

import TodoList from "../TodoList";

const headerTitle = "getDone";

const headerDisplay = (title) => (
    <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">{title}</NavbarBrand>
    </Navbar>
);

const App = () => (
 <div className="App">
 {headerDisplay(headerTitle)}
 <br />
 <TodoList />
 </div>
);

export default App;