
import React from 'react';
import { storiesOf } from '@storybook/react';
import AsyncImage from './AsyncImage';
import './AsyncImage.stories.css';

storiesOf('AsyncImage', module)
  .add('AsyncImage - containerClassName', () => (
    <AsyncImage
      splashUrl="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2&q=80"
      fullUrl="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      imageAlt="Alt text here"
      containerClassName="containerClass"
    />
  ))
  .add('AsyncImage - containerStyles', () => (
    <AsyncImage
      splashUrl="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2&q=80"
      fullUrl="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
      imageAlt="Alt text here"
      containerStyles={{
        width: '500px',
        height: '500px',
      }}
    />
  ));
