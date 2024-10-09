'use client';

import useQuery from '@/hooks/useQuery';
import { arraySort } from '@/lib/functionUtil';
import { cardPriceText } from '@/lib/stringUtil';
import { useRouter } from 'next/navigation';

function parseValue(name: string, value: any) {
  if (name == 'min_price') return '최소 ' + cardPriceText(value);
  if (name == 'max_price') return '최대 ' + cardPriceText(value);
  if (name == 'floor_area_min') return '최소 ' + value + '평';
  if (name == 'floor_area_max') return '최대 ' + value + '평';
  if (name == 'room_count') return arraySort(value.split(',')) + '개의 침실';
  if (name == 'toilet_count') return arraySort(value.split(',')) + '개의 욕실';
  if (name == 'floor_count') return arraySort(value.split(',')) + '층';
  if (name == 'estimate_duration') return value + '개월 이하의 제작 소요기간';
  if (name == 'warranty') return Math.round(value / 12) + '년 이상의 AS 보증기간';
  if (name == 'tag') return value;
  if (name == 'is_hut') return '농막';
  if (name == 'has_model') return '농촌 체류형 쉼터';
  if (name == 'page') return '';
  return `${name}: ${value}`;
}

export default function FilterBadge({ name, value }) {
  const router = useRouter();
  const { createQuery, getRouteParams } = useQuery();

  const handleClick = () => {
    createQuery(name);
    router.push(getRouteParams());
  };

  return (
    <div
      style={{
        backgroundColor: '#314FC0',
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
      <span style={{ fontWeight: 'semibold', color: '#ffffff', padding: '0 3px' }}>{parseValue(name, value)}</span>
      <img
        className="btn"
        src="/x.png"
        width={13}
        height={13}
        alt="down"
        style={{ width: '13px', padding: '0' }}
        onClick={handleClick}
      />
    </div>
  );
}
