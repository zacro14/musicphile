import React from 'react'

const ProductUsageSection = () => {
    return (
        <section id="about_product" className="h-96 mx-auto py-5">
            <h2 className="font-bold text-white text-4xl text-center py-10">
                What We Do?
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center py-5">
                <div className="container items-center">
                    <div className="text-slate-400">
                        <h3 className="font-medium text-lg">
                            Transportation allowance
                        </h3>
                    </div>
                </div>
                <div className="container items-center ">
                    <div className="text-slate-400">
                        <h3 className="font-medium text-lg">
                            Easly calculate your 13month pay
                        </h3>
                    </div>
                </div>
                <div className="container items-center">
                    <div className="text-slate-400">
                        <h3 className="font-medium text-lg">
                            Keep track on your allowance
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductUsageSection
