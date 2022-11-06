import React from 'react'
import { playpause } from 'redux/features/playerSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'
import Control from './Control'
import Player from './Player'
import SeekStatus from './SeekStatus'
import SeekStatusMobile from './SeekStatusMobile'
import Track from './Track'
import Volume from './Volume'

const MusicPlayer = () => {
    const { isActive, isPlaying, activeSong } = useAppSelector(
        (state) => state.player
    )
    const dispatch = useAppDispatch()

    const handleplaypause = () => {
        if (!isActive) return

        if (isPlaying) {
            dispatch(playpause(false))
        } else {
            dispatch(playpause(true))
        }
    }
    return (
        <>
            <div className="fixed h-20 w-full text-white bottom-0 bg-gray-900 z-10 border-t border-slate-300 border-opacity-10 py-3 px-5">
                <SeekStatusMobile />
                {activeSong && (
                    <div className="flex items-center gap-x-3">
                        <Track
                            title={activeSong?.title}
                            subtitle={activeSong?.subtitle}
                            coverImage={activeSong?.image?.background}
                        />

                        <SeekStatus />
                        <Control
                            isPlaying={isPlaying}
                            handlePlayPause={handleplaypause}
                        />
                        <Volume />
                        <Player activeSong={activeSong} isPlaying={false} />
                    </div>
                )}
            </div>
        </>
    )
}

export default MusicPlayer
