import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@/components/Analytics";
import StyledComponentsRegistry from "@/components/app/StyledComponentsRegistry";
import ContextSession from "@/app/ContextSession";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import AlertSession from "@/hooks/useAlert";
import Options from "@/app/Options";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "움집",
  metadataBase: new URL(process.env.NEXT_PUBLIC_CALLBACKURL),
  openGraph: {
    title: "움집",
    description: "전원생활의 시작을 함께, 움집",
    url: process.env.NEXT_PUBLIC_CALLBACKURL,
    siteName: "woomzip",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CALLBACKURL}woomzip_logo.png`,
        width: 1600,
        height: 1600,
        alt: "woomzip logo",
      },
    ],
    icons: {
      icon: "/favicon.ico",
    },
    locale: "ko",
    type: "website",
  },
};
//{ children, params }: { children: React.ReactNode }
export default function RootLayout(arg) {
  return (
    <html lang="ko">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
      </head>

      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ContextSession>
            <Analytics />
            <Options />
            <Header />
            {arg.children}
            <Footer />
          </ContextSession>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
