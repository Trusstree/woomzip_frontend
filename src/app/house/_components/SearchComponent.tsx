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
    createQuery('q', q);
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
    <div className="row g-1" style={{ width: '250px', padding: '0' }}>
      <div className="col-9">
        <input
          style={{ width: '100%' }}
          placeholder={'제품이나 업체명으로 검색'}
          value={q}
          onChange={handleChange}
          onBlur={handleOutOfFocus}
          onKeyDown={handlePressEnter}
        />
      </div>
      <div className="col-3">
        <div
          className={`btn `}
          style={{ padding: '3px', width: '100%', backgroundColor: '#314FC0', borderRadius: '15px' }}
          data-bs-toggle="modal"
          data-bs-target={`#search_modal`}
          onClick={handleClick}
        >
          <div style={{ cursor: 'pointer' }}>
            <div style={{ fontSize: '15px', color: 'white' }}>검색</div>
          </div>
        </div>
      </div>
    </div>
  );
}
