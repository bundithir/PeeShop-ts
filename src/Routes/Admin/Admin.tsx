import { useAppDispatch , useAppSelector } from "../../Store/hook";
import { FetchAdminProducts } from "../../Store/admin/admin-reducer";
import { useEffect } from 'react'
import { AntDTable } from "./AntDTable";
import { Selectuser } from "../../Store/user/user-selector";
import { useNavigate } from "react-router-dom";

const Admin = ()=>{
    const dispatch = useAppDispatch()
    const user = useAppSelector(Selectuser)
    const Navigate = useNavigate()
    const FetchProductAdmin = async()=> await dispatch(FetchAdminProducts())
    useEffect(()=> {
        if(user?.status !== 'Admin'){
            alert('You are not Admin')
            Navigate('/')
        }
        FetchProductAdmin()
    },[])
    return (
        <div>
            <AntDTable/>
        </div>
    )
}
export default Admin ;