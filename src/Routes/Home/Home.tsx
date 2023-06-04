import Benefit from "../../Components/Benefit/Benefit"
import Noctice from "../../Components/Notice/Notice"
import HeroHome from "./Hero-Home/HeroHome"

type Text = string
const Newest : Text = "Just arrived!"
const collection : Text = 'Spring/Summer 2023 Collection'

export const Home = () =>{
    return (
        <div>
            <HeroHome newest={Newest} collection={collection} btn="more"/>
            <Noctice/>
            <Benefit/>
        </div>
    )
}