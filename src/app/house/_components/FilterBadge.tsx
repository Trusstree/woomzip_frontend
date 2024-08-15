'use client';

import useQuery from '@/hooks/useQuery';
import { arraySort } from '@/lib/functionUtil';
import { cardPriceText } from '@/lib/stringUtil';
import { useRouter } from 'next/navigation';

const dict = {
  q: '검색어',
  min_price: '최소 가격',
  max_price: '최대 가격',
  floor_area_min: '최소 평수',
  floor_area_max: '최대 평수',
  room_count: '방',
  toilet_count: '화장실',
  floor_count: '층',
  specificity: '특이사항',
  frame: '골조구조',
  estimate_duration: '제작 소요기간',
  warranty: 'AS 보증기간',
};

function parseValue(name, value) {
  if (name == 'min_price') return '최소 ' + cardPriceText(value);
  if (name == 'max_price') return '최대 ' + cardPriceText(value);
  if (name == 'floor_area_min') return '최소 ' + value + '평';
  if (name == 'floor_area_max') return '최대 ' + value + '평';
  if (name == 'room_count') return arraySort(value.split(',')) + '개의 침실';
  if (name == 'toilet_count') return arraySort(value.split(',')) + '개의 욕실';
  if (name == 'floor_count') return arraySort(value.split(',')) + '층';
  if (name == 'estimate_duration') return value + '개월 이하의 제작 소요기간';
  if (name == 'warranty') return Math.round(value / 12) + '년 이상의 AS 보증기간';
  return value;
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
      className="d-flex align-items-center"
      style={{
        margin: '0 5px',
        fontSize: '14px',
        fontWeight: '400',
        border: '1px solid #314FC0',
        borderRadius: '15px',
        padding: '0 4px 0 5px',
        height: '25px',
      }}
    >
      <span style={{ fontWeight: '600', marginLeft: '5px', color: '#314FC0', padding: '0' }}>
        {parseValue(name, value)}
      </span>
      <div
        className="btn"
        style={{ color: 'gray', border: 'none', margin: '0', padding: '1px 5px' }}
        onClick={handleClick}
      >
        x
      </div>
    </div>
  );
}
// {dict[name] ? dict[name] : name}: {parseValue(name, value)}
