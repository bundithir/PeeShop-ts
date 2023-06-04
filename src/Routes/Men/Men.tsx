import { Routes , Route } from "react-router-dom"
import { Men_default } from "./men-comp/men-default"


export const Men = () =>{
    return (
        <Routes>
            <Route index element={<Men_default/>}/>
            {/* <Route path=':category' element={<Shop/>}/> */}
        </Routes>
    ) 
}