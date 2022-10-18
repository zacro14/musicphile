import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
interface Props {
    order: number
    song: string
    artist: string
    thumbImg?: string | StaticImageData | any
}

const SonglistItem = (props: Props) => {
    const { song, artist, order, thumbImg } = props

    return (
        <div className="flex h-24 items-center">
            <div className="flex-none mr-2 w-10 font-semibold">{order}</div>
            <div className="flex-1 w-64 ...">
                <div className="relative h-20 w-20 object-cover">
                    <Image
                        className="rounded-lg"
                        placeholder="blur"
                        blurDataURL={thumbImg}
                        src={thumbImg}
                        alt={song}
                        layout="fill"
                    />
                    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        <PlayCircleIcon className="h-10 w-10  hover:animate-ping cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex-1 w-32">
                <span className=" flex flex-col justify-between">
                    <Link href={{ pathname: '/track/' }} passHref>
                        <a className="font-bold hover:underline underline-offset-4">
                            {song}
                        </a>
                    </Link>
                    <Link href={{ pathname: '/artist' }} passHref>
                        <a className="text-slate-400 hover:underline underline-offset-4">
                            {artist}
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default SonglistItem
