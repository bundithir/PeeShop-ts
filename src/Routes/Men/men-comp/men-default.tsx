import { Link } from "react-router-dom"
import Benefit from "../../../Components/Benefit/Benefit"
//import HeroShop from "../../../Components/Hero-shop/Hero-shop"
import CategoryCard from "../../../Components/Category/category-card"
import HeroCaro from "../../../Components/Hero-shop/Hero-caro"

export type Hero = {
    title : string,
}

const Hero_men : Hero ={
    title : 'men',
}


export const Men_default = () =>{
    const {title } = Hero_men
    return (
        <div>
            {/* <HeroShop title={title} name={name}  type={type} price={price}  btn={btn} bg={bg}/> */}
            <HeroCaro title={title} />
            <p className="text-center font-bold text-4xl my-[2rem] uppercase">SEARCH BY CATEGORY</p>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-[1rem] md:gap-[2rem]">
                <Link to='/men/t-shirt'><CategoryCard img={'./images/500x500.gif'} title={'t-shirt'}/></Link>
                <Link to='/men/casualshirt'><CategoryCard img={'./images/500x500.gif'} title={'casual shirt'}/></Link>
                <Link to='/men/pants'><CategoryCard img={'./images/500x500.gif'} title={'pants'}/></Link>
                <Link to='/men/jeans'><CategoryCard img={'./images/500x500.gif'} title={'jeans'}/></Link>
            </div>
            <Benefit/>
        </div>
    ) 
}