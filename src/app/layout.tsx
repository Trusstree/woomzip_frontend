import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "../components/app/Header";
import Footer from "../components/app/Footer";
import { Analytics } from "@/components/Analytics";
import ContextSession from "../components/app/ContextSession";
import StyledComponentsRegistry from "@/components/app/StyledComponentsRegistry";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Truss",
  metadataBase: new URL("https://buildintruss.com"),
  openGraph: {
    title: "Truss",
    description: "전원생활의 시작을 함께, 움집",
    url: "https://buildintruss.com",
    siteName: "woomzip",
    images: [
      {
        url: "https://buildintruss.com/logo/truss_icon.png",
        width: 1600,
        height: 1600,
        alt: "truss logo",
      },
    ],
    icons: {
      icon: "/favicon.ico",
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

      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ContextSession>
            <Analytics />
            <Header />
            <div className={`container-md`}>{children}</div>
            <Footer />
          </ContextSession>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
