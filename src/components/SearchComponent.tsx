'use client';

import React, { useState } from 'react';
import useQuery from '@/hooks/useQuery';
import { useRouter } from 'next/navigation';
import styles from '@/styles/SearchComponent.module.css'; // 외부 CSS 파일 import
import Image from 'next/image';

export default function SearchComponent() {
  const [q, setQ] = useState('');
  const router = useRouter();
  const { createQuery, getRouteParams } = useQuery();

  const handleChange = (e) => {
    setQ(e.target.value);
  };

  const handleClick = () => {
    router.push(getRouteParams());
  };

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      createQuery('q', q);
      router.push(getRouteParams());
    }
  };

  const handleOutOfFocus = () => {
    createQuery('q', q);
    router.push(getRouteParams());
  };

  return (
    <div className="row col-md-4 col-12" style={{ alignItems: 'center', padding: '0' }}>
      <div className="col-11">
        <input
          style={{ height: '40px', width: '95%', marginLeft: '4%' }}
          placeholder={' 찾고 싶은 내용을 검색해보세요'}
          value={q}
          onChange={handleChange}
          onBlur={handleOutOfFocus}
          onKeyDown={handlePressEnter}
        />
      </div>
      <div className="col-1" style={{ alignItems: 'right', padding: '0' }}>
        <div
          className={`btn`}
          style={{ paddingLeft: '0' }}
          data-bs-toggle="modal"
          data-bs-target={`#search_modal`}
          onClick={handleClick}
        >
          <div style={{ float: 'right', padding: '0' }}>
            <Image width={30} height={30} src={'/buttonIcons/search.png'} alt={'search submit btn'} />
            <div style={{ fontSize: '15px' }}>검색</div>
          </div>
        </div>
      </div>
    </div>
  );
}
