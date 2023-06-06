import { Routes , Route } from "react-router-dom"
import { Kids_default } from "./kids-comp/kids-default"
import Kids_shop from "./kids-comp/kids-shop"



export const Kids = () =>{
    return (
        <Routes>
            <Route index element={<Kids_default/>}/>
            <Route path=':category' element={<Kids_shop/>}/>

        </Routes>
    ) 
}