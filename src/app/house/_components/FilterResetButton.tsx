'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function FilterResetButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    router.replace(pathname);
  };

  return (
    <div
      style={{
        width: 'auto',
        height: '35px',
        padding: '0 30px',
        backgroundColor: 'white',
        borderRadius: '10px',
        marginLeft: 'auto', // 오른쪽 정렬
        alignContent: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <div className="row">
        <div
          style={{
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: '600',
            width: 'auto',
            padding: '2px',
            marginRight: '7px',
          }}
        >
          초기화
        </div>
        <Image
          src="/reset.png"
          width={13}
          height={13}
          alt="reset"
          style={{ width: '13px', padding: '0', marginTop: '7px' }}
        />
      </div>
    </div>
  );
}
