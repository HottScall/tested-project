import React from "react";
import SearchBar from "./SearchBar";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("SearchBar", () => {
  it("renders upon loading", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });

  it("ensure user text is echoed", () => {
    const wrapper = shallow(<SearchBar userSearchTerm={() => {}} />);
    wrapper.find("input").simulate("change", {
      target: { value: "hello" }
    });
    expect(wrapper.find("input").props().value).toEqual("hello");
  });

  // it("when the form is submitted the event is cancelled", () => {
  //   const wrapper = shallow(<SearchBar />);
  //   let prevented = false;
  //   wrapper.find("form").simulate("submit", {
  //     preventDefault: () => {
  //       prevented = true;
  //     }
  //   });
  //   expect(prevented).toBe(true);
  // });
});
