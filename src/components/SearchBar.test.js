import React from "react";
import SearchBar from "./SearchBar";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("SearchBar", () => {
  it("renders upon loading", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
