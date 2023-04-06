import { createSlice } from '@reduxjs/toolkit'
import i18next from 'i18next'

import { api } from '@/services/api'

export const slice = createSlice({
  name: 'initialSetting',
  initialState: {
    isInitialized: false,
    repos: [],
    changeResult: ''
  },
  reducers: {
    setInitialSetting(state, action) {
      return { ...state, isInitialized: action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.fetchRepos.matchFulfilled, (state) => {
      state.changeResult = i18next.t('rxStore:initialSettings.changeResult')
    })
  }
})

export const { setInitialSetting } = slice.actions
export const selectInitialSetting = (state) => state.isInitialized
export default slice.reducer
