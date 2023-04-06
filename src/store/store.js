import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'
import getUsersSlice from './slices/getUsersSlice'
import productSlice from './slices/productSlice'


export const store= configureStore({
    reducer : {
        products:productSlice,
        cart:cartSlice,
        users: getUsersSlice,
    }
})