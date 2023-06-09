import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/user-reducer";
import { cartReducer } from "./cart/cart-reducer";
import { productsReducer } from "./product/product-reducer";

export const rootReducer = combineReducers({
    user : userReducer ,
    products : productsReducer ,
    cart : cartReducer
})