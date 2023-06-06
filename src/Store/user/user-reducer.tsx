import { createSlice , createAsyncThunk } from "@reduxjs/toolkit"
import { typeInForm } from "../../Routes/Sign/Signin/Signin-form"
import { typeUpForm } from "../../Routes/Sign/Signup/Signup-form"
type Userstate = {
    currentUser : any ,
    LoadingUser : boolean ,
    error : any
}

const initialState : Userstate = {
    currentUser : null ,
    LoadingUser : false ,
    error : false
}

export const fetchUserSignin = createAsyncThunk('user/fetchSignin' , 
    async(DataUser : typeInForm) => {
        try {
            const response = await fetch('https://peeshop-ts-back.adaptable.app/signin' ,{
                method : 'POST' ,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    email : DataUser.email ,
                    password : DataUser.password
                })
            })
            const user = await response.json()
            if(user === 'unable to signin'){
                return null
            }else{
                return user 
            } 
        } catch (error) {
            return error
        }
    }
)

export const fetchUserSignup = createAsyncThunk('user/fetchSignup' , 
    async(DataUser : typeUpForm) => {
        try {
            const response = await fetch('https://peeshop-ts-back.adaptable.app/signup' ,{
                method : 'POST' ,
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({
                    name : DataUser.name ,
                    email : DataUser.email ,
                    password : DataUser.password ,
                    confirmpassword : DataUser.confirmpassword
                })
            })
            const user = await response.json()
            if(user === 'unable to register'){
                return null
            }else{
                return user 
            } 
        } catch (error) {
            return error
        }
    }
)



const userSlice = createSlice({
    name: 'user',
    initialState ,
    reducers: {
        UserLogout : (state)=>{
            state.currentUser = null
        }
    },
    extraReducers : (builder)=>{
        builder.addCase(fetchUserSignin.pending , (state)=>{
            state.LoadingUser = true
        })
        builder.addCase(fetchUserSignin.fulfilled , (state , action)=>{
            state.currentUser = action.payload
            state.LoadingUser = false
        })
        builder.addCase(fetchUserSignin.rejected , (state ,action)=>{
            state.LoadingUser = false
            state.error = action.payload
        })
        builder.addCase(fetchUserSignup.pending , (state)=>{
            state.LoadingUser = true
        })
        builder.addCase(fetchUserSignup.fulfilled , (state , action)=>{
            state.currentUser = action.payload
            state.LoadingUser = false
        })
        builder.addCase(fetchUserSignup.rejected , (state ,action)=>{
            state.LoadingUser = false
            state.error = action.payload
        })
          
    },
        
  })

  
export const { UserLogout } = userSlice.actions

export const userReducer = userSlice.reducer