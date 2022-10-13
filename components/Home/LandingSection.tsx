import Link from 'next/link'
import React from 'react'

const LandingSection = () => {
    return (
        <div id="landing_section" className="min-h-80 w-full bg-white ">
            <div className="mx-auto container text-center py-10">
                <h1 className="font-bold text-8xl mb-5">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Hello!
                    </span>
                    Welcome to Tranpolator
                </h1>
                <h2 className="text-stone-500 mb-5">
                    Your transporation calculator, your transpolator
                </h2>
                <Link href={'/calculator'} passHref>
                    <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-5 py-3 rounded-lg">
                        <p className="text-white">See Product</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default LandingSection
