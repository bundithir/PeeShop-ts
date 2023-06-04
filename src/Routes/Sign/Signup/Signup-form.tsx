import { useState } from "react"
import { Logoform } from "../../../Components/Nav/Nav_Icon"
import { Link , useNavigate } from "react-router-dom"
import { LocatedForm , LayoutForm , Input , Button } from "../Form-style"
import { useAppDispatch , useAppSelector } from "../../../Store/hook"
import SpinnerForm from "../../../Components/Spinner/spinner-form"
import { SelectuserLoading } from "../../../Store/user/user-selector"
import { fetchUserSignup } from "../../../Store/user/user-reducer"

export type typeUpForm = {
    name : string,
    email : string ,
    password : string,
    confirmpassword : string 
}

const DefaultForm : typeUpForm = {
    name : '',
    email : '' ,
    password : '',
    confirmpassword : ''
}

const SignupForm = () =>{
    const dispatch = useAppDispatch()
    const Navigate = useNavigate()
    const userLoading =  useAppSelector(SelectuserLoading)
    const [ data , Setdata] = useState(DefaultForm)
    const { name , email , password , confirmpassword } = data

    const handleinput = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const {name , value} = e.target;
        Setdata({...data , [name] : value})
        // console.log(data)
    }

    const handleSubmit = async(e : React.ChangeEvent<HTMLFormElement>) =>{   
        e.preventDefault()     
        
        const user = await dispatch(fetchUserSignup(data))
        if(user.payload === 'error'){
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
                <input type="text" name="name" onChange={handleinput} value={name} placeholder='Username' required className={Input}/>
                <input type="email" name="email" onChange={handleinput} value={email} placeholder='Email' required className={Input}/>
                <input type="password" name="password" onChange={handleinput} value={password} placeholder='password' minLength={8} required className={Input}/>
                <input type="password" name="confirmpassword" onChange={handleinput} value={confirmpassword} placeholder='confirm password' minLength={8} required className={Input}/>
                <button type="submit" className={Button}>Register</button>
                <p className='text-center'>Have already an account click <Link to ='/signin' className='underline'>here</Link></p>
            </form>
        </div>
    )
}

export default SignupForm