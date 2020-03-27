import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("renders the component to the screen", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists).toBe(true);
  });
});
