import type { NextPage } from 'next'
import LandingSection from '../components/Home/LandingSection'
import ProductUsageSection from '../components/Home/ProductUsageSection'

const Home: NextPage = () => {
    return (
        <>
            <LandingSection />
            <ProductUsageSection />
        </>
    )
}

export default Home
