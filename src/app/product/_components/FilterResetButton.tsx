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
    <div className="col-md-8 col-4">
      <div className="d-flex justify-content-end" style={{ width: '100%' }}>
        <div
          className="row"
          style={{
            width: 'auto',
            height: '35px',
            padding: '0 30px',
            backgroundColor: 'white',
            borderRadius: '10px',
            alignContent: 'center',
            cursor: 'pointer',
          }}
          onClick={handleClick}
        >
          <div
            style={{
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: '600',
              width: 'auto',
              padding: '2px',
              marginRight: '7px',
              marginBottom: '10px',
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
    </div>
  );
}
