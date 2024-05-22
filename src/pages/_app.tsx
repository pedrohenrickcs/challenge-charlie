import Layout from '@/app/layout'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'
import { Head } from 'next/document'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default appWithTranslation(App)
