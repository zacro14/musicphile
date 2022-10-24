import React from 'react'
import { WHATWEOFFER } from '../../assets/constants'
import TextHeader from '../TextHeader'

const ProductUsageSection = () => {
    return (
        <section id="about_product" className="min-h-96 mx-auto py-5">
            <TextHeader>What We Offer</TextHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-5 mx-auto container px-5">
                {WHATWEOFFER.map((offer) => (
                    <div
                        key={offer.label}
                        className="container items-center h-40 flex justify-center rounded-md bg-neutral-900 border border-neutral-700"
                    >
                        <div className="text-slate-400">
                            <h3 className="font-medium text-lg">
                                {offer.label}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductUsageSection
