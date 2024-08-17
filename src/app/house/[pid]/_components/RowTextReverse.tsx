import { parseSpecificationInfo } from '@/lib/parseUtil';

export default function RowTextReverse({ name, data }: { name: string; data: string }) {
  return (
    <div className="row g-1" style={{ margin: '5px 0' }}>
      <div className="col-8" style={{ fontSize: '15px', fontWeight: '500' }}>
        {name}
      </div>
      <div className="col-4" style={{ fontSize: '15px', fontWeight: '330' }}>
        {data}
      </div>
    </div>
  );
}
