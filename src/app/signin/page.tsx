import { SigninForm } from '@/components/auth/SigninForm';

export default async function SignInPage() {
  
  return (
    <main className={`container my-5 d-flex flex-column align-items-center`}>
      <div className={`pt-5 pb-3 rounded-3 text-center fw-bold fs-2`}>
        건축 커뮤니티<br/>
        트러스에 오신 여러분을<br/>
        환영합니다!<br/>
      </div>
      <div className='w-50'>
        <SigninForm />
      </div>
  </main>
  )
}