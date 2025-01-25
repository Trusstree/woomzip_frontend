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
      onLoadingComplete={(result) => {
        // Broken image
        if (result.naturalWidth === 0) setImgSrc('/blur_image.png');
      }}
      onError={() => {
        console.error(`alt: ${alt}\nimage src has error causes`);
        setImgSrc('/blur_image.png');
      }}
    />
  );
}
