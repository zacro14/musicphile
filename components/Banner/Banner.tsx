import Image from 'next/image'
import React from 'react'
import { useAppSelector } from 'redux/store'

interface Banner {
    images: any
    title: string
}
interface BannerProps {
    banner: any[]
}
const Banner = (props: BannerProps) => {
    const { banner } = props
    const { activeSong } = useAppSelector((state) => state.player)
    return (
        <section className=" h-72 md:h-96 text-white bg-slate-100 w-full overflow-hidden bg-gradient-to-t from-indigo-500  ">
            <div className="relative mx-auto max-w-7xl p-5 flex flex-col md:flex-row  md:items-center h-full space-y-5">
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
                <div className=" relative w-40 h-40 md:w-80 md:h-80 bg-gradient-to-b from-slate-200 to-indigo-800 object-cover flex-col rounded-lg mr-5 drop-shadow-2xl">
                    {activeSong ? (
                        <Image
                            className="rounded-lg"
                            src={activeSong?.images?.background}
                            alt={activeSong?.title}
                            layout={'fill'}
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            <h2 className="text-2xl md:text-3xl font-bold">
                                Top 50
                            </h2>
                            <hr className="border border-slate-400 w-2/5"></hr>
                            <span>Global</span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col">
                    <h1 className="truncate font-bold text-3xl md:text-5xl lg:text-6xl text-start">
                        {activeSong ? activeSong.title : 'Top Global Songs'}
                    </h1>
                    <span>{activeSong?.subtitle}</span>
                </div>
            </div>
        </section>
    )
}

export default Banner
