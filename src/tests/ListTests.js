import { shallow, mount } from "enzyme";
import { List } from "../components/List";
import React from "react";

const listWithNeededLength = (length) => {
  let result = [];
  for (let i; i < length; i++) {
    let rand = Math.random().toString().substring(2, 6);
    result.push({
      name: `test-name-${rand}`,
      email: `test-email-${rand}@mail.com`,
    });
  }

  return result;
};

describe("List tests", () => {
  it("should render collapsed list", () => {
    const props = {
      items: listWithNeededLength(5),
      collapsedByDefault: true,
    };
    const wrapper = mount(<List {...props} />);
    expect(wrapper.find("button").length).toBe(1);
    expect(wrapper.find("button").text()).toBe("more");

    const items = wrapper.find("li");
    expect(items.length).toBe(3);

    items.forEach((item, index) => {
      expect(item.find("h4").text()).toBe(props.items[index].name);
      expect(item.find("h5").text()).toBe(props.items[index].email);
    });
  });
});
