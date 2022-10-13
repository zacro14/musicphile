import React from 'react'

const ProductUsageSection = () => {
    return (
        <div id="about_product" className="h-96 bg-indigo-100 mx-auto py-5">
            <h2 className="font-bold text-4xl text-center py-10">
                What We Do?
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center py-5">
                <div className="container items-center">
                    <div className="text-slate-900">
                        <h3 className="font-medium text-2xl">
                            Calculate your expenses in Transportation
                        </h3>
                    </div>
                </div>
                <div className="container items-center ">
                    <div className="text-slate-900">
                        <h3 className="font-medium text-2xl">
                            Student Saving Tips
                        </h3>
                    </div>
                </div>
                <div className="container items-center">
                    <div className="text-slate-900">
                        <h3 className="font-medium text-2xl">
                            Keep Track On Your Allawonce
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUsageSection
