import TestButton from "@/components/test/TestButton";
import SigninForm from "@/components/forms/SigninForm";
import OauthSigninForm from "@/components/forms/OauthSigninForm";

export default function Home() {
  return (
    <main className={`container`}>
      <TestButton >테스트</TestButton>
      <SigninForm />
      <OauthSigninForm />
    </main>
  )
}