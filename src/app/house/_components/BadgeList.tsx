'use client';

import FilterBadge from '@/app/house/_components/FilterBadge';
import { useSearchParams } from 'next/navigation';

const badgeList = [
  'min_price',
  'max_price',
  'floor_area_min',
  'floor_area_max',
  'room_count',
  'toilet_count',
  'floor_count',
  'estimate_duration',
  'warranty',
  'tag',
  'is_hut',
  'has_model'
]

export default function FilterBadgeList() {
  const FilterBadges = Object.entries(Object.fromEntries(useSearchParams()));
  console.log(FilterBadges);
  return (
    <div className="d-flex flex-nowrap overflow-auto" style={{ height: '25px', paddingLeft: '10px', width: '3000px' }}>
      {FilterBadges.filter((e) => badgeList.includes(e[0])).map((e, i) => (
        <FilterBadge key={i} name={e[0]} value={e[1]} />
      ))}
    </div>
  );
}
