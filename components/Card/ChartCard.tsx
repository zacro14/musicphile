import Image, { StaticImageData } from 'next/image'
import React from 'react'
import bannerImage from '@assets/image/200x200bb more_chart_2.webp'
import David from '@assets/image/200x200bb -davidgueta.webp'
interface Props {
    banner: string | StaticImageData | any
    category: string
    title: string
    description: string
}
const ChartCard = (props: Props) => {
    const { banner, category, title, description } = props
    return (
        <div className="flex flex-col gap-y-3 ">
            <div className="relative h-96 w-96 overflow-hidden bg-neutral-900 rounded-xl">
                <div className="absolute top-0 left-0 right-0 bottom-0">
                    <ul className="absolute -top-56 right-40 -rotate-45">
                        <li className="absolute w-40 h-40 top-44 right-44">
                            <Image
                                className="rounded-lg"
                                src={banner}
                                alt={title}
                                layout={'fill'}
                            />
                        </li>
                        <li className="absolute w-40 h-40 top-0 right-44">
                            <Image
                                className="rounded-lg"
                                src={bannerImage}
                                alt={title}
                                layout={'fill'}
                            />
                        </li>
                        <li className="absolute w-40 h-40 top-44 right-0">
                            <Image
                                className="rounded-lg"
                                src={David}
                                alt={title}
                                layout={'fill'}
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-white">
                <span className="font-extrabold text-3xl">
                    {title} <br />
                    {category}
                </span>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
    )
}

export default ChartCard
