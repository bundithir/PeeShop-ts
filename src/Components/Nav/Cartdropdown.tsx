import {ButtonCheckout , Cartdrop} from './Nav_styles'
import {useNavigate } from 'react-router-dom'
import { Items } from '../../Store/cart/cart-reducer'
import { useAppSelector } from '../../Store/hook'
import { SelectcartItems } from '../../Store/cart/cart-selector'

type ItemsProps = {
    product : Items
}
const CartItem =({product} : ItemsProps)=>{
    const { name , price , quantity ,image} : Items = product
    return(
        <div className="flex gap-[1rem] mb-[1rem]">
            <img src={image} alt={name} className='h-[50px] w-[50px]'/>
            <div className="flex flex-col">
                <h1 className="line-clamp-1">{name}</h1>
                <p>THB {price.toFixed(2)} x {quantity}</p>
            </div>
            
        </div>
    )
}

export const Cartdropdown = () =>{
    const CartItems = useAppSelector(SelectcartItems)
    const Navigate = useNavigate()
    return(
        <div className={Cartdrop}>
            <div className="flex flex-col items-center justify-between h-full p-2">
                <div className='overflow-auto w-full'>
                {CartItems.map(item => (
                        <CartItem key={item.id} product={item}/>
                    ))}

                </div>
                <button disabled={CartItems.length === 0} className={ButtonCheckout} onClick={() =>Navigate('/summary')}>summary</button>
            </div>
        </div>
    )
}