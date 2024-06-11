import { getUserdataByToken } from "@/lib/parseUtil";
import { cookies } from "next/headers";
import Link from "next/link";

export default function SigninButton() {
  const cookieStorage = cookies();
  const userAccessToken = cookieStorage.get("accessToken")?.value;
  const userInfo = getUserdataByToken(userAccessToken);
  return userInfo == undefined ? (
    <Link 
      className={"btn px-4 py-2 btn rounded-lg fw-bold align-self-end"}
      style={{fontSize:"14px"}}
      href="/signin">
      로그인/회원가입
    </Link>
  ) : (
    <Link
      className={"btn px-4 py-2 btn rounded-lg fw-bold align-self-end"}
      style={{fontSize:"14px"}}
      href={`/mypage/${userInfo.uid}`}
    >
      마이페이지
    </Link>
  );
}
