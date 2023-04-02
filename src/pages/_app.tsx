import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import NextNProgress from 'nextjs-progressbar'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
  //at the first render initialRenderComplete is false
  const [initialRenderComplete, setInitialRenderComplete] =
    useState<boolean>(false)

  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])

  if (!initialRenderComplete) return <></>

  return (
    <>
      <NextNProgress
        height={6}
        color="#c7e3b3"
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)
