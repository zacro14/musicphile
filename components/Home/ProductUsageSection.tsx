import React from 'react'
import { WHATWEOFFER } from '../../assets/constants'

const ProductUsageSection = () => {
    return (
        <section id="about_product" className="min-h-96 mx-auto py-5">
            <h2 className="font-bold text-white text-4xl text-center py-10 underline underline-offset-8 decoration-indigo-500">
                What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-5 mx-auto container">
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
