'use client';

import { useRouter } from 'next/navigation';

export default function ErrorPage({ error }: { error: Error }) {
  const router = useRouter();
  return (
    <div
      className="d-flex text-center flex-column justify-content-center container text-center my-5 d-flex flex-column"
      style={{ minHeight: '100vh' }}
    >
      <h1 className="my-5">예상치 못한 오류가 발생했습니다.</h1>
      <div>{error.message}</div>
      <button
        className="btn btn-secondary my-5 py-3"
        onClick={() => {
          router.back();
        }}
      >
        뒤로가기
      </button>
    </div>
  );
}
