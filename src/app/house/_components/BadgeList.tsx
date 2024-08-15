import FilterBadge from '@/app/house/_components/FilterBadge';
import { useSearchParams } from 'next/navigation';

export default function FilterBadgeList() {
  const FilterBadges = Object.entries(Object.fromEntries(useSearchParams()));

  return (
    <div className="d-flex flex-nowrap overflow-auto" style={{ height: '25px', paddingLeft: '10px', width: '3000px' }}>
      {FilterBadges.map((e, i) => (
        <FilterBadge key={i} name={e[0]} value={e[1]} />
      ))}
    </div>
  );
}
