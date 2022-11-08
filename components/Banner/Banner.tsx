import Image from 'next/image'
import React from 'react'

interface Banner {
    images: any
    title: string
}
interface BannerProps {
    banner: any[]
}
const Banner = (props: BannerProps) => {
    const { banner } = props

    return (
        <section className=" h-72 md:h-96 bg-slate-100 w-full overflow-hidden ">
            <div className="relative mx-auto max-w-7xl p-5 flex items-center h-full">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <ul className="absolute -top-60 right-40 -rotate-45">
                        <li className="absolute shadow-2xl md:w-40 md:h-40 top-44 right-44 rounded-lg">
                            <Image
                                className="rounded-lg"
                                src={banner[0].images.background}
                                alt={banner[0].title}
                                layout={'fill'}
                            />
                        </li>
                        <li className="absolute shadow-2xl md:w-40 md:h-40 top-0 right-44">
                            <Image
                                className="rounded-lg"
                                src={banner[1].images.background}
                                alt={banner[1].title}
                                layout={'fill'}
                            />
                        </li>
                        <li className="absolute shadow-2xl md:w-40 md:h-40 top-44 right-0">
                            <Image
                                className="rounded-lg"
                                src={banner[2].images.background}
                                alt={banner[2].title}
                                layout={'fill'}
                            />
                        </li>
                    </ul>
                </div>

                <div className="flex md:flex-row lg:flex-row items-center space-x-5">
                    <div className=" w-40 h-40 md:w-80 md:h-80 bg-slate-200 flex items-center justify-evenly flex-col ">
                        <h2 className="text-2xl md:text-3xl font-bold">
                            Top 50
                        </h2>
                        <hr className="border border-slate-400 w-2/5"></hr>
                        <span>Global</span>
                    </div>
                    <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center">
                        Top Global Songs
                    </h1>
                </div>
            </div>
        </section>
    )
}

export default Banner
