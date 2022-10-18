import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import seoconfig from 'seo.config'
import Layout from '@components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <DefaultSeo {...seoconfig} />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
