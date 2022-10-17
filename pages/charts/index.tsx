import React from 'react'
import ProductItem from '../../components/ProductItem/ProductItem'
import Seo from '../../components/Seo/Seo'

const Charts = () => {
    return (
        <>
            <Seo title="Music Just For You" description="discover music" />
            <section className="min-h-screen mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 p-5 justify-items-center">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </section>
        </>
    )
}

export default Charts
