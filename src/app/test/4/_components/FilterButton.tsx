export default function FilterButton({ label, data }) {
  return (
    <div
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
          {label}
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
  );
}
