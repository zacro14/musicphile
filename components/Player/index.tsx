import React from 'react'
import Control from './Control'
import SeekStatus from './SeekStatus'
import Track from './Track'
import Volume from './Volume'

const MusicPlayer = () => {
    return (
        <div className="fixed h-20 w-full text-white bottom-0 bg-gray-900 z-10 border-t border-slate-300 border-opacity-10 py-3 px-5">
            <div className="flex items-center gap-x-3">
                <Track />
                <SeekStatus />
                <Control />
                <Volume />
            </div>
        </div>
    )
}

export default MusicPlayer
