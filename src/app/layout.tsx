import './globals.css';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import StyledComponentsRegistry from '@/components/app/StyledComponentsRegistry';
import ContextSession from '@/app/_components/ContextSession';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import Options from '@/app/_components/Options';
import { Suspense } from 'react';
import { WebVitals } from '@/app/_components/WebVitals';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '움집',
  subject: '움집',
  author: '움집',
  description: '전원생활의 시작을 함께, 움집. 이제는 주택도 쇼핑할 때! 나만의 농막, 농촌 체류형 쉼터 찾기.',
  keywords: '전원생활의 시작을 함께, 움집. 이제는 주택도 쇼핑할 때! 나만의 농막, 농촌 체류형 쉼터 찾기.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_CALLBACKURL),
  alternates: {
    canonical: 'https://woomzip.com/',
  },
  openGraph: {
    richAttachment: 'true',
    title: '움집',
    description: '전원생활의 시작을 함께, 움집. 이제는 주택도 쇼핑할 때! 나만의 농막, 농촌 체류형 쉼터 찾기.',
    url: process.env.NEXT_PUBLIC_CALLBACKURL,
    siteName: '움집',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CALLBACKURL}/metadataImage.jpg`,
        width: 1600,
        height: 1600,
        alt: 'woomzip logo',
      },
    ],
    icons: {
      icon: './favicon.ico',
    },
    locale: 'ko',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '움집',
    description: '전원생활의 시작을 함께, 움집. 이제는 주택도 쇼핑할 때! 나만의 농막, 농촌 체류형 쉼터 찾기.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_CALLBACKURL}/metadataImage.jpg`,
        width: 1600,
        height: 1600,
        alt: 'woomzip logo',
      },
    ],
  },
  itemProps: {
    name: '움집',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta itemProp="name" content="움집" />
        <meta
          itemProp="description"
          content="전원생활의 시작을 함께, 움집. 이제는 주택도 쇼핑할 때! 나만의 농막, 농촌 체류형 쉼터 찾기."
        />
        <meta itemProp="image" content="hhttps://www.woomzip.com/metadataImage.jpg" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </head>

      <body className={inter.className}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        <WebVitals />
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
        <div id="tooltips-portal" />
      </body>

      {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} /> */}
    </html>
  );
}
