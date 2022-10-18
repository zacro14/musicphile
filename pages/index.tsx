import GlobalTopSongs from '@components/Home/GlobalTopSongs'
import LandingSection from '@components/Home/LandingSection'
import ProductUsageSection from '@components/Home/ProductUsageSection'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="mx-auto min-h-screen px-3">
            <LandingSection />
            <ProductUsageSection />
            <GlobalTopSongs />
        </div>
    )
}

export default Home
