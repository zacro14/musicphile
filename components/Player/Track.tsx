import Image from 'next/image'
import React from 'react'

interface ITrackProps {
    title: string
    subtitle: string
    coverImage: any
}
const Track = (props: ITrackProps) => {
    const { title, subtitle, coverImage } = props
    return (
        <div className="flex w-2/5">
            <div className="hidden md:flex lg:flex relative h-14 w-14 mr-3">
                <Image
                    className="rounded-lg"
                    src={coverImage}
                    alt={title}
                    layout={'fill'}
                />
            </div>
            <div className="flex flex-col truncate  ">
                <span className="font-bold">{title}</span>
                <span className="text-sm text-slate-400 truncate">
                    {subtitle}
                </span>
            </div>
        </div>
    )
}

export default Track
