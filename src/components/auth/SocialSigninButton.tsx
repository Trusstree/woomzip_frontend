'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';

type IProps = {
  providers:Record<string, ClientSafeProvider>
}

export default function SocialSigninButton({ providers }: IProps) {
  return (
    <div>
      {Object.values(providers).map(provider => (
        <div key={provider.name}>
          <button
            className='btn btn-lg rounded-3 p-3 my-3 w-100 fw-bold'
            onClick={() => {
              console.log(provider.callbackUrl);
              signIn(provider.id, { redirect: true, callbackUrl: provider.callbackUrl })
            }}
            style={{backgroundColor:"#101648", color:"#ffffff"}}>
            {provider.id.toUpperCase()} 로그인
          </button>
        </div>
      ))}
    </div>
  );
}