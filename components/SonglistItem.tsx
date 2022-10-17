import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    order: number
    song: string
    artist: string
    thumbImg?: string | StaticImageData
}

const SonglistItem = (props: Props) => {
    const { song, artist, order, thumbImg } = props

    return (
        <div className="flex h-24 items-center">
            <div className="flex-none mr-2 w-10">{order}</div>
            <div className="flex-1 w-64 ...">
                <div className="relative h-20 w-20 object-cover">
                    <Image
                        className="rounded-lg"
                        src={thumbImg}
                        alt={song}
                        layout="fill"
                    />
                </div>
            </div>
            <div className="flex-1 w-32">
                <span className=" flex flex-col justify-between">
                    <Link href={{ pathname: '/track/' }} passHref>
                        <a className="font-bold">{song}</a>
                    </Link>
                    <Link href={{ pathname: '/artist' }} passHref>
                        <a className="text-slate-400">{artist}</a>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default SonglistItem
