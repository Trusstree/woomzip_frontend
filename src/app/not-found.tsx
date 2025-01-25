'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      style={{ minHeight: '100vh' }}
      className="d-flex text-center flex-column justify-content-center container text-center my-5 d-flex flex-column"
    >
      <h1 className="my-5 py-5">올바른 접근이 아닙니다.</h1>
      <h3 className="my-5 py-3">
        죄송합니다, 예기치 못한 이유로 잘못된 url로 접근이 되었습니다.
        <br />
        이전으로 돌아가서 작업을 진행해주세요!
      </h3>
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
