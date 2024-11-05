'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function RouteLink({ href, children, styles }: { href: string; children: any; styles?: any }) {
  const router = useRouter();
  return (
    <button
      className="d-flex align-items-center"
      style={{ border: 'none', backgroundColor: 'transparent', padding: '0', ...styles }}
      onClick={() => {
        router.push(href);
      }}
    >
      {children}
      <Image src={'/buttonIcons/next.png'} width={20} height={18} alt={'next'} style={{ marginLeft: '5px' }} />
    </button>
  );
}
