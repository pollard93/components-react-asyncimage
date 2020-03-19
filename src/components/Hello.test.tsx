import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Hello } from './Hello';

describe('Hello tests', () => {
  it('renders three hello text', () => {
    const wrapper = shallow(<Hello content="Hello" />);
    expect(wrapper.contains(<h1 className="hello__wrap">Hello</h1>)).to.be.true;
  });
});
