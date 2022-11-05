import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import playerSlice from './features/playerSlice'

//Global store
export const store = configureStore({
    reducer: {
        player: playerSlice,
    },
})
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
