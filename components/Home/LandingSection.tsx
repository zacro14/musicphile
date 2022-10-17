import Link from 'next/link'
import React from 'react'
import { PlayCircleIcon } from '@heroicons/react/24/solid'

const LandingSection = () => {
    return (
        <section id="landing_section" className="min-h-80 w-full">
            <div className="mx-auto container flex flex-col md:flex-row items-center justify-center p-2 gap-7">
                <div className="py-10">
                    <h1 className="font-bold text-7xl md:text-8xl mb-5">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                            Musicphile
                        </span>
                    </h1>
                    <h2 className="text-stone-500 mb-5">
                        For You Who Loves Music
                    </h2>
                    <Link href={{ pathname: '/charts' }} passHref>
                        <button className="bg-indigo-500 shadow-lg shadow-indigo-500/50 px-5 py-3 rounded-lg cursor-pointer text-white ">
                            Try it now
                        </button>
                    </Link>
                </div>

                <div className="relative mx-auto group">
                    <span className="z-10 ">
                        <PlayCircleIcon className=" cursor-pointer h-36 w-36 text-indigo-300 group-hover:scale-110 ease-in-out duration-300" />
                    </span>
                    <div
                        aria-hidden={true}
                        className="absolute z-0 group-hover:opacity-90 duration-500 inset-0 blur-3xl to-orange-500 scale-110 via-indigo-600 from-purple-500 opacity-60 bg-gradient-to-tl rounded-full"
                    ></div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection
