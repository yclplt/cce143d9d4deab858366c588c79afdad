import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Test Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    button.find("Button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
