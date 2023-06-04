import { createSlice } from "@reduxjs/toolkit"

type Cartstate = {
    IsCartOpen : boolean ,
    CartItems :[] 
}


const initialState : Cartstate = {
    IsCartOpen : false ,
    CartItems : [] 
}

const cartSlice = createSlice({
    name : 'cart',
    initialState ,
    reducers : {
        SetCartOpen : ( state , action ) => {
            state.IsCartOpen = action.payload
        } ,
    }
})

export const { SetCartOpen } = cartSlice.actions

export const cartReducer = cartSlice.reducer