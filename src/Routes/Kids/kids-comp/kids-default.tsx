import Benefit from "../../../Components/Benefit/Benefit"
//import HeroShop from "../../../Components/Hero-shop/Hero-shop"
import { Link } from "react-router-dom"
import CategoryCard from "../../../Components/Category/category-card"
import { Hero } from "../../Men/men-comp/men-default"
import HeroCaro from "../../../Components/Hero-shop/Hero-caro"

const Hero_kids : Hero ={
    title : 'kids',

}

export const Kids_default = () =>{
    const {title } = Hero_kids
    return (
        <div>
            <HeroCaro title={title} />
            <p className="text-center font-bold text-4xl my-[2rem] uppercase">SEARCH BY CATEGORY</p>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[1rem] md:gap-[2rem]">
                <Link to='/kids/t-shirt'><CategoryCard img={'./images/500x500.gif'} title={'t-shirt'}/></Link>
                <Link to='/kids/shirt'><CategoryCard img={'./images/500x500.gif'} title={'shirt'}/></Link>
                <Link to='/kids/pants'><CategoryCard img={'./images/500x500.gif'} title={'pants'}/></Link>
                <Link to='/kids/jeans'><CategoryCard img={'./images/500x500.gif'} title={'jeans'}/></Link>
            </div>
            <Benefit/>
        </div>
    ) 
}