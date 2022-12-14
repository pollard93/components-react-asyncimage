
import React, { useState } from 'react';
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
  ))
  .add('AsyncImage - fallbackComponent', () => (
    <AsyncImage
      splashUrl="https://broken"
      fullUrl="https://broken"
      fallbackComponent={<div style={{ width: '100%', height: '100%' }}>Fallback component</div>}
      imageAlt="Alt text here"
      containerStyles={{
        width: '500px',
        height: '500px',
      }}
    />
  ))
  .add('AsyncImage - dynamically update full url', () => {
    const TestComponent = () => {
      const [url, setUrl] = useState('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80');

      return (
        <div>
          <AsyncImage
            splashUrl="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2&q=80"
            fullUrl={url}
            imageAlt="Alt text here"
            containerClassName="containerClass"
          />
          <button
            onClick={() => {
              setUrl(`https://source.unsplash.com/random/?${Math.floor(Math.random() * 100)}`);
            }}
          >
            Change image
          </button>
        </div>
      );
    };

    return <TestComponent />;
  });
