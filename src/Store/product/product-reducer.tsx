import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import { URLFetch } from "../../Routes/Men/men-comp/men-shop"
type ProductsState = {
    Products : product[] | any ,
    LoadingProducts : boolean ,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error : any
}

const initialState : ProductsState = {
    Products : [] ,
    LoadingProducts : false ,
    error : false
}

export type product = {
    id : number ,
    name : string,
    price : number ,
    category : string ,
    image : string
}
type res = product[] | string


export const fetchproductsCategory = createAsyncThunk('user/fetchproductsCategory' , 
    async({gender ,category} : URLFetch) => {
        try {
            const response = await fetch(`https://peeshop-ts-back.adaptable.app/${gender}/${category}`)
            const products: res = await response.json()
            if(products === 'Refresh'){
                return null
            }else{
                return products 
            } 
        } catch (error) {
            return error
        }
    }
)


const productsSlice = createSlice({
    name: 'products',
    initialState ,
    reducers: {
        
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchproductsCategory.pending , (state)=>{
            state.LoadingProducts = true
        })
        builder.addCase(fetchproductsCategory.fulfilled , (state , action)=>{
            state.Products = action.payload
            state.LoadingProducts = false
        })
        builder.addCase(fetchproductsCategory.rejected , (state ,action)=>{
            state.LoadingProducts = false
            state.error = action.payload
        })
        
          
    },
        
  })

  
// export const {  } = productsSlice.actions

export const productsReducer = productsSlice.reducer