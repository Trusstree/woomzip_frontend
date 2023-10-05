import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_SECRET,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  pages: {
		signIn: '/api/auth/signin',
		signOut: '/api/auth/signout',
		error: '/api/auth/error', // Error code passed in query string as ?error=
		verifyRequest: '/api/auth/verify-request', // (used for check email message)
		newUser: '/api/auth/new-user' // New users will be directed here on first sign in
	}
}

const handler = NextAuth(authOptions)

export { handler as POST, handler as GET }