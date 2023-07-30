import { AddtoCart } from "../../Store/cart/cart-reducer"
import { useAppDispatch } from "../../Store/hook"
import { product } from "../../Store/product/product-reducer"
import { AddIcon } from "../Shop/shop-icon"

const LayoutProductCard = 'w-full lg:w-fit shadow-xl flex justify-between lg:flex-col rounded lg:rounded-none border-2 border-sc-text lg:border-0'
const ButtonAdd = "w-full h-full bg-background rounded-r lg:rounded-none hover:bg-hover hover:opacity-90 duration-300 text-white p-1 uppercase font-semibold"

type ProductProps = {
    product : product
    gender : "men" | "women" | "kids"
}
const ProductCard = ({product , gender} : ProductProps) =>{
    const { name , image , price } = product
    const dispatch = useAppDispatch()
    const Add = () => dispatch(AddtoCart(product))
    return(
        <div className={LayoutProductCard}>
            <div className="flex lg:flex-col gap-2">
                <img src={image} alt={name} className ='w-[100px] h-[100px] md:w-[125px] md:h-[125px] lg:h-[215px] lg:w-[215px] rounded-l lg:rounded-none'/>
                <div className="flex flex-col justify-center">
                    <p className="font-semibold text-sc-text uppercase lg:p-2">{gender}</p>
                    <p className="line-clamp-1 lg:line-clamp-2 font-semibold lg:text-lg lg:h-[60px] lg:w-[215px] lg:px-2">{name}</p>
                    <p className="uppercase font-bold lg:text-xl lg:p-2">THB {price.toFixed(2)}</p>
                </div>
            </div>
            <div>
                <button className={ButtonAdd} onClick={Add}><span><AddIcon/></span>add</button>
            </div>
        </div>
    )
}

export default ProductCard