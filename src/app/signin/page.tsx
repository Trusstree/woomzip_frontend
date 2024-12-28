import { SigninForm } from '@/app/signin/_components/SigninForm';
import Link from 'next/link';

export default async function SignInPage() {
  return (
    <>
      <div style={{ width: '90%', maxWidth: '500px', margin: '0 auto', height: '800px' }}>
        <div
          style={{
            width: '100%',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '600',
            margin: '200px 0 100px 0',
            wordBreak: 'keep-all',
          }}
        >
          안녕하세요! 움집입니다.
          <br />
          로그인하시고 더 많은 서비스를 이용해보세요.
        </div>
        <div style={{ width: '100%' }}>
          <SigninForm />
        </div>
        <Link className="w-100 btn" href={'/signup'}>
          회원이 아니세요? <br />
          <span style={{ color: '#314FC0', fontWeight: '500' }}>1분 만에 회원가입하기</span>
        </Link>
      </div>
    </>
  );
}
