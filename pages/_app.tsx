import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { DefaultSeo } from 'next-seo'
import seo from '../seo.config'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <DefaultSeo {...seo} />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
