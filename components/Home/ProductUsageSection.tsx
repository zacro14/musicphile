import React from 'react'

const ProductUsageSection = () => {
    return (
        <div id="about_product" className="h-96 bg-indigo-100 mx-auto py-5">
            <h2 className="font-bold text-2xl text-center">What We Do?</h2>
            <div className="grid grid-cols-3 gap-4 text-center py-5">
                <div className="container items-center">
                    Calculate your expenses in Transportation
                </div>
                <div className="container items-center ">
                    Student Saving Tips
                </div>
                <div className="container items-center">
                    Keep Track On Your Allawonce
                </div>
            </div>
        </div>
    )
}

export default ProductUsageSection
