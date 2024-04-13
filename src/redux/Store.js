
import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import CategorySlice from './slices/CategorySlice'
import SearchSlice from './slices/SearchSlice'

export const store = configureStore({
  reducer: {
    cart:CartSlice,
    category : CategorySlice,
    search :SearchSlice,
  },
})