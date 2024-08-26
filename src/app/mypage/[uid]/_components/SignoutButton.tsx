'use client';

import { signout } from '@/actions/auth/authAction';
import { useUser } from '@/app/_components/ContextSession';
import { useRouter } from 'next/navigation';

export default function SignoutButton() {
  const router = useRouter();
  const { setUserContext } = useUser();

  return (
    <div
      style={{}}
      onClick={() => {
        signout();
        setUserContext(undefined);
        router.replace('/');
      }}
    >
      <span
        className="btn"
        style={{
          wordBreak: 'keep-all',
          color: '#FF2741',
          fontSize: '13px',
          padding: '1px 1px 1px 10px',
          marginTop: '10px',
        }}
      >
        로그아웃
      </span>
    </div>
  );
}
