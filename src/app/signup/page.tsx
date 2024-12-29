import { SignupForm } from '@/app/signup/_components/SignupForm';
import { SignupFormCompany } from './_components/SignupFormCompany';
import Link from 'next/link';

export default async function Page({ searchParams }) {
  return (
    <div style={{ width: '90%', maxWidth: '500px', margin: '0 auto', minHeight: '800px' }}>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: '600',
          margin: '100px 0',
          wordBreak: 'keep-all',
        }}
      >
        움집 회원가입
        <div style={{ fontSize: '16px', marginTop: '10px' }}>
          {searchParams.user == 'company' ? (
            <Link href={'/signup'}>일반회원으로 이동</Link>
          ) : (
            <Link href={'/signup?user=company'}>기업회원으로 이동</Link>
          )}
        </div>
      </div>

      <div style={{ width: '100%' }}>{searchParams.user == 'company' ? <SignupFormCompany /> : <SignupForm />}</div>
    </div>
  );
}
