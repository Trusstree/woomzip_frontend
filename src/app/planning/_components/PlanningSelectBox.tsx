'use client';

import Image from 'next/image';

export default function SelectBox({
  title,
  text,
  img,
  value,
  data,
  setData,
  width,
  height,
}: {
  title: any;
  text?: any;
  img?: any;
  value: any;
  data: any;
  setData: any;
  width: string;
  height: string;
}) {
  return (
    <button
      style={{
        width: width, //img ? '100%' : '100px',
        height: height, //img ? '200px' : text ? '100px' : '50px',
        borderRadius: '10px',
        borderStyle: 'solid',
        margin: '5px',
        backgroundColor: data == value ? '#F5F7FF' : 'white',
        borderWidth: '2px',
        borderColor: data == value ? '#314FC0' : 'gray',
      }}
      onClick={() => {
        setData(value);
      }}
    >
      {img && (
        <div
          style={{ width: '100%', height: '100px', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}
        >
          <Image
            style={{ width: '120px', objectFit: 'cover', height: 'auto' }}
            src={img}
            width={120}
            height={100}
            unoptimized={true}
            alt={'설명 로고'}
          />
        </div>
      )}

      <div style={{ fontSize: '16px', fontWeight: '600', marginTop: img ? '10px' : '0px' }}>{title}</div>
      {text && <div style={{ fontSize: '14px', color: 'gray', wordBreak: 'keep-all' }}>{text}</div>}
    </button>
  );
}
