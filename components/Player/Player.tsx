import React, { useRef } from 'react'
import { IActiveSongProps } from 'redux/features/playerSlice'
interface PlayerProps {
    activeSong: IActiveSongProps
    isPlaying: boolean
    onTimeUpdate: (e: React.ChangeEvent<HTMLAudioElement>) => void
    onLoadedData: (e: React.ChangeEvent<HTMLAudioElement>) => void
    onEnded: () => void
    seekTime: string
}

const Player = (props: PlayerProps) => {
    const { activeSong, isPlaying, onEnded } = props
    const ref = useRef<HTMLAudioElement>(null)

    if (ref.current) {
        if (isPlaying) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }

    return (
        <audio
            ref={ref}
            src={activeSong?.hub?.actions[1]?.uri}
            onTimeUpdate={props.onTimeUpdate}
            onLoadedData={props.onLoadedData}
            onEnded={onEnded}
        />
    )
}

export default Player
