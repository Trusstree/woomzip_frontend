import { getProviders } from 'next-auth/react'
import SocialSigninButton from '@/components/auth/SocialSigninButton'
import Client from './Client';

export default async function SignInPage() {
  const providers = await getProviders();
  
  return (
    <main className={`container my-5`}>
      <div className={`mt-5 py-5 rounded-3 text-center fw-bold fs-2`}>
        건축 커뮤니티<br/>
        트러스에 오신 여러분을<br/>
        환영합니다!<br/>
      </div>
      <Client />
  </main>
  )
}