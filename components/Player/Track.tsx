import Image from 'next/image'
import React from 'react'
import TrackImage from '@assets/image/200x200bb more_chart_2.webp'

const Track = () => {
    return (
        <div className="flex">
            <div className="hidden md:flex lg:flex relative h-14 w-14 mr-3">
                <Image
                    className="rounded-lg"
                    src={TrackImage}
                    alt={'now playing'}
                    layout={'fill'}
                />
            </div>
            <div className="flex flex-col">
                <span className="font-bold">{'Im Good (Blue)'}</span>
                <span className="text-sm text-slate-400">{'David Gueta'}</span>
            </div>
        </div>
    )
}

export default Track
