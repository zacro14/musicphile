import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
    banner: string | StaticImageData | any
    category: string
    title: string
    description: string
}
const ChartCard = (props: Props) => {
    const { banner, category, title, description } = props
    return (
        <div className="flex flex-col gap-y-3">
            <div className="relative h-96 w-96 ">
                <Image
                    className="rounded-lg"
                    src={banner}
                    alt={title}
                    layout={'fill'}
                />
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
