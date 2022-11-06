import React from 'react'
import { IActiveSongProps } from 'redux/features/playerSlice'
interface PlayerProps {
    activeSong: IActiveSongProps
    isPlaying: boolean
}

const Player = (props: PlayerProps) => {
    const { activeSong } = props
    return <audio src={activeSong?.data?.hub?.actions[1]?.uri} />
}

export default Player
