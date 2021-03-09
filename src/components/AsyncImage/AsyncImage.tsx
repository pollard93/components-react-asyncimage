import React, { useEffect, useState, FC, ReactNode } from 'react';
import './AsyncImage.css';
import AsyncImageInner from './AsyncImageInner';


export interface AsyncImageProps {
  splashUrl: string;
  fullUrl: string;
  imageAlt: string;
  containerClassName?: string;
  containerStyles?: React.CSSProperties;
  imageClassName?: string;
  imageStyles?: React.CSSProperties;
  fallbackComponent?: ReactNode; // Shown if fullUrl is null
}


const AsyncImage: FC<AsyncImageProps> = (props) => {
  const {
    splashUrl,
    fullUrl,
    containerClassName = '',
    containerStyles = {},
    fallbackComponent,
  } = props;


  const [urls, setUrls] = useState([]);
  useEffect(() => {
    if (fullUrl && (urls.length === 0 || urls[urls.length - 1] !== fullUrl)) {
      const newUrls = [...urls, fullUrl];
      setUrls(newUrls);
    }
  }, [fullUrl]);


  return (
    <div>
      {
        fullUrl
          ? (
            <div
              className={`asyncImage__container ${containerClassName}`}
              style={{
                backgroundImage: `url(${splashUrl})`,
                ...containerStyles,
              }}
            >
              {urls.map((u, i) => (
                <AsyncImageInner
                  key={`${u}-${i}`}
                  {...props}
                  fullUrl={u}
                />
              ))}
            </div>
          )
          : fallbackComponent
      }
    </div>
  );
};

export default AsyncImage;
