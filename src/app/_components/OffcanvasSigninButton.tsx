'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@/app/_components/ContextSession';
import Link from 'next/link';

export default function SigninButton() {
  const { userContext } = useUser();
  const router = useRouter();

  return userContext == undefined ? (
    <div data-bs-dismiss="offcanvas" aria-label="Close">
      <button
        className={'btn rounded-lg fw-bold align-self-end'}
        style={{ fontSize: '28px', border: 'none' }}
        onClick={() => {
          router.push('/signin');
        }}
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        로그인/회원가입
      </button>
    </div>
  ) : (
    <div data-bs-dismiss="offcanvas" aria-label="Close">
      <Link
        className={'btn rounded-lg fw-bold align-self-end'}
        style={{ fontSize: '25px', border: 'none' }}
        href={`/mypage/${userContext.uid}`}
      >
        마이페이지
      </Link>
    </div>
  );
}
