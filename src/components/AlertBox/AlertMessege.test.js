import React from "react";
import sinon from "sinon";
import { shallow } from "enzyme";
import AlertMessage from "./AlertMessage";
import { messageFromStatus } from "../../utils";
import toJson from "enzyme-to-json";

describe("rendering components", () => {
  it("renders without crashing", () => {
    const status = 200;
    const { message, variant } = messageFromStatus(status);
    shallow(<AlertMessage message={message} variant={variant} />);
  });
});

describe("Rendering status text", () => {
  it("renders alert on status 404", () => {
    const status = 404;
    const { message, variant } = messageFromStatus(status);
    const wrapper = shallow(
      <AlertMessage message={message} variant={variant} />
    );
    expect(
      wrapper.contains("Client error: Server couldn't find what you want")
    ).toEqual(true);
  });
  it("renders alert on status 408", () => {
    const status = 408;
    const { message, variant } = messageFromStatus(status);
    const wrapper = shallow(
      <AlertMessage message={message} variant={variant} />
    );
    expect(wrapper.contains("Client error: Request timeout")).toEqual(true);
  });
  it("renders alert on status 500", () => {
    const status = 500;
    const { message, variant } = messageFromStatus(status);
    const wrapper = shallow(
      <AlertMessage message={message} variant={variant} />
    );
    expect(wrapper.contains("Internal Server Error. Try again later")).toEqual(
      true
    );
  });
  it("renders alert on status 504", () => {
    const status = 504;
    const { message, variant } = messageFromStatus(status);
    const wrapper = shallow(
      <AlertMessage message={message} variant={variant} />
    );
    expect(
      wrapper.contains("Unidentified server error. Conntact with our support")
    ).toEqual(true);
  });
});

// describe("Click close logic", () => {
//   const wrapper = shallow(<AlertMessage status={404} />);
//   const closeIcon = wrapper.find("#closeIcon");
//   closeIcon.simulate("click");
//   // expect(wrapper.find('#closeIcon')).to.toEqual(true)
// });

it("simulates click events", () => {
  const spy = sinon.spy();
  const status = 404;
  const { message, variant } = messageFromStatus(status);
  const wrapper = shallow(
    <AlertMessage message={message} variant={variant} onClose={spy} />
  );
  wrapper.find(".closeIcon").simulate("click");
  expect(spy.calledOnce).toBe(true);
});

describe("snaphot", () => {
  it("MessegeBox snapshot", () => {
    const status = 404;
    const { message, variant } = messageFromStatus(status);
    const boxAlert = shallow(
      <AlertMessage message={message} variant={variant} onClose={() => {}} />
    );
    expect(toJson(boxAlert)).toMatchSnapshot();
  });
});
