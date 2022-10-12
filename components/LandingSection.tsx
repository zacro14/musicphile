import React from 'react'

const LandingSection = () => {
    return (
        <div id="Landing Section" className="min-h-80 w-full bg-white ">
            <div className="mx-auto container text-center py-10">
                <h1 className="font-bold text-8xl mb-5">
                    Hello! Welcome to Tranposculator
                </h1>
                <h2 className="text-stone-500 mb-5">
                    Your transporation calculator, your transpolator
                </h2>

                <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-5 py-3 rounded-lg ">
                    <p className="text-white">See Product</p>
                </button>
            </div>
        </div>
    )
}

export default LandingSection
