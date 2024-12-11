'use client';

import { createPortal } from 'react-dom';
import { ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
};

export default function TooltipPortal({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  return mounted ? createPortal(children, document.getElementById('tooltips-portal')!) : null;
}
