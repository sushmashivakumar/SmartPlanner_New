import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    userData: (state,action) =>  action.payload,
  },
})

export const { userData } = userInfo.actions

export default userInfo.reducer