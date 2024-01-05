import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
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
		signIn: '/api/auth/signin',
		signOut: '/api/auth/signout',
		error: '/api/auth/error', // Error code passed in query string as ?error=
		verifyRequest: '/api/auth/verify-request', // (used for check email message)
		newUser: '/api/auth/new-user' // New users will be directed here on first sign in
	},
  callbacks: {
    async signIn({ user, account, profile }) {
      // profile 객체에 이름이나 이메일 값이 있으면 해당 값을 user 객체에 저장
      if (profile) {
        user.name = profile.response?.name || user.name;
        user.email = profile.response?.email || user.email;
      }

      try {
        // //데이터베이스에 유저가 있는지 확인
        // let db_user = await prisma.user.findUnique({
        //   where: { email: user.email! },
        // });

        // // 없으면 데이터베이스에 유저 추가
        // if (!db_user) {
        //   db_user = await prisma.user.create({
        //     data: {
        //       name: user.name!,
        //       email: user.email!,
        //       cart: {
        //         create: {},
        //       },
        //     },
        //   });
        // }

        // // 유저 정보에 데이터베이스 아이디, 역할 연결
        // user.id = db_user.id;
        // user.role = db_user.role;

        return true;
      } catch (error) {
        console.log("로그인 도중 에러가 발생했습니다. " + error);
        return false;
      }
    },
    async jwt ({token, account}) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({session, token, user}) {
      return session
    },
    async redirect ({url, baseUrl}) {
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }
      else if ( new URL(url).origin === baseUrl) {
        return `${baseUrl}`
      }
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