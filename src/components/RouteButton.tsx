'use client';

import { Children } from '@/types/props';
import { usePathname } from 'next/navigation';
import { CSSProperties } from 'react';
import Link from 'next/link';

type RouteButtonProps = {
  url: string;
  children: Children;
  className?: string;
  style?: CSSProperties;
};

export default function RouteButton(props: RouteButtonProps) {
  const pathname = usePathname();

  const { className, url, children, style } = props;

  let path = pathname.split('/')[1];

  return (
    <Link
      type="button"
      style={{
        ...style,
        color: `/${path}` == url ? '#ffffff' : '#ffffff',
      }}
      className={`${className ? `${className} ` : ''}btn rounded-lg align-self-end`}
      href={url}
    >
      {children}
    </Link>
  );
}
