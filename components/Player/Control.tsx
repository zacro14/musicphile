import React, { useState } from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import {
    BsArrowRepeat,
    BsFillPauseFill,
    BsFillPlayFill,
    BsShuffle,
} from 'react-icons/bs'

interface IProps {
    isPlaying: boolean
    handlePlayPause: () => void
    handleNextSong: () => void
    handlePrevSong: () => void
}
const Control: React.FC<IProps> = ({
    isPlaying,
    handlePlayPause,
    handleNextSong,
    handlePrevSong,
}) => {
    return (
        <div className="flex max-w-24 md:max-w-[120px] lg:max-w-[120px] items-center justify-evenly md:w-28 lg:w-52 2xl:w-80 flex-auto mx-10 md:mx-20 lg:20">
            <MdSkipPrevious
                size={30}
                className="cursor-pointer text-white"
                onClick={handlePrevSong}
            />
            <span className="rounded-full bg-slate-600 flex items-center justify-center h-[40px] w-[40px]">
                {isPlaying ? (
                    <BsFillPauseFill
                        size={30}
                        className="cursor-pointer text-white"
                        onClick={handlePlayPause}
                    />
                ) : (
                    <BsFillPlayFill
                        onClick={handlePlayPause}
                        size={30}
                        className="cursor-pointer text-white ml-1"
                    />
                )}
            </span>
            <MdSkipNext
                size={30}
                className="cursor-pointer text-white"
                onClick={handleNextSong}
            />
        </div>
    )
}

export default Control
