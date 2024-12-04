import { checkBatchimEnding } from '@/lib/stringUtil';
import DOMPurify from 'isomorphic-dompurify';

export default function ExplanationList({ pid, houseData }) {
  return (
    <div className="row" style={{ margin: '120px 0' }}>
      <div className="col-12" style={{ fontSize: '22px', marginBottom: '15px', fontWeight: '500' }}>
        {houseData['house_name']}
        {checkBatchimEnding(houseData['house_name'])}...
      </div>
      <div
        className="col-12"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(houseData['house_explanation']) }}
        style={{ fontSize: '16px' }}
      />
    </div>
  );
}
