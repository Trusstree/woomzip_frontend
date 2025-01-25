'use client';

import React, { useState } from 'react';
import useQueryString from '@/hooks/useQueryString';
import { useRouter } from 'next/navigation';

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
    <div className="row col-md-6 col-12" style={{ alignItems: 'center', padding: '0' }}>
      <div className="col-10">
        <input
          style={{ height: '40px', width: '95%', marginLeft: '4%' }}
          placeholder={' 찾고 싶은 내용을 검색해보세요'}
          value={q}
          onChange={handleChange}
          onBlur={handleOutOfFocus}
          onKeyDown={handlePressEnter}
        />
      </div>
      <div className="col-2" style={{ alignItems: 'right', padding: '0' }}>
        <div
          onClick={handleClick}
          style={{
            width: 'auto',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              fontSize: '13px',
              fontWeight: '500',
              backgroundColor: '#ffffff',
              color: 'black',
              border: '1px solid lightgray',
              padding: '5px 10px',
              borderRadius: '20px',
              textAlign: 'center',
            }}
          >
            검색
          </div>
        </div>
      </div>
    </div>
  );
}
