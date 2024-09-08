'use client';

import { getUserAccessToken } from '@/actions/auth/authAction';
import { useUser } from '@/app/_components/ContextSession';
import { getUserdataByToken } from '@/lib/parseUtil';
import { useEffect } from 'react';

// 로그인이 되어있는지 여부를 컨텍스트에 집어넣기 위함
export default function useAuth() {
  const { setUserContext } = useUser();
  useEffect(() => {
    (async () => {
      const userAccessToken = await getUserAccessToken();
      if (userAccessToken) {
        // 로그인이 되어있는 경우
        const userInfo = getUserdataByToken(userAccessToken.value);
        setUserContext({
          uid: userInfo.uid,
          role: userInfo.role,
          at: userAccessToken.value,
        });
      } else {
        // 로그인이 안 되어있는 경우
        setUserContext(undefined);
      }
    })();
  }, []);
}
