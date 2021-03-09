import React, { useEffect, useState } from 'react';
import { AsyncImageProps } from './AsyncImage';

const AsyncImageInner = (props: AsyncImageProps) => {
  const {
    fullUrl,
    imageAlt,
    imageClassName = '',
    imageStyles = {},
  } = props;

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => setLoaded(true);
    image.src = fullUrl;
  }, []);

  return (
    <img
      src={fullUrl}
      alt={imageAlt}
      className={`asyncImage__image ${loaded ? 'asyncImage__imageLoaded' : ''} ${imageClassName}`}
      style={imageStyles}
    />
  );
};

export default AsyncImageInner;
