'use client';

import { useRouter } from 'next/navigation';

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="my-5 py-5 d-flex text-center flex-column justify-content-center">
      <h1 className="my-5 py-5">잘못된 페이지를 불러왔습니다.</h1>
      <div className="mb-5 py-5">해당 페이지 링크가 옳은지 다시 한 번 확인해주세요!</div>
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
