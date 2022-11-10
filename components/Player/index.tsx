import React, { useState } from 'react'
import { nextSong, playpause, prevSong } from 'redux/features/playerSlice'
import { useAppDispatch, useAppSelector } from 'redux/store'
import Control from './Control'
import Player from './Player'
import SeekStatus from './SeekStatus'
import SeekStatusMobile from './SeekStatusMobile'
import Track from './Track'
import Volume from './Volume'

const MusicPlayer = () => {
    const { isActive, isPlaying, activeSong, currentSongs, currentIndex } =
        useAppSelector((state) => state.player)
    const [duration, setDuration] = useState(0)
    const [seekTime, setSeekTime] = useState<string>('0')
    const [appTime, setAppTime] = useState(0)
    const dispatch = useAppDispatch()

    const handleplaypause = (): void => {
        if (!isActive) return

        if (isPlaying) {
            dispatch(playpause(false))
        } else {
            dispatch(playpause(true))
        }
    }

    const handleNextSong = () => {
        dispatch(
            nextSong(
                currentSongs.length - 1 === currentIndex ? 0 : currentIndex + 1
            )
        )
    }

    const handlePrevSong = () => {
        if (currentIndex === 0) {
            dispatch(prevSong(currentSongs.length - 1))
        } else {
            dispatch(prevSong(currentIndex - 1))
        }
    }

    return (
        <>
            <div className="fixed h-20 w-full text-white bottom-0 bg-gray-900 z-10 border-t border-slate-300 border-opacity-10 py-3 px-5">
                {activeSong && (
                    <>
                        <SeekStatusMobile
                            value={appTime}
                            max={duration}
                            onInput={(e) => setSeekTime(e.target.value)}
                            apptime={appTime}
                            min={0}
                        />
                        <div className="flex items-center gap-x-3">
                            <Track
                                title={activeSong?.title}
                                subtitle={activeSong?.subtitle}
                                coverImage={activeSong?.images?.background}
                            />
                            <SeekStatus
                                value={appTime}
                                max={duration}
                                onInput={(e) => setSeekTime(e.target.value)}
                                apptime={appTime}
                                min={0}
                            />
                            <Control
                                isPlaying={isPlaying}
                                handlePlayPause={handleplaypause}
                                handleNextSong={handleNextSong}
                                handlePrevSong={handlePrevSong}
                            />
                            <Volume />
                            <Player
                                seekTime={seekTime}
                                activeSong={activeSong}
                                isPlaying={isPlaying}
                                onEnded={handleNextSong}
                                onTimeUpdate={(event) =>
                                    setAppTime(event.target.currentTime)
                                }
                                onLoadedData={(event) =>
                                    setDuration(event.target.duration)
                                }
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default MusicPlayer
