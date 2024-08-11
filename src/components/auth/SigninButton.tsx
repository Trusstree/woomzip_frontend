'use client';

import { useUser } from '@/app/_components/ContextSession';
import Link from 'next/link';

export default function SigninButton() {
  const { userContext } = useUser();
  return userContext == undefined ? (
    <Link className={'btn px-4 py-2 btn rounded-lg fw-bold align-self-end'} style={{ fontSize: '14px' }} href="/signin">
      로그인/회원가입
    </Link>
  ) : (
    <Link
      className={'btn px-4 py-2 btn rounded-lg fw-bold align-self-end'}
      style={{ fontSize: '14px' }}
      href={`/mypage/${userContext.uid}`}
    >
      마이페이지
    </Link>
  );
}
