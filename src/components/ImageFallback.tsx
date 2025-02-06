import NextImage from 'next/image';

export default function Image({ src, alt, ...rest }) {
  //const [imgSrc, setImgSrc] = useState(src);

  // useEffect(() => {
  //   setImgSrc(src);
  //   if (!src?.length) {
  //     console.error(`alt: ${alt}\nimage src is missing`);
  //     setImgSrc('/blur_image.png');
  //   }
  // }, [src]);

  return (
    <NextImage
      {...rest} 
      alt={alt}
      src={src??'/blur_image.png'}
      placeholder='blur'
      sizes={'100wh'}
      // onLoad={(result) => {
      //   // Broken image
      //   if (result.currentTarget.clientWidth === 0) setImgSrc('/blur_image.png');
      // }}
      // onError={() => {
      //   console.error(`alt: ${alt}\nimage src has error causes`);
      //   setImgSrc('/blur_image.png');
      // }}
    />
  );
}
