'use client';

import useQuery from '@/hooks/useQuery';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function useAlert() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createQuery, getRouteParams } = useQuery();

  // 첫 렌더링 시에
  // 쿼리스트링에 alert가 있으면 알림 띄워주고
  // alert 쿼리 지워주기

  useEffect(() => {
    const alertMsg = searchParams.get('alert');
    if (alertMsg) {
      alert(alertMsg);
      createQuery('alert');
      router.replace(getRouteParams());
    }
  }, []);
}
