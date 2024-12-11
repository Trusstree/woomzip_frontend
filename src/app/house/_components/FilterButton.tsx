'use client';

import ArrowDownSVG from '@/components/svg/ArrowDownSVG';
import useQueryString from '@/hooks/useQueryString';
import { cardPriceText } from '@/lib/stringUtil';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function FilterDropdown({
  label,
  queryName,
  queryData,
  selected,
}: {
  label: string;
  queryName: string | Array<string>;
  queryData: Array<string | number> | Array<Array<string | number>>;
  selected?: boolean;
}) {
  const router = useRouter();
  const { createQuery, getParams, getRouteParams } = useQueryString();
  const searchParams = useSearchParams();

  const handleClick = (data: string | number | Array<string | number>) => {
    // query
    createQuery('page');
    if (typeof data == 'object') {
      createQuery(queryName[0], data[0].toString());
      createQuery(queryName[1], data[1].toString());
    } else {
      const _data = data.toString();
      if (selected) {
        let newValue = getParams()
          .get(queryName as string)
          ?.split(',');
        if (!newValue) {
          newValue = [_data];
        } else if (newValue.includes(_data)) {
          const ind = newValue.indexOf(_data);
          newValue = newValue.filter((_, i) => i !== ind);
        } else {
          newValue = [...newValue, _data];
        }
        createQuery(queryName as string, newValue.join(','));
      } else {
        createQuery(queryName as string, _data.toString());
      }
    }
    router.push(getRouteParams());
  };

  const isActive = (e: string | number | Array<string | number>) => {
    if (typeof queryName != typeof e) return false;

    if (typeof queryName == 'object') {
      const _data0 = searchParams.get(queryName[0]);
      const _data1 = searchParams.get(queryName[1]);
      if (!_data0 || !_data1) return false;
      else if (_data0 == e[0] && _data1 == e[1]) return true;
    } else {
      const _data = searchParams.get(queryName);
      if (!_data) return false;
      else {
        const _parsedData = _data.split(',').filter((e) => e.length > 0);
        if (_parsedData.includes(e.toString())) return true;
      }
    }

    return false;
  };

  useEffect(() => {}, [searchParams]);

  return (
    <div
      style={{
        width: '90px',
        height: '35px',
        padding: '0',
        backgroundColor: 'white',
        borderRadius: '10px',
        marginRight: '5px',
        marginBottom: '5px',
        display: 'flex', // Flexbox 사용
        flexDirection: 'column', // 수직 정렬
        alignItems: 'center', // 수평 중앙 정렬
        justifyContent: 'center', // 수직 중앙 정렬
      }}
      className={'dropdown'}
      // onClick={handleClick}
    >
      <div
        style={{ textAlign: 'center', fontSize: '15px', fontWeight: '500', width: 'auto', padding: '2px' }}
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
      >
        {label}
        <span style={{ paddingLeft: '4px' }}>
          <ArrowDownSVG width={16} strokeWidth={2} />
        </span>
      </div>

      <ul className="dropdown-menu">
        <li>
          {queryData.map((e, i) => {
            return (
              <div
                key={i}
                className={`dropdown-item${isActive(e) ? ' active' : ''}`}
                onClick={() => {
                  handleClick(e);
                }}
              >
                {prettierText(label, e)}
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
}

function prettierText(label: string, str: string | Array<string>) {
  switch (label) {
    case '침실':
      return `${str}개`;
    case '욕실':
      return `${str}개`;
    case '층':
      return `${str}층`;
    case '가격':
      return `${cardPriceText(str[0])} ~ ${cardPriceText(str[1])}`;
    case '평수':
      return `${Number(str[0]).toFixed(0)}평 ~ ${str[1]}평`;
    case '골조':
      return str;
    case 'AS':
      return str == '12' ? '1년 이상' : '2년 이상';
    case '특이사항':
      return str;
  }

  return str;
}
