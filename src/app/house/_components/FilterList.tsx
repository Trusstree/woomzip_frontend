import FilterButton from '@/app/house/_components/FilterButton';
import FilterResetButton from '@/app/house/_components/FilterResetButton';

export default function FilterList({ filterList }) {
  return (
    <div
      className="row"
      style={{ margin: '10px 0', backgroundColor: '#F8F8FA', borderRadius: '10px', padding: '5px 5px 0 5px' }}
    >
      {filterList.map((e, i) => (
        <FilterButton key={i} label={e.label} queryName={e.queryName} queryData={e.queryData} selected={e.selected} />
      ))}
      <FilterResetButton />
    </div>
  );
}
