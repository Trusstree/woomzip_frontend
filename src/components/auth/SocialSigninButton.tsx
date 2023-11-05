'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

type IProps = {
  providers:Record<string, ClientSafeProvider>
}

export default function SocialSigninButton({ providers }: IProps) {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  return (
    <div>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button
            className='btn btn-lg rounded-3 p-3 my-3 w-100 fw-bold'
            onClick={() => signIn(provider.id, { redirect: true, callbackUrl: callbackUrl })}
            style={{backgroundColor:"#101648", color:"#ffffff"}}>
            {provider.id.toUpperCase()} 로그인
          </button>
        </div>
      ))}
    </div>
  );
}