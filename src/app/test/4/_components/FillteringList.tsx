const filterItems = [
  { label: '침실', key: 'bedrooms' },
  { label: '욕실', key: 'bathrooms' },
  { label: '층', key: 'floors' },
  { label: '가격', key: 'price' },
  { label: '평수', key: 'floor_area' },
  { label: '골조', key: 'structure' },
  { label: 'AS', key: 'after_service' },
  { label: '특이사항', key: 'after_service' },
];

export default function FillteringList() {
  return (
    <div className="row" style={{ margin: '10px 0', backgroundColor: '#F8F8FA', borderRadius: '10px', padding: '5px' }}>
      {/* 필터 아이템 생성 */}
      {filterItems.map((item) => (
        <div
          key={item.key}
          style={{
            width: '80px',
            height: '35px',
            padding: '0',
            backgroundColor: 'white',
            borderRadius: '10px',
            marginRight: '5px',
            display: 'flex', // Flexbox 사용
            flexDirection: 'column', // 수직 정렬
            alignItems: 'center', // 수평 중앙 정렬
            justifyContent: 'center', // 수직 중앙 정렬
          }}
        >
          <div className="row">
            <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: '500', width: 'auto', padding: '2px' }}>
              {item.label}
            </div>
            <img
              src="/down.png"
              width={13}
              height={13}
              alt="down"
              style={{ width: '13px', padding: '0', marginTop: '6px' }}
            />
          </div>
        </div>
      ))}

      {/* 초기화 버튼 */}
      <div
        style={{
          width: 'auto',
          height: '35px',
          padding: '0 30px',
          backgroundColor: 'white',
          borderRadius: '10px',
          marginLeft: 'auto', // 오른쪽 정렬
          alignContent: 'center',
          cursor: 'pointer',
        }}
      >
        <div className="row">
          <div style={{ textAlign: 'center', fontSize: '15px', fontWeight: '500', width: 'auto', padding: '2px' }}>
            초기화
          </div>
          <img
            src="/reset.png"
            width={13}
            height={13}
            alt="reset"
            style={{ width: '13px', padding: '0', marginTop: '7px' }}
          />
        </div>
      </div>
    </div>
  );
}
