'use client';

import { signout } from '@/actions/auth/authAction';
import { useUser } from '@/app/_components/ContextSession';
import { useRouter } from 'next/navigation';

export default function EditProfileButton({ uid }) {
  const router = useRouter();
  const { setUserContext } = useUser();
  return (
    <div
      style={{}}
      onClick={() => {
        router.replace(`/mypage/${uid}?method=edit`);
      }}
    >
      <span className="btn" style={{ wordBreak: 'keep-all', color: 'blue', fontSize: '13px' }}>
        프로필수정
      </span>
    </div>
  );
}
