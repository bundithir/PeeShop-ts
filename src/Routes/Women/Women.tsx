import { Routes , Route } from "react-router-dom"
import { Women_default } from "./women-comp/women-default"



export const Women = () =>{
    return (
        <Routes>
            <Route index element={<Women_default/>}/>
        </Routes>
    ) 
}