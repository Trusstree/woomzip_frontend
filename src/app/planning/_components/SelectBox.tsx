'use client';

import Image from 'next/image';

export default function SelectBox({ title, text, img, value, data, setData }) {
  return (
    <button
      style={{
        width: '100%',
        height: '200px',
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

      <div style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>{title}</div>
      <div style={{ fontSize: '14px', color: 'gray', wordBreak: 'keep-all' }}>{text}</div>
    </button>
  );
}
