'use client';

import { useUser } from '@/app/_components/ContextSession';
import Link from 'next/link';

export default function SigninButton(props) {
  console.log(props);
  const { userContext } = useUser();
  return userContext == undefined ? (
    <Link
      className={'btn rounded-lg fw-bold align-self-end'}
      style={{ fontSize: '14px', border: 'none' }}
      href="/signin"
    >
      로그인/회원가입
    </Link>
  ) : (
    <Link
      className={'btn rounded-lg fw-bold align-self-end'}
      style={{ fontSize: '14px', border: 'none' }}
      href={`/mypage/${userContext.uid}`}
    >
      마이페이지
    </Link>
  );
}
