// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
export {};
// export async function middleware(req: NextRequest) {
//   const token = await getToken({
//     req,
//     secret: process.env.NEXTAUTH_SECRET,
//   });
//   const { pathname } = req.nextUrl;

//   if (pathname.startsWith("/login")) {
//     if (token) {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }

//   if (pathname.startsWith("/my")) {
//     if (!token) {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }

//   if (pathname.startsWith("/admin")) {
//     if (token?.role !== "ADMIN") {
//       return NextResponse.redirect(new URL("/", req.url));
//     }
//   }
// }

// export const config = {
//   matcher: ["/login", "/my", "/admin"],
// };