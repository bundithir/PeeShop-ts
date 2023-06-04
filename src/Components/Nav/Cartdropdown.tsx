import {ButtonCheckout , Cartdrop} from './Nav_styles'
import {useNavigate } from 'react-router-dom'

export const Cartdropdown = () =>{
    const Navigate = useNavigate()
    return(
        <div className={Cartdrop}>
            <div className="flex flex-col items-center justify-between h-full p-2">
                <div></div>
                <div className={ButtonCheckout} onClick={() =>Navigate('/chceckout')}>chceck out</div>
            </div>
        </div>
    )
}