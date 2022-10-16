import type { NextPage } from 'next'
import LandingSection from '../components/Home/LandingSection'
import ProductUsageSection from '../components/Home/ProductUsageSection'

const Home: NextPage = () => {
    return (
        <div className="mx-auto min-h-screen px-3">
            <LandingSection />
            <ProductUsageSection />
        </div>
    )
}

export default Home
