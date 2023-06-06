import { createSlice } from "@reduxjs/toolkit"
import { product } from "../product/product-reducer"

export type Items = {
    id : number ,
    name : string,
    price : number ,
    category : string ,
    image : string ,
    quantity : number
}

type Cartstate = {
    IsCartOpen : boolean ,
    CartItems :Items[]
}



// eslint-disable-next-line react-refresh/only-export-components
const AddItemToCart = (CartItems : Items[] ,itemAdded : product) =>{
    const ItemExist = CartItems.find(item => item.id === itemAdded.id)
    if(ItemExist){
        return CartItems.map(item => item.id === itemAdded.id?
            {...item,quantity:item.quantity+1}
            :
            item)
    }
    return [...CartItems,{...itemAdded , quantity : 1}]
}

// eslint-disable-next-line react-refresh/only-export-components
const Removeitem = (CartItems : Items[] , ItemRemoved : product) =>{
    const ItemExist = CartItems.find( item => item.id === ItemRemoved.id)
    
    if(ItemExist){
        if(ItemExist.quantity === 1) return CartItems.filter( item => item.id !== ItemRemoved.id)
    }
    return CartItems.map(item => item.id === ItemRemoved.id?
        {...item,quantity:item.quantity-1}
        :
        item)
}

// eslint-disable-next-line react-refresh/only-export-components
const DeleteItem = (CartItems : Items[] , ItemDeleted : product) =>  CartItems.filter( item => item.id !== ItemDeleted.id)


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
        AddtoCart : ( state , action ) =>{
            state.CartItems = AddItemToCart(state.CartItems , action.payload)
        } ,
        RemovefromCart : ( state , action )=>{
            state.CartItems = Removeitem(state.CartItems , action.payload)
        } ,
        DeleteItemfromCart : ( state , action )=>{
            state.CartItems = DeleteItem(state.CartItems , action.payload)
        } ,
        ResetCart : (state) => {
            state.CartItems = []
            state.IsCartOpen = false
        }
    }
})

export const { SetCartOpen , AddtoCart , RemovefromCart ,DeleteItemfromCart,ResetCart} = cartSlice.actions

export const cartReducer = cartSlice.reducer