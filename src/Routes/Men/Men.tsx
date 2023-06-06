import { Routes , Route } from "react-router-dom"
import { Men_default } from "./men-comp/men-default"
import Men_shop from "./men-comp/men-shop"


export const Men = () =>{
    
    return (
        <Routes>
            <Route index element={<Men_default/>}/>
            <Route path=':category' element={<Men_shop/>}/>
        </Routes>
    ) 
}