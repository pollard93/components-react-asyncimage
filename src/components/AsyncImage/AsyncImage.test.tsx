import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AsyncImage from './AsyncImage';

describe('Hello tests', () => {
  it('test render', () => {
    const wrapper = shallow(
      <AsyncImage
        splashUrl="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2&q=80"
        fullUrl="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        imageAlt="Alt text here"
        containerStyles={{
          width: '500px',
          height: '500px',
        }}
      />,
    );
    expect(wrapper.contains(<h1 className="hello__wrap">Hello</h1>)).to.be.true;
  });
});
