import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null
  },
  reducers: {
    setSignin(state, action) {
      return { ...state, user: action.payload }
    },
    setSignout(state) {
      return { ...state, user: null }
    }
  }
})

export const { setSignin, setSignout } = slice.actions
export const selectAuth = (state) => state.user
export default slice.reducer
