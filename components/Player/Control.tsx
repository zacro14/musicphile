import React, { useState } from 'react'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import {
    BsArrowRepeat,
    BsFillPauseFill,
    BsFillPlayFill,
    BsShuffle,
} from 'react-icons/bs'

const Control = () => {
    const [playing, setPlaying] = useState<boolean>(false)

    return (
        <div className="flex w-24 md:max-w-[120px] lg:max-w-[120px] items-center justify-around md:w-28 lg:w-52 2xl:w-80 flex-auto mx-10 md:mx-20 lg:20">
            <MdSkipPrevious size={30} className="cursor-pointer text-white" />
            <span className="rounded-full bg-slate-600 flex items-center justify-center h-[40px] w-[40px]">
                {playing ? (
                    <BsFillPauseFill
                        size={30}
                        className="cursor-pointer text-white"
                        onClick={() => setPlaying(!playing)}
                    />
                ) : (
                    <BsFillPlayFill
                        onClick={() => setPlaying(!playing)}
                        size={30}
                        className="cursor-pointer text-white ml-1"
                    />
                )}
            </span>

            <MdSkipNext size={30} className=" cursor-pointer text-white" />
        </div>
    )
}

export default Control
