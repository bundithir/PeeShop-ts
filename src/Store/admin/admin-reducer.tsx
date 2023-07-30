import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";

export type AdminProduct = {
    id : number ,
    name : string,
    price : number ,
    category : string ,
    image : string ,
    gender : string 
}
export type AddProduct = {
    name : string,
    price : number ,
    category : string ,
    image : string ,
    gender : string 
}
type res = AdminProduct[] | string

type AdminState = {
    AdminProduct : AdminProduct[],
    AddProductOpen : boolean ,
    DelLoading : boolean,
    UpdLoading : boolean,
    AddLoading : boolean,
    AdminError : boolean | unknown
}
const initialState : AdminState = {
    AdminProduct : [] ,
    AddProductOpen : false ,
    DelLoading : false,
    UpdLoading : false,
    AddLoading : false,
    AdminError : false
}

export const FetchAdminProducts = createAsyncThunk('admin/fetchAdminProducts' , 
    async() => {
        try {
            const response = await fetch('https://peeshop-ts-back.adaptable.app/products')
            const products: res = await response.json()
            if(products === 'Cannot Fetch Products'){
                return []
            }else{
                return products
            } 
        } catch (error) {
            return error
        }
    }
)

export const DeleteAdminProducts = createAsyncThunk('admin/deleteAdminProducts',
    async(Keys : React.Key[]) => {
        try {
            const response = await fetch('https://peeshop-ts-back.adaptable.app/delproduct' ,{
                method : 'DELETE' ,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    id : Keys
                })
            })
            const product : res = await response.json()
            if(product === 'Cannot Delete'){
                return []
            }else{
                return product 
            } 
        } catch (error) {
            return error
        }
    }
)

export const UpdateAdminProducts = createAsyncThunk('admin/updateAdminProducts',
    async(UpdatedProduct : AdminProduct) => {
        try {
            const { id , name , price , gender , category , image } = UpdatedProduct
            const response = await fetch('https://peeshop-ts-back.adaptable.app/updateproduct' ,{
                method : 'PUT' ,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    id ,
                    name ,
                    price ,
                    gender,
                    category ,
                    image
                })
            })
            const product : res = await response.json()
            if(product === 'Cannot Update'){
                return []
            }else{
                return product 
            } 
        } catch (error) {
            return error
        }
    }
)


export const AddAdminProducts = createAsyncThunk('admin/addAdminProducts',
    async(AddedProduct : AddProduct) => {
        try {
            const {  name , price , gender , category , image } = AddedProduct
            const response = await fetch('https://peeshop-ts-back.adaptable.app/addproduct' ,{
                method : 'POST' ,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    name ,
                    price ,
                    gender,
                    category ,
                    image
                })
            })
            const product : res = await response.json()
            if(product === 'Cannot Add'){
                return []
            }else{
                return product 
            } 
        } catch (error) {
            return error
        }
    }
)

const adminSlice = createSlice({
    name: 'admin',
    initialState ,
    reducers: {
        SetAddFormOpen : ( state , action ) => {
            state.AddProductOpen = action.payload
        } ,
    },
    extraReducers : (builder)=>{

        //PULL PRODUCT
        // builder.addCase(FetchAdminProducts.pending , (state)=>{
        // })
        builder.addCase(FetchAdminProducts.fulfilled , (state , action)=>{
            state.AdminProduct = action.payload as AdminProduct[]
        })
        builder.addCase(FetchAdminProducts.rejected , (state ,action)=>{
            state.AdminError = action.payload
        })    
        
        
        //REMOVE PRODUCT
        builder.addCase(DeleteAdminProducts.pending , (state)=>{
            state.DelLoading = true
        })
        builder.addCase(DeleteAdminProducts.fulfilled , (state , action)=>{
            state.AdminProduct = action.payload as AdminProduct[]
            state.DelLoading = false
        })
        builder.addCase(DeleteAdminProducts.rejected , (state ,action)=>{
            state.DelLoading = false
            state.AdminError = action.payload
        })  


        //UPDATE PRODUCT
        builder.addCase(UpdateAdminProducts.pending , (state)=>{
            state.UpdLoading = true
        })
        builder.addCase(UpdateAdminProducts.fulfilled , (state , action)=>{
            state.AdminProduct = action.payload as AdminProduct[]
            state.UpdLoading = false
        })
        builder.addCase(UpdateAdminProducts.rejected , (state ,action)=>{
            state.UpdLoading = false
            state.AdminError = action.payload
        })  

        //ADD PRODUCT
        builder.addCase(AddAdminProducts.pending , (state)=>{
            state.AddLoading = true
        })
        builder.addCase(AddAdminProducts.fulfilled , (state , action)=>{
            state.AdminProduct = action.payload as AdminProduct[]
            state.AddLoading = false
        })
        builder.addCase(AddAdminProducts.rejected , (state ,action)=>{
            state.AddLoading = false
            state.AdminError = action.payload
        })  
    },
        
  })

// eslint-disable-next-line react-refresh/only-export-components
export const { SetAddFormOpen } = adminSlice.actions
  
// eslint-disable-next-line react-refresh/only-export-components
export const adminReducer = adminSlice.reducer