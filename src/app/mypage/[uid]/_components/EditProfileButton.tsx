'use client';

import { useRouter } from 'next/navigation';

export default function EditProfileButton({ uid }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.replace(`/mypage/${uid}?method=edit`);
      }}
    >
      <span
        className="btn"
        style={{
          wordBreak: 'keep-all',
          color: '#1E4DFF',
          fontSize: '13px',
          backgroundColor: '#DCE3FF',
          padding: '1px',
          marginTop: '10px',
        }}
      >
        프로필수정
      </span>
    </div>
  );
}
