
import { createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: 'all',
    close:false
  },
  reducers: {
    changeCategory: (state, action) => {
        
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload
    },
    closeSidebar:(state,action)=>{
      state.close = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {  changeCategory,closeSidebar } = categorySlice.actions

export default categorySlice.reducer