// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { accessTokenOption } from "./configs/cookie.client";

async function signinCheck(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;

  // 액세스토큰이 없으면 로그인부터 하고 와야함
  if (!accessToken) {
    console.log("로그인부터 하고 오세요");
    const res = NextResponse.redirect(`${process.env.NEXT_PUBLIC_CALLBACKURL}signin`);
    return res;
  }

  // 액세스토큰이 유효한지 확인하기 위해 백엔드에 신호를 보냄
  // 백엔드에서는 아무 신호나 보내도 체크를 해줘서, 그냥 유저 정보 아무거나 받아오는 중
  // middleware에서는 axios를 사용할 수 없어서 fetch를 사용
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/profile`, {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const jsonData = await data.json();

  // 402 에러는 액세스토큰 재발급받아야 하는 에러
  if (jsonData.status == 402) {
    const newAccessToken = jsonData.data[0]["access_token"];
    const res = NextResponse.redirect(request.url);
    res.cookies.set("accessToken", newAccessToken, accessTokenOption);
    return res;
  }
  return null;
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/test")) {
    return signinCheck(request);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
