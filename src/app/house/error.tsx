'use client';

import { useRouter } from 'next/navigation';

export default function ErrorPage({ error }) {
  const router = useRouter();
  return (
    <div
      className="d-flex text-center flex-column justify-content-center container text-center my-5 d-flex flex-column"
      style={{ minHeight: '100vh' }}
    >
      <h1>움집 제품을 불러올 수 없습니다..</h1>
      <div>
        새로고침을 시도해보세요!
        <br />
        <button
          className="btn btn-secondary mb-3"
          onClick={() => {
            router.replace('/product');
          }}
        >
          새로고침
        </button>
        <br />
        새로고침을 했음에도 여전히 해당 페이지가 나온다면,
        <br />
        서버 점검 등의 이유로 이용이 불가능한 상태입니다.
        <br />
        잠시 후에 다시 시도해주세요, 죄송합니다.
        <br />
      </div>
    </div>
  );
}
