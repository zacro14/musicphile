import { createSlice } from '@reduxjs/toolkit'

interface ActiveSongProps {
    title: string
}

type PlayerState = {
    isPlaying: boolean
    activeSong: ActiveSongProps
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
        playpause: (state, action) => {
            state.isPlaying = action.payload
        },
    },
})

export const { setActiveSong, playpause } = playerslice.actions

export default playerslice.reducer
