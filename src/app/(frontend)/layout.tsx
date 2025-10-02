import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  description: 'Drużyna należąca do ZHR, działająca w kościele na Poczekajce w Lublinie.',
  title: '4 LDH "Wulkan" im. św Franciszka Ksawerego',
  openGraph: {
    title: '4 LDH "Wulkan" im. św Franciszka Ksawerego',
    description: 'Drużyna należąca do ZHR, działająca w kościele na Poczekajce w Lublinie.',
    url: 'https://wulkan.lublin.pl',
    siteName: '4 LDH "Wulkan"',
    images: '/logo.svg',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
