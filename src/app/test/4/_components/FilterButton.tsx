'use client';

import ArrowDownSVG from '@/components/svg/ArrowDownSVG';
import useQuery from '@/hooks/useQuery';
import { cardPriceText } from '@/lib/stringUtil';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
  const { createQuery, getParams, getRouteParams } = useQuery();
  const [activeData, setActiveData] = useState([]);

  const handleClick = (data: string | number | Array<string | number>, index: number) => {
    // active
    if (selected) {
      const ind = activeData.indexOf(index);
      if (ind >= 0) {
        setActiveData((val) => val.filter((_, i) => i != ind));
      } else setActiveData((val) => [...val, index]);
    } else {
      setActiveData((val) => [index]);
    }

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

  return (
    <div
      style={{
        width: '80px',
        height: '35px',
        padding: '0',
        backgroundColor: 'white',
        borderRadius: '10px',
        marginRight: '5px',
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
        <span>
          <ArrowDownSVG width={16} />
        </span>
      </div>

      <ul className="dropdown-menu">
        <li>
          {queryData.map((e, i) => {
            return (
              <div
                key={i}
                className={`dropdown-item${activeData.includes(i) ? ' active' : ''}`}
                onClick={() => {
                  handleClick(e, i);
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
      return str == '12' ? '1년 이하' : '2년 이하';
    case '특이사항':
      return str;
  }

  return str;
}
