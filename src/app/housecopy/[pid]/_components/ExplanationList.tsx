'use client';

export default function ExplanationList({ pid, houseData }) {
  return (
    <div className="row" style={{ margin: '120px 0' }}>
      <div className="col-12" style={{ fontSize: '22px', marginBottom: '15px' }}>
        {houseData['house_name']} 제품 설명
      </div>
      <div className="col-12" dangerouslySetInnerHTML={{ __html: houseData['house_explanation'] }} />
    </div>
  );
}
