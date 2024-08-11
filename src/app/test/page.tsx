'use client';

import { useUser } from '@/app/_components/ContextSession';
import { AddressInputForm } from '@/app/test/_components/AddressInputForm';
import InputImageComponent from '@/components/InputImageComponent';
import { encryptPW } from '@/lib/authUtil';
import React, { Suspense, useState } from 'react';

export default function Page() {
  const { userContext } = useUser();
  const [addr, setAddr] = useState('');
  const [pw, setPW] = useState('');
  const [encryptedPW, setEncryptedPW] = useState('');
  const [images, setImages] = useState([]);

  const handleClick = () => {
    console.log(userContext);
  };

  const handlePW = async (e) => {
    console.log(e.target.value);
    setPW(e.target.value);
    const _en = encryptPW(e.target.value);
    setEncryptedPW(_en);
  };

  return (
    <main>
      <Suspense>
        <div className="btn btn-lg btn-outline-primary" onClick={handleClick}>
          ㅎㅇ
        </div>
        <AddressInputForm addr={addr} name={'addr'} setAddr={setAddr} />
        <input onChange={handlePW}></input>
        <div>ori: {pw}</div>
        <div style={{ wordBreak: 'break-all' }}>en: {encryptedPW}</div>
        <InputImageComponent
          s3Url={'test/images'}
          name={'images'}
          images={images}
          setImages={setImages}
          maxLength={5}
        />
        <button
          onClick={() => {
            console.log(images);
          }}
        >
          이미지
        </button>
      </Suspense>
    </main>
  );
}
