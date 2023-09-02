// import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from '../app/Header';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  openGraph: {
    title: 'Truss',
    description: 'Truss',
    url: 'https://buildintruss.com',
    siteName: 'Truss',
    images: [
      {
        url: '/log1.png',
        width: 804,
        height: 804,
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
