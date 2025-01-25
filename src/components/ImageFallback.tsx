'use client';

import NextImage from 'next/image';
import { useEffect, useState } from 'react';

export default function Image({ src, alt, ...rest }) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
    if (!src?.length) {
      console.error(`alt: ${alt}\nimage src is missing`);
      setImgSrc('/blur_image.png');
    }
  }, [src]);

  return (
    <NextImage
      alt={alt}
      {...rest}
      src={imgSrc}
      onLoad={(result) => {
        // Broken image
        if (result.currentTarget.clientWidth === 0) setImgSrc('/blur_image.png');
      }}
      sizes={'100wh'}
      onError={() => {
        console.error(`alt: ${alt}\nimage src has error causes`);
        setImgSrc('/blur_image.png');
      }}
    />
  );
}
