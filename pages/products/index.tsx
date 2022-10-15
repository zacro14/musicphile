import React from 'react'
import ProductItem from '../../components/ProductItem/ProductItem'

const Products = () => {
    return (
        <section className="min-h-screen mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 p-5 justify-items-center">
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </section>
    )
}

export default Products
