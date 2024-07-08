// middleware.ts
import { accessTokenOption } from "@/configs/cookie";
import { getUserdataByToken } from "@/lib/parseUtil";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, response: NextResponse) {
  //로그인하면 안 되는 페이지
  const signinNonRequiredPage = ["/signin", "/signup"];
  for (const page of signinNonRequiredPage) {
    if (!request.nextUrl.pathname.startsWith(page)) continue;

    const accessToken = request.cookies.get("accessToken")?.value;

    // 액세스토큰이 있으면 굳이 로그인하러 올 이유가 없음
    if (accessToken) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CALLBACKURL}`);
    }
  }

  //로그인해야하는 페이지
  const signinRequiredPage = ["/mypage", "/living/1/reservation", "/admin", "/community/write"];
  for (const page of signinRequiredPage) {
    if (!request.nextUrl.pathname.startsWith(page)) continue;

    const accessToken = request.cookies.get("accessToken")?.value;

    // 액세스토큰이 없으면 로그인부터 하고 와야함
    if (!accessToken) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CALLBACKURL}signin`);
    }

    // 어드민 페이지
    const AdminPage = ["/admin"];
    const userData = getUserdataByToken(accessToken);
    if (AdminPage.includes(page) && !isNaN(Number(userData?.["role"])) && Number(userData["role"]) > 2) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CALLBACKURL}`);
    }

    // 액세스토큰이 유효한지 확인하기 위해 백엔드에 신호를 보냄
    // 백엔드에서는 아무 신호나 보내도 체크를 해줘서, 그냥 유저 정보 아무거나 받아오는 중
    // middleware에서는 axios를 사용할 수 없어서 fetch를 사용
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/test`, {
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
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
