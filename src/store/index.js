import {configureStore} from '@reduxjs/toolkit'
import verifyUser from './slices/verifyUser.slice'
/*
import productsGlobal from './slices/product.slice'
import cartGlobal from './slices/cart.slice'

*/

const store = configureStore({
    reducer: {
        /*
        productsGlobal,
        cartGlobal,
        */
       verifyUser
    }
})

export default store