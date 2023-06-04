import React, { useState } from "react"
import { Logoform } from "../../../Components/Nav/Nav_Icon"
import { Link , useNavigate } from "react-router-dom"
import { LocatedForm , LayoutForm , Input , Button } from "../Form-style"
import { useAppDispatch , useAppSelector } from "../../../Store/hook"
import { fetchUserSignin } from "../../../Store/user/user-reducer"
import SpinnerForm from "../../../Components/Spinner/spinner-form"
import { SelectuserLoading } from "../../../Store/user/user-selector"



export type typeInForm = {
    email : string ,
    password : string,
}

const DefaultForm : typeInForm = {
    email : '' ,
    password : '',
}

const SigninForm = () =>{
    const dispatch = useAppDispatch()
    const Navigate = useNavigate()
    const userLoading =  useAppSelector(SelectuserLoading)
    const [ data , Setdata] = useState(DefaultForm)
    const { email , password } = data

    const handleinput = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const {name , value} = e.target;
        Setdata({...data , [name] : value})
        // console.log(data)

    }

    const handleSubmit = async(e : React.ChangeEvent<HTMLFormElement>) =>{   
        e.preventDefault()     
        const user = await dispatch(fetchUserSignin(data))
        console.log(user)
        if(!user.payload){
            alert('TRY AGAIN')
        }else{
            Navigate('/')
        }
    }    

    return (
        <div className={LocatedForm}>
            <form onSubmit={handleSubmit} className={LayoutForm}>
                {userLoading?
                <SpinnerForm/>
                :
                <Logoform />
                }
                <input type="email" name = 'email' onChange={handleinput} value={email} placeholder='Email' required className={Input}/>
                <input type="password" name="password" onChange={handleinput} value={password} placeholder='password' minLength={8} required className={Input}/>
                <button type='submit' className={Button}>Sign in</button>
                <p className='text-center'>Do not have an account create <Link to='/signup' className='underline'>here</Link></p>
            </form>
        </div>
    )
}

export default SigninForm