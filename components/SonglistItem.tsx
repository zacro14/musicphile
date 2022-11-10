import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid'
import { IHub, playpause, setActiveSong } from 'redux/features/playerSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'

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
    images?: image | any
    artist?: artistprop[] | undefined
    id: string
    hub: IHub
    data: any
}

const SonglistItem = (props: Props) => {
    const { subtitle, title, order, images, id: key, artist, data } = props
    const { isPlaying, activeSong } = useAppSelector((state) => state.player)
    const dispatch = useAppDispatch()

    const handlePlaying = () => {
        dispatch(setActiveSong({ song: props, i: order, data }))
        dispatch(playpause(true))
    }
    const handlePause = () => {
        dispatch(playpause(false))
    }

    return (
        <div
            className={`flex h-24 items-center  ${
                activeSong?.title === title && 'bg-slate-600 bg-opacity-10'
            }  hover:bg-slate-600 hover:bg-opacity-10 rounded-xl mb-5 py-5  px-3`}
        >
            {order !== undefined && (
                <div className="mr-2 w-5 font-semibold">
                    {order === 0 ? 1 : order + 1}
                </div>
            )}
            <div className=" mr-5 md:w-64 group">
                <div className="relative h-20 w-20 object-cover rounded-lg">
                    <Image
                        className="bg-white rounded-lg"
                        placeholder="blur"
                        blurDataURL={images?.background}
                        src={images?.background}
                        alt={title}
                        layout="fill"
                    />
                    <div
                        className={`absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] group-hover:block ${
                            activeSong?.title === title ? 'block' : 'hidden'
                        }`}
                    >
                        {isPlaying && activeSong?.title === props.title ? (
                            <PauseCircleIcon
                                className="h-10 w-10 cursor-pointer"
                                onClick={handlePause}
                            />
                        ) : (
                            <PlayCircleIcon
                                className="h-10 w-10 cursor-pointer"
                                onClick={handlePlaying}
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
                        <a className="truncate font-bold hover:underline underline-offset-4">
                            {title}
                        </a>
                    </Link>

                    {artist !== undefined ? (
                        <Link
                            href={{
                                pathname: '/artist/[slug]',
                                query: { slug: artist[0].adamid },
                            }}
                            passHref
                        >
                            <a className="truncate text-slate-400 hover:underline underline-offset-4">
                                {subtitle}
                            </a>
                        </Link>
                    ) : (
                        <a className="text-slate-400 hover:underline underline-offset-4">
                            {subtitle}
                        </a>
                    )}
                </span>
            </div>
        </div>
    )
}

export default SonglistItem
