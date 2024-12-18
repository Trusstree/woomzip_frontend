'use client';

import useQueryString from '@/hooks/useQueryString';
import { arraySort } from '@/lib/functionUtil';
import { cardPriceText } from '@/lib/stringUtil';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function parseValue(name: string | Array<string>, value: any) {
  if (typeof name == 'object') {
    if (name[0] == 'min_price' && name[1] == 'max_price')
      return cardPriceText(value[0]) + ' ~ ' + cardPriceText(value[1]);
    if (name[0] == 'floor_area_min' && name[1] == 'floor_area_max') return value[0] + '평 ~ ' + value[1] + '평';
  } else {
    if (name == 'room_count') return arraySort(value.split(',')) + '개의 침실';
    if (name == 'toilet_count') return arraySort(value.split(',')) + '개의 욕실';
    if (name == 'floor_count') return arraySort(value.split(',')) + '층';
    if (name == 'estimate_duration') return value + '개월 이하의 제작 소요기간';
    if (name == 'warranty') return Math.round(value / 12) + '년 이상의 AS 보증기간';
    if (name == 'frame') return arraySort(value.split(','));
    if (name == 'specificity') return arraySort(value.split(','));
    if (name == 'tag') return value;
    if (name == 'is_hut') return '농막';
    if (name == 'has_model') return '농촌 체류형 쉼터';
    if (name == 'page') return '';

    return `${name}: ${value}`;
  }
}

export default function FilterBadge({ name, value }) {
  const router = useRouter();
  const { createQuery, getRouteParams } = useQueryString();

  const handleClick = () => {
    if (typeof name == 'object') {
      createQuery(name[0]);
      createQuery(name[1]);
    } else createQuery(name);
    router.push(getRouteParams());
  };

  return (
    <div
      style={{
        backgroundColor: '#F5F7FF',
        marginRight: '5px',
        fontSize: '14px',
        fontWeight: '400',
        border: '1px solid #314FC0',
        borderRadius: '10px',
        padding: '0 4px 0 5px',
        height: '25px',
        display: 'flex', // Flexbox 사용
        flexDirection: 'row', // 수직 정렬
        alignItems: 'center', // 수평 중앙 정렬
        justifyContent: 'center', // 수직 중앙 정렬
      }}
    >
      <span style={{ fontWeight: 'semibold', padding: '0 3px' }}>{parseValue(name, value)}</span>
      <Image
        className="btn"
        src="/x.png"
        width={14}
        height={14}
        alt="down"
        style={{ width: '14px', padding: '0' }}
        onClick={handleClick}
      />
    </div>
  );
}
