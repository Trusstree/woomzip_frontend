import FilterButton from '@/app/product/_components/FilterButton';
import FilterResetButton from '@/app/product/_components/FilterResetButton';

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
