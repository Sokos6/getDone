import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import NewTodo from "./NewTodo";

describe(NewTodo, () => {
  const mockAddTodo = jest.fn();
  const component = shallow(<NewTodo addTodo={mockAddTodo} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NewTodo addTodo={mockAddTodo} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders and matches our snapshot", () => {
    const component = renderer.create(<NewTodo addTodo={mockAddTodo} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("render a Todo component", () => {
    expect(component.contains(<div className="NewTodo" />));
  });
});
