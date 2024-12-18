'use client';

import { useUser } from '@/app/_components/ContextSession';
import Link from 'next/link';

export default function SigninButton() {
  const { userContext } = useUser();
  return userContext == undefined ? (
    <Link
      className={'btn rounded-lg align-self-end'}
      style={{
        fontSize: '12px',
        border: 'none',
        borderRadius: '20px',
        padding: '8px 12px',
        fontWeight: '500',
        backgroundColor: '#ffffff',
        color: 'black',
      }}
      href="/signin"
    >
      로그인
    </Link>
  ) : (
    <Link
      className={'btn rounded-lg align-self-end'}
      style={{
        fontSize: '12px',
        border: 'none',
        borderRadius: '20px',
        padding: '8px 12px',
        fontWeight: '500',
        backgroundColor: '#ffffff',
        color: 'black',
      }}
      href={`/mypage/${userContext.uid}`}
    >
      마이페이지
    </Link>
  );
}
