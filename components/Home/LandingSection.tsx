import Link from 'next/link'
import React from 'react'
import { WalletIcon } from '@heroicons/react/24/solid'

const LandingSection = () => {
    return (
        <section id="landing_section" className="min-h-80 w-full">
            <div className="mx-auto container flex items-center justify-center p-2">
                <div className="py-10">
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
                        <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-5 py-3 rounded-lg cursor-pointer text-white ">
                            Get Started
                        </button>
                    </Link>
                </div>

                <div className="relative mx-auto">
                    <span>
                        <WalletIcon className="h-36 w-36 text-indigo-300" />
                    </span>
                    <div
                        aria-hidden={true}
                        className="absolute inset-0 blur-3xl to-orange-500 scale-110 via-indigo-600 from-purple-500 opacity-60 bg-gradient-to-tl rounded-full"
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection
