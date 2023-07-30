import { useAppDispatch } from "../../Store/hook";
import { FetchAdminProducts } from "../../Store/admin/admin-reducer";
import { useEffect } from 'react'
import { AntDTable } from "./AntDTable";

const Admin = ()=>{
    const dispatch = useAppDispatch()
    const FetchProductAdmin = async()=> await dispatch(FetchAdminProducts())
    useEffect(()=> {
        FetchProductAdmin()
    },[])
    return (
        <div>
            <AntDTable/>
        </div>
    )
}
export default Admin ;