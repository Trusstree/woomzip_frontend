import { SignupForm } from "@/app/signup/_components/SignupForm";
import { SignupFormCompany } from "./_components/SignupFormCompany";
import Link from "next/link";

export default async function Page({ searchParams }) {
  return (
    <main className={`container my-5 d-flex flex-column align-items-center`}>
      <div
        style={{
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "10px",
        }}
      >
        <span style={{ color: "#314FC0" }}>움집</span> 회원가입
      </div>
      <div>
        {searchParams.user == "company" ? (
          <Link href={"/signup"}>일반회원으로 이동</Link>
        ) : (
          <Link href={"/signup?user=company"}>기업회원으로 이동</Link>
        )}
      </div>
      <div style={{ maxWidth: "800px", width: "90%" }}>
        {searchParams.user == "company" ? (
          <SignupFormCompany />
        ) : (
          <SignupForm />
        )}
      </div>
    </main>
  );
}
