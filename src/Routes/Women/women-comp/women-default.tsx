import { Link } from "react-router-dom"
import Benefit from "../../../Components/Benefit/Benefit"
//import HeroShop from "../../../Components/Hero-shop/Hero-shop"
import CategoryCard from "../../../Components/Category/category-card"
import { Hero } from "../../Men/men-comp/men-default"
import HeroCaro from "../../../Components/Hero-shop/Hero-caro"


const Hero_women : Hero ={
    title : 'women',
}

export const Women_default = () =>{
    const {title } = Hero_women
    return (
        <div>
            <HeroCaro title={title} />
            <p className="text-center font-bold text-4xl my-[2rem] uppercase">SEARCH BY CATEGORY</p>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[1rem] md:gap-[2rem]">
                <Link to='/women/t-shirt'><CategoryCard img={'./images/500x500.gif'} title={'t-shirt'}/></Link>
                <Link to='/women/shirt'><CategoryCard img={'./images/500x500.gif'} title={'shirt'}/></Link>
                <Link to='/women/pants'><CategoryCard img={'./images/500x500.gif'} title={'pants'}/></Link>
                <Link to='/women/jeans'><CategoryCard img={'./images/500x500.gif'} title={'jeans'}/></Link>
            </div>
            <Benefit/>
        </div>
    ) 
}