import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
  This is __app
  <Component {...pageProps} />
  </>
}

export default MyApp
