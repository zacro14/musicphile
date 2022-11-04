import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './features/playerSlice'

//Global store
export const store = configureStore({
    reducer: {
        player: playerSlice,
    },
})
