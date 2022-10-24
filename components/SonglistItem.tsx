import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid'

type image = {
    background: string
    coverart: string
}
interface artistprop {
    alias?: string
    id?: string
    adamid?: string | undefined
}
interface Props {
    order?: number
    title: string
    subtitle: string
    image?: image | any
    artist?: artistprop[] | any
    id: string
}

const SonglistItem = (props: Props) => {
    const { subtitle, title, order, image, id: key } = props
    const [playing, setPlaying] = useState(true)

    return (
        <div className="flex h-24 items-center hover:bg-slate-600 hover:bg-opacity-10 rounded-xl mb-5">
            <div className="flex-none mr-2 w-10 font-semibold">{order}</div>
            <div className="flex-1 w-64">
                <div className="relative h-20 w-20 object-cover">
                    <Image
                        className="rounded-lg  bg-white"
                        placeholder="blur"
                        blurDataURL={image?.background}
                        src={image?.background}
                        alt={title}
                        layout="fill"
                    />
                    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
                        {playing ? (
                            <PlayCircleIcon
                                className="h-10 w-10 cursor-pointer"
                                onClick={() => setPlaying(!playing)}
                            />
                        ) : (
                            <PauseCircleIcon
                                className="h-10 w-10 cursor-pointer"
                                onClick={() => setPlaying(!playing)}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="flex-1 w-32">
                <span className=" flex flex-col justify-between">
                    <Link
                        href={{
                            pathname: '/track/[slug]',
                            query: { slug: key },
                        }}
                        passHref
                    >
                        <a className="font-bold hover:underline underline-offset-4">
                            {title}
                        </a>
                    </Link>
                    <Link
                        href={{
                            pathname: '/artist/[slug]',
                            query: { slug: props?.artist[0]?.adamid },
                        }}
                        passHref
                    >
                        <a className="text-slate-400 hover:underline underline-offset-4">
                            {subtitle}
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default SonglistItem
