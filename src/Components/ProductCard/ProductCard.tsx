import { AddtoCart } from "../../Store/cart/cart-reducer"
import { useAppDispatch } from "../../Store/hook"
import { product } from "../../Store/product/product-reducer"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({product} : any) =>{
    const { name , image , price } :product = product
    const dispatch = useAppDispatch()
    const Add = () => dispatch(AddtoCart(product))
    return(
        <div className="rounded shadow-xl">
            <img src={image} alt={name} className ='h-[300px] w-full rounded-t'/>
            <p className="font-semibold text-lg px-2 h-[50px]">{name}</p>
            <p className="uppercase font-bold text-xl p-2">THB {price.toFixed(2)}</p>
            <button className="w-full bg-black text-white rounded p-1 uppercase font-semibold" onClick={Add}>add to cart</button>
        </div>
    )
}

export default ProductCard