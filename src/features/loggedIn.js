import { createSlice } from '@reduxjs/toolkit'

export const loggedIn = createSlice({
  name: 'login',
  initialState: false,
  reducers: {
    signIn: () =>  true,
    signOut: () =>  false,
  },
})

export const { signIn, signOut } = loggedIn.actions

export default loggedIn.reducer