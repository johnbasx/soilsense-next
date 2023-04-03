import React from 'react'
// import Navbar from "@/components/home/Navbar";
import { Footer } from '@/components/footer/Footer'
import Head from 'next/head'
import { Header } from '../Header'

export interface LayoutProps {
  children: React.ReactNode
  title: string
  carousel?: boolean
  dark?: boolean
}

const Layout = ({
  children,
  title = 'SN Silos | Land of Technology',
  carousel = false,
  dark = true,
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/manifest.json" />
      </Head>
      <Header carousel={carousel} dark={dark} />
      {/* <Navbar /> */}
      <>{children}</>
      <Footer />
    </>
  )
}

export default Layout
