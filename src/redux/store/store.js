import { configureStore } from '@reduxjs/toolkit'
import { categorySlice } from '../reducer/rootReducer'

const store = configureStore({
    reducer: {
      counter: categorySlice.reducer
    }
  })

export default store