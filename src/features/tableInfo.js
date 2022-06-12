import { createSlice } from '@reduxjs/toolkit'

export const tableInfo = createSlice({
  name: 'table',
  initialState: [],
  reducers: {
    loadData: (state, action) =>  action.payload,
  },
})

export const { loadData } = tableInfo.actions

export default tableInfo.reducer