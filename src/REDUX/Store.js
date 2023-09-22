import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice'
import FavoruriteReducer from './FavoruriteSlice'

export const Store = configureStore({
    reducer:{
        cart : CartReducer,
        favorurite : FavoruriteReducer,
    },
})