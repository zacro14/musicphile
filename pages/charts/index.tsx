import Banner from '@components/Banner/Banner'
import React from 'react'
import Seo from '../../components/Seo/Seo'

const Charts = () => {
    return (
        <>
            <Seo title="Music Just For You" description="discover music" />
            <section className="min-h-screen mx-auto max-w-7xl">
                <Banner />
            </section>
        </>
    )
}

export default Charts
