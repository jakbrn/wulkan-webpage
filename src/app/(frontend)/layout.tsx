import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  description:
    'Lubelska drużyna harcerska WULKAN. Drużyna należy do ZHR. Wulkan został założony w 1985 roku! Drużyna urzęduje w kościele na Poczekajce w Lublinie.',
  title: 'Drużyna Harcerska WULKAN - ZHR Lublin',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
