import { configureStore } from '@reduxjs/toolkit'
import boardReducer from './boardSlice'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    board: boardReducer,
  },
})