import { Routes , Route } from "react-router-dom"
import { Kids_default } from "./kids-comp/kids-default"



export const Kids = () =>{
    return (
        <Routes>
            <Route index element={<Kids_default/>}/>
        </Routes>
    ) 
}