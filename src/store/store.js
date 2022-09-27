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

export default store
