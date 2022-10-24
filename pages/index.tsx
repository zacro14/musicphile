import GlobalTopSongs from '@components/Home/GlobalTopSongs'
import LandingSection from '@components/Home/LandingSection'
import MoreChart from '@components/Home/MoreChartSection'
import ProductUsageSection from '@components/Home/ProductUsageSection'
import TopArtists from '@components/Home/TopArtistsSection'

import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div className="mx-auto min-h-screen">
            <LandingSection />
            <ProductUsageSection />
            <GlobalTopSongs />
            <TopArtists />
            <MoreChart />
        </div>
    )
}

export default Home
