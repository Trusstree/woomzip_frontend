import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"
import { getUser, postUser } from "@/apis/userAPI";
import { Session } from "next-auth";
import { getAccessToken } from "@/apis/authAPI";
import { getUserdataByToken } from "./security";

export const authOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
		signIn: '/signin',
	},
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const [data, error] = await getAccessToken(account.access_token);
      
      // 유저 정보에 데이터베이스 아이디, 역할 연결
      const parsedJWT = getUserdataByToken(data.data.access_token);
      user.accessToken = data.data.access_token;
      user.uid = parsedJWT.uid;
      user.role = "company"; //db_user.data[0]?.role;

      return true;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = user.accessToken;
        token.role = user.role;
        token.uid = user.uid;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, user, token }:{session:Session, user:any, token:any}) {
      session.user.accessToken=token.accessToken;
      session.user.uid=token.uid;
      session.user.role=token.role;
      session.user.email=token.email;
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  logger: {
    error(code, metadata) {
      console.error(code, metadata)
    },
    warn(code) {
      console.warn(code)
    },
    // debug(code, metadata) {
    //   console.debug(code, metadata)
    // }
  }
}