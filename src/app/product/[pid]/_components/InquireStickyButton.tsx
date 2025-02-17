import Link from 'next/link';

export default function InquireStickyButton({ pid }: { pid: number }) {
  return (
    <div
      style={{
        position: 'fixed', // ✅ 화면 하단에 고정
        left: '50%', // ✅ 버튼을 중앙 정렬
        bottom: '50px',
        transform: 'translateX(-50%)', // ✅ 정확히 중앙 정렬
        zIndex: '10', // ✅ 다른 요소 위에 표시
      }}
    >
      <Link href={`/inquire/product/?product_id=${pid}`}>
        <button
          className="btn"
          style={{
            border: 'none',
            borderRadius: '20px',
            backgroundColor: '#4067F8',
            color: '#ffffff',
            fontSize: '14px',
            fontWeight: '500',
            padding: '10px 70px',
            margin: '0 auto',
          }}
        >
          문의하기
        </button>
      </Link>
    </div>
  );
}
