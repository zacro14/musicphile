import Link from 'next/link'
import React from 'react'

const LandingSection = () => {
    return (
        <section id="landing_section" className="min-h-80 w-full">
            <div className="mx-auto container text-center py-10">
                <h1 className="font-bold text-8xl mb-5">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Estimator
                    </span>
                </h1>
                <h2 className="text-stone-500 mb-5">
                    Your Transportation Expenses, 13 Month Pay and Allowance
                    Calculator.
                </h2>
                <Link href={{ pathname: '/products' }} passHref>
                    <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-5 py-3 rounded-lg">
                        <p className="text-white">Get Started</p>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default LandingSection
