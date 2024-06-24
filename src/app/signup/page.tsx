import { SignupForm } from "@/app/signup/_components/SignupForm";
import { SignupFormCompany } from "./_components/SignupFormCompany";
import Link from "next/link";

export default async function Page({ searchParams }) {
  return (
    <main className={`container my-5 d-flex flex-column align-items-center`}>
      <div className={`py-5 rounded-3 text-center fw-bold fs-2`}>트러스 회원가입</div>
      <div>
        {searchParams.user == "company" ? (
          <Link href={"/signup"}>일반회원으로 이동</Link>
        ) : (
          <Link href={"/signup?user=company"}>기업회원으로 이동</Link>
        )}
      </div>
      <div className="w-50">{searchParams.user == "company" ? <SignupFormCompany /> : <SignupForm />}</div>
    </main>
  );
}
