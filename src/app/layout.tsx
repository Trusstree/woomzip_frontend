import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { AnalyticsHead, AnalyticsBody } from "@/components/Analytics";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import StyledComponentsRegistry from "@/components/app/StyledComponentsRegistry";
import ContextSession from "@/app/ContextSession";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import Options from "@/app/Options";
import { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "움집",
  description: "전원생활의 시작을 함께, 움집",
  keywords: ["모듈러", "모듈러주택", "움집", "주택", "전원생활"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_CALLBACKURL),
  openGraph: {
    title: "움집",
    description: "전원생활의 시작을 함께, 움집",
    url: process.env.NEXT_PUBLIC_CALLBACKURL,
    siteName: "woomzip",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CALLBACKURL}/woomzip_logo.webp`,
        width: 1600,
        height: 1600,
        alt: "woomzip logo",
      },
    ],
    icons: {
      icon: "./favicon.ico",
    },
    locale: "ko",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      </head>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ContextSession>
            <Suspense>
              <Options />
              <Header />
              {children}
              <Footer />
            </Suspense>
          </ContextSession>
        </StyledComponentsRegistry>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
    </html>
  );
}
