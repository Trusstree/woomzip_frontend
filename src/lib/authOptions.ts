import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"
import { getUser, postUser } from "@/apis/userAPI";
import { Session } from "next-auth";

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
      // profile 객체에 이름이나 이메일 값이 있으면 해당 값을 user 객체에 저장
      if (profile) {
        user.id = profile.response?.id || user.id;
        user.name = profile.response?.name || user.name;
      }

      try {
        //데이터베이스에 유저가 있는지 확인
        let db_user = await getUser(user.id);

        // 없으면 데이터베이스에 유저 추가
        if (!db_user?.data?.length) {
          // 혹시 회원가입 추가 정보 넣는 거면 페이지 넣기
          const post_user = await postUser({
            id:user.id,
            name:user.name,
            provider:account.provider,
            access_token:account.access_token,
            refresh_token:account.refresh_token?account.refresh_token:"",
          });
          if(post_user.error){throw post_user.error;}
        }

        // 유저 정보에 데이터베이스 아이디, 역할 연결
        user.idx = db_user.data[0]?.idx;
        user.role = db_user.data[0]?.role;

        return true;
      } catch (error) {
        console.log("로그인 도중 에러가 발생했습니다. " + error);
        return false;
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token
        token.role = user.role;
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, user, token }:{session:Session, user:any, token:any}) {
      session.accessToken=token.accessToken;
      session.user.id=token.id;
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