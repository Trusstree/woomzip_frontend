import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from '../app/Header';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  openGraph: {
    title: 'Truss',
    description: '건설사, 시공사 순위 리뷰 후기 확인은 트러스!',
    url: 'http://buildintruss.com',
    siteName: 'Truss',
    images: [
      {
        url: '/logo1.png',
        width: 218,
        height: 128,
        alt: "truss logo"
      },
    ],
    locale: 'kr',
    type: 'website',
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      </head>
      
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
