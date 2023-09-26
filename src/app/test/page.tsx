import TestButton from "@/components/test/TestButton";
import SigninForm from "@/components/forms/SigninForm";

export default function Home() {
  return (
    <main className={`container`}>
      <TestButton >테스트</TestButton>

      <SigninForm />
    </main>
  )
}