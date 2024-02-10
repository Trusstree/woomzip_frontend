import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"
import { getUser, postUser } from "@/api/userAPI";

export const authOptions = {
  providers: [
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
		signIn: '/api/auth/signin',
		signOut: '/api/auth/signout',
		error: '/api/auth/error', // Error code passed in query string as ?error=
		verifyRequest: '/api/auth/verify-request', // (used for check email message)
		newUser: '/api/auth/new-user' // New users will be directed here on first sign in
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
        if (!db_user.data.length) {
          const post_user = await postUser(user);
          console.log(post_user.data);
          if(post_user.error){throw post_user.error}
        }

        // 유저 정보에 데이터베이스 아이디, 역할 연결
        user.id = db_user.data?.id;
        user.role = db_user.data?.role;

        return true;
      } catch (error) {
        console.log("로그인 도중 에러가 발생했습니다. " + error);
        return false;
      }
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        token.accessToken = account.access_token
      }
      //console.log(token);
      return token;
    },
    async session({ session, user, token }) {
      //console.log(session);
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`
      // Allows callback URLs on the same origin
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