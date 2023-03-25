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
      </Head>
      <Header carousel={carousel} dark={dark} />
      {/* <Navbar /> */}
      <>{children}</>
      <Footer />
    </>
  )
}

export default Layout
