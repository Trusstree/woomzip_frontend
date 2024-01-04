import NextAuth from "next-auth"
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

const handler = NextAuth(authOptions)

export { handler as POST, handler as GET }
