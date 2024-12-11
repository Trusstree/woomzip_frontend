'use client';

import React, { useState } from 'react';
import useQueryString from '@/hooks/useQueryString';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SearchComponent() {
  const [q, setQ] = useState('');
  const router = useRouter();
  const { createQuery, getRouteParams } = useQueryString();

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
          style={{
            width: 'auto',
            height: '60px',
            display: 'flex', // Flexbox 사용
            flexDirection: 'column', // 수직 정렬
            alignItems: 'center', // 수평 중앙 정렬
            justifyContent: 'center', // 수직 중앙 정렬
            cursor: 'pointer',
          }}
          data-bs-toggle="modal"
          data-bs-target={`#search_modal`}
          onClick={handleClick}
        >
          <div style={{ float: 'right' }}>
            <Image
              width={30}
              height={28}
              style={{ width: '30px', padding: '0' }}
              src={'/buttonIcons/search.png'}
              alt={'search submit btn'}
            />
            <div
              style={{
                fontSize: '13px',
                fontWeight: '500',
                paddingBottom: '2px',
                marginTop: '7px',
              }}
            >
              검색
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
