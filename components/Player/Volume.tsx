import React from 'react'
import { HiVolumeUp } from 'react-icons/hi'

const Volume = () => {
    return (
        <div className="hidden md:block">
            <HiVolumeUp size={30} className="cursor-pointer text-white" />
        </div>
    )
}

export default Volume
