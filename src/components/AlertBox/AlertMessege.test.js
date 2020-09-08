import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AlertMessage from './AlertMessage'
import toJson from "enzyme-to-json";


describe("rendering components", () => {
  it('renders without crashing', () => {
    shallow(<AlertMessage />);
  });
})

describe("Rendering status text", () => {
  it('renders alert on status 404', () => {
    const wrapper = shallow(<AlertMessage status={404} />);
    expect(wrapper.contains("Client error: Server couldn't find what you want")).toEqual(true);
  })
  it('renders alert on status 408', () => {
    const wrapper = shallow(<AlertMessage status={408} />);
    expect(wrapper.contains("Client error: Request timeout")).toEqual(true);
  })
  it('renders alert on status 500', () => {
    const wrapper = shallow(<AlertMessage status={500} />);
    expect(wrapper.contains("Internal Server Error. Try again later")).toEqual(true);
  })
  it('renders alert on status 504', () => {
    const wrapper = shallow(<AlertMessage status={504} />);
    expect(wrapper.contains("Unidentified server error. Conntact with our support")).toEqual(true);
  })
})

describe("Click close logic", () => {
  const wrapper = shallow(<AlertMessage status={404} />)
  const closeIcon = wrapper.find("#closeIcon")
  closeIcon.simulate("click")
  // expect(wrapper.find('#closeIcon')).to.toEqual(true)
})

describe("snaphot", () => {
  it('MessegeBox snapshot', () => {
    const boxAlert = shallow(<AlertMessage status={404} />);
    expect(toJson(boxAlert)).toMatchSnapshot();
  })
})


