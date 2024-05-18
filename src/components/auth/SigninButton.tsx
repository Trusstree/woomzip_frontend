import { useUser } from "@/components/app/ContextSession";
import { getAccessTokenServer } from "@/configs/cookie.server";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SigninButton() {
  const router = useRouter();
  const userCookie = getAccessTokenServer();
  const { userContext, setUserContext } = useUser();

  // useEffect(() => {
  //   setUserContext(userCookie?.userData);
  // }, []);

  return userCookie == undefined ? (
    <button
      type="button"
      style={{ color: "#101648" }}
      className={`px-4 py-2 btn rounded-lg fw-bold align-self-end`}
      onClick={() => {
        router.push("/signin");
      }}
    >
      {" "}
      로그인/회원가입
    </button>
  ) : (
    <button
      type="button"
      style={{ color: "#101648" }}
      className={`px-4 py-2 btn rounded-lg fw-bold align-self-end`}
      onClick={() => {
        router.push(`/mypage/${1 /*userContext?.uid*/}`);
      }}
    >
      {" "}
      마이페이지
    </button>
  );
}
