import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from '../app/Header';
import Footer from '../app/Footer';
import AuthSession from './AuthSession';
import { Analytics } from '@/components/Analytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL("https://buildintruss.com"),
  openGraph: {
    title: 'Truss',
    description: '건설사, 시공사 순위 리뷰 후기 확인은 트러스!',
    url: 'https://buildintruss.com',
    siteName: 'Truss',
    images: [
      {
        url: 'https://buildintruss.com/logo_truss.png',
        width: 218,
        height: 128,
        alt: "truss logo"
      },
    ],
    locale: 'ko',
    type: 'website',
  }
}

      {/* <head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
        <Script
          strategy='afterInteractive'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          id='ga4_init'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname
                });
              `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />

        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
          `}
        </Script>
      </head> */}

export default function RootLayout({children, }: {children: React.ReactNode, }) {
  //const session = {} as Session;
  return (
    <html lang="ko">
      <head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
        <Analytics />
      </head>
      
      <body className={inter.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KRJSTPML"
              height="0"
              width="0"
              style={{display:"none", visibility:"hidden"}}/>
          </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <AuthSession>
          <Header />
          <main className={`container px-5`}>
          {children}
          </main>
          <Footer />
        </AuthSession>
      </body>
    </html>
  )
}
