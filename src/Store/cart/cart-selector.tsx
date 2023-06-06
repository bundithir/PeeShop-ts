import { RootState } from "../store";

export const SelectcartItems = (state : RootState) => state.cart.CartItems
export const SelectcartOpen = (state : RootState) => state.cart.IsCartOpen

export const SelectCountItems = (state : RootState) => state.cart.CartItems.reduce((acc , item) => acc + item.quantity , 0)

export const TotalSelect = (state : RootState)=>state.cart.CartItems.reduce((acc , item) => acc + (item.quantity * item.price) , 0)
