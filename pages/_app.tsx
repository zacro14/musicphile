import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import seoconfig from 'seo.config'
import Layout from '@components/Layout'
import { Provider } from 'react-redux'
import { store } from 'redux/store'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <DefaultSeo {...seoconfig} />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default MyApp
