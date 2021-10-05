import { shallow } from "enzyme";
import { Input } from "../components/Input";
import React from "react";

describe("Input tests", () => {
  it("should render component with initial state", () => {
    const props = {
      handleClick: jest.fn(),
    };
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find("input").text()).toBe("");
    expect(wrapper.find("span").length).toBe(0);
    expect(wrapper.find("button").length).toBe(0);
  });

  it("should render span with warning if input doesn't includ @", () => {
    const props = {
      handleClick: jest.fn(),
    };
    const wrapper = shallow(<Input {...props} />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: "not an email" } });
    const warningSpan = wrapper.find("span");
    expect(wrapper.find("span").length).toBe(1);
    expect(warningSpan.text()).toBe('Email should have "@" symbol');
    expect(wrapper.find("button").length).toBe(0);
  });

  it("shouldn't render span with valid email, but should render button for checking", () => {
    const props = {
      handleClick: jest.fn(),
    };
    const wrapper = shallow(<Input {...props} />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: "test@test.com" } });
    expect(wrapper.find("span").length).toBe(0);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should hid span with warning when input will inclue @", () => {
    const props = {
      handleClick: jest.fn(),
    };
    const wrapper = shallow(<Input {...props} />);
    wrapper
      .find("input")
      .simulate("change", { target: { value: "not an email" } });
    expect(wrapper.find("span").length).toBe(1);

    wrapper
      .find("input")
      .simulate("change", { target: { value: "correct@email" } });
    expect(wrapper.find("span").length).toBe(0);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("should call checking method after click", () => {
    const mockHandleClick = jest.fn();
    const props = {
      handleClick: mockHandleClick,
    };
    const wrapper = shallow(<Input {...props} />);
    wrapper
      .find("input")
      .simulate("change", { tarwget: { value: "test@test.com" } });
    wrapper.find("button").simulate("click");
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
