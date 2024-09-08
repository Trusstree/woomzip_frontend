import CompanyClient from '@/app/admin/company/_components/CompanyClient';

export default function Company() {
  return (
    <div>
      <div className="mt-5 d-flex flex-column align-items-center">
        <h1>기업 가입하기</h1>
      </div>
      <CompanyClient />
    </div>
  );
}
