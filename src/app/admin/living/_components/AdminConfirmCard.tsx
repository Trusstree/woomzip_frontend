'use client';

import { Children } from '@/types/props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type RouteButtonProps = {
  url: string;
  title: string;
  children: Children;
  src?: string;
  className?: string;
};

export function AdminConfirmCard(props: RouteButtonProps) {
  const { url, title, children, src, className } = props;
  const router = useRouter();

  function handleClick() {
    router.push(url);
  }

  return (
    <div className={`card${className ? ` ${className}` : ''}`} onClick={handleClick}>
      {src && <Image src={src} className="card-img-top" alt={title} width={300} height={300} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{children}</p>
      </div>
    </div>
  );
}
