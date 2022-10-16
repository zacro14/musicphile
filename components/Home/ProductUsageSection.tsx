import React from 'react'

const ProductUsageSection = () => {
    const product = [
        {
            label: 'Calculate your tyaransportation allowance',
        },
        {
            label: 'Easly calculate your 13month pay',
        },
        {
            label: 'Keep track on your allowance',
        },
    ]
    return (
        <section id="about_product" className="h-96 mx-auto py-5">
            <h2 className="font-bold text-white text-4xl text-center py-10">
                What We Do?
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center py-5 mx-auto container">
                {product.map((product) => (
                    <div
                        key={product.label}
                        className="container items-center h-40 flex justify-center rounded-md bg-neutral-900 border border-neutral-700"
                    >
                        <div className="text-slate-400">
                            <h3 className="font-medium text-lg">
                                {product.label}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProductUsageSection
