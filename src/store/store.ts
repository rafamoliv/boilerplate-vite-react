import { configureStore } from '@reduxjs/toolkit'

import auth from './Auth'
import initialSetting from './InitialSettings'

import { api } from '@/services/api'

const store = configureStore({
  reducer: {
    auth,
    initialSetting,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
