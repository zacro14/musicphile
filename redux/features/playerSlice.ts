import { createSlice } from '@reduxjs/toolkit'

interface IAction {
    [key: string]: string
}
export interface IHub {
    actions: IAction[]
}
interface IData {
    title: string
    hub: IHub
}
interface IImage {
    background: string
}
export interface IActiveSongProps {
    title: string
    data: IData
    subtitle: string
    images: IImage
    hub: IHub
}

type PlayerState = {
    isPlaying: boolean
    activeSong?: IActiveSongProps
    currentIndex: number
    isActive: boolean
    currentSongs: []
}

const playerslice = createSlice({
    name: 'player',
    initialState: {
        isPlaying: false,
        activeSong: {},
        currentIndex: 0,
        isActive: false,
        currentSongs: [],
    } as PlayerState,

    reducers: {
        setActiveSong: (state, action) => {
            state.activeSong = action.payload.song
            if (action.payload?.data?.tracks?.hits) {
                state.currentSongs = action.payload.data.tracks.hits
            } else if (action.payload?.data?.properties) {
                state.currentSongs = action.payload?.data?.tracks
            } else {
                state.currentSongs = action.payload.data
            }
            state.currentIndex = action.payload.i
            state.isActive = true
        },
        nextSong: (state, action) => {
            state.activeSong = state.currentSongs[action.payload]
            state.currentIndex = action.payload
            state.isActive = true
        },
        playpause: (state, action) => {
            state.isPlaying = action.payload
        },
    },
})

export const { setActiveSong, playpause, nextSong } = playerslice.actions

export default playerslice.reducer
