import { SignupForm } from '@/components/auth/SignupForm';

export default async function SignInPage() {
  
  return (
    <main className={`container my-5 d-flex flex-column align-items-center`}>
      <div className={`py-5 rounded-3 text-center fw-bold fs-2`}>
        트러스 회원가입
      </div>
      <div className='w-50'>
        <SignupForm />
      </div>
  </main>
  )
}