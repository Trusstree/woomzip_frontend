import FilterButton from '@/app/housecopy/_components/FilterButton';
import FilterResetButton from '@/app/housecopy/_components/FilterResetButton';

export default function FilterList({ filterList }) {
  return (
    <div className="row">
      {filterList.map((e, i) => (
        <FilterButton key={i} label={e.label} queryName={e.queryName} queryData={e.queryData} selected={e.selected} />
      ))}
      <FilterResetButton />
    </div>
  );
}
