'use client';

import { useUser } from '@/app/_components/ContextSession';
import Link from 'next/link';

export default function SigninButton() {
  const { userContext } = useUser();
  return userContext == undefined ? (
    <Link
      className={'btn rounded-lg align-self-end'}
      style={{ fontSize: '15px', border: 'none', fontWeight: '500' }}
      href="/signin"
    >
      로그인/회원가입
    </Link>
  ) : (
    <Link
      className={'btn rounded-lg align-self-end'}
      style={{ fontSize: '15px', border: 'none', fontWeight: '500' }}
      href={`/mypage/${userContext.uid}`}
    >
      마이페이지
    </Link>
  );
}
