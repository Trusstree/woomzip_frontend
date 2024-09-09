'use client';

import { useUser } from '@/app/_components/ContextSession';

export default function TestButton() {
  const { userContext } = useUser();
  return (
    <div
      className="btn btn-primary btn-lg"
      onClick={() => {
        console.log(userContext);
      }}
    >
      {' '}
      클릭{' '}
    </div>
  );
}
