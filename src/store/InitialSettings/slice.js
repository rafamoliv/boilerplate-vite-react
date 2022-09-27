import { createSlice } from '@reduxjs/toolkit'

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
      state.changeResult = 'Exemplo personalizando response'
    })
  }
})

export const { setInitialSetting } = slice.actions
export const selectInitialSetting = (state) => state.isInitialized
export default slice.reducer
