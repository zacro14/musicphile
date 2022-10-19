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
        <div className="flex items-center justify-around md:w-28 lg:w-52 2xl:w-80">
            <MdSkipPrevious size={30} className="cursor-pointer text-white" />
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
                    className="cursor-pointer text-white"
                />
            )}
            <MdSkipNext size={30} className=" cursor-pointer text-white" />
        </div>
    )
}

export default Control
