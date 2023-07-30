import { AddtoCart, DeleteItemfromCart, RemovefromCart , Items } from '../../Store/cart/cart-reducer';
import { SelectcartItems, TotalSelect } from "../../Store/cart/cart-selector";
import { useAppDispatch , useAppSelector } from "../../Store/hook";
import { DeleteIcon } from './Summary-icon';
import { Button } from './Summary-style';
import { useNavigate } from 'react-router-dom';


const Summary = () =>{
    const CartItems = useAppSelector(SelectcartItems)
    const Total = useAppSelector(TotalSelect)
    const Navigate = useNavigate()
    const dispatch = useAppDispatch()
    const AddHandle = (product : Items)=>dispatch(AddtoCart(product))
    const DelHandle = (product : Items)=>dispatch(DeleteItemfromCart(product))
    const RemHandle = (product : Items)=>dispatch(RemovefromCart(product))
    const Pay = () => Navigate('/checkout')
    return(
        <div className="w-[80%] mx-auto">
            <p className="text-center font-bold text-4xl uppercase my-[1.5rem]">summary</p>
            {CartItems.map((item)=>{
            const { name , price , quantity ,image ,id} = item
            return(
                <div className="flex justify-between items-center py-[2rem] border-b" key={id}>
                    <div className="flex gap-[1rem] items-center">
                        <img src={image} alt={name} className='w-[125px] h-[125px] md:w-[150px] md:h-[150px]'/>
                        <div className="flex flex-col">
                            <p className="line-clamp-1">{name}</p>
                            <p className="uppercase md:hidden">thb {price.toFixed(2)}</p>
                            <div className="flex items-center justify-center border text-center md:hidden w-fit">
                                <p className={Button} onClick={()=> RemHandle(item)}>-</p>
                                <p className="w-[50px] text-center border-x px-2">{quantity}</p>
                                <p className={Button} onClick={()=> AddHandle(item)}>+</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex items-center gap-[3rem]">
                        <p className="uppercase hidden md:block">thb {price.toFixed(2)}</p>
                        <div className="md:flex items-center justify-center border text-center hidden ">
                            <p className={Button} onClick={()=> RemHandle(item)}>-</p>
                            <p className="w-[30px] md:w-[50px] text-center border-x px-2">{quantity}</p>
                            <p className={Button} onClick={()=> AddHandle(item)}>+</p>
                        </div>
                        <button onClick={()=> DelHandle(item)}><DeleteIcon/></button>
                    </div>
                </div>
            )})}
            <div className="my-[2rem]">
                <p className="text-right text-xl font-bold">Total : <span className="uppercase font-normal">thb {Total.toFixed(2)}</span></p>
            </div>
            <button className='flex justify-center p-5 bg-black text-white items-center mx-auto w-[200px] font-bold rounded-lg hover:bg-sc-text duration-300 uppercase' onClick={Pay}>check out</button>
        </div>
    )
}
export default Summary;