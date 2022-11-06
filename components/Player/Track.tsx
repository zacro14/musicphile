import Image from 'next/image'
import React from 'react'
import TrackImage from '@assets/image/200x200bb more_chart_2.webp'

interface ITrackProps {
    title: string
    subtitle: string
    coverImage: any
}
const Track = (props: ITrackProps) => {
    const { title, subtitle, coverImage } = props
    return (
        <div className="flex">
            <div className="hidden md:flex lg:flex relative h-14 w-14 mr-3">
                <Image
                    className="rounded-lg"
                    src={coverImage}
                    alt={title}
                    layout={'fill'}
                />
            </div>
            <div className="flex flex-col">
                <span className="font-bold">{title}</span>
                <span className="text-sm text-slate-400">{subtitle}</span>
            </div>
        </div>
    )
}

export default Track
