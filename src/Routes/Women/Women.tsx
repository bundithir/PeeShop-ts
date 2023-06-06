import { Routes , Route } from "react-router-dom"
import { Women_default } from "./women-comp/women-default"
import Women_shop from "./women-comp/women-shop"



export const Women = () =>{
    return (
        <Routes>
            <Route index element={<Women_default/>}/>
            <Route path=':category' element={<Women_shop/>}/>

        </Routes>
    ) 
}