import { SigninForm } from "@/app/signin/_components/SigninForm";
import Link from "next/link";

export default async function SignInPage() {
  return (
    <main className={`container my-5 d-flex flex-column align-items-center`}>
      <div
        className={`pt-5 pb-3 rounded-3 text-center`}
        style={{ fontSize: "28px", fontWeight: "600", wordBreak: "keep-all" }}
      >
        모듈러 기반 단독주택 프롭테크 플랫폼,
        <br />
        <span style={{ color: "#314FC0" }}>움집</span>에 오신 여러분을
        환영합니다!
        <br />
      </div>
      <div style={{ width: "90%", maxWidth: "500px" }}>
        <SigninForm />
      </div>
      <Link className="w-100 btn" href={"/signup"}>
        회원이 아니세요? <br />
        <span style={{ color: "#314FC0", fontWeight: "500" }}>
          1분 만에 회원가입하기
        </span>
      </Link>
    </main>
  );
}
