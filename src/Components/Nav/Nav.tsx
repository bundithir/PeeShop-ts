import { Link, Outlet } from "react-router-dom"
import { useState } from "react"
import { Logo , BurgerIcon ,XIcon ,LoginIcon , LogoutIcon , CartIcon} from './Nav_Icon'
import { Xicon ,Categary ,SideMenu , BlackScreen} from "./Nav_styles"
import { Cartdropdown } from "./Cartdropdown"
import { Footer } from "../Footer/Footer"
import { useAppSelector , useAppDispatch } from "../../Store/hook"
import { Selectuser } from "../../Store/user/user-selector"
import { UserLogout } from "../../Store/user/user-reducer"
import { SelectcartOpen } from "../../Store/cart/cart-selector"
import { SetCartOpen } from "../../Store/cart/cart-reducer"



export const Nav = () =>{
    const user = useAppSelector(Selectuser)
    const CartOpen = useAppSelector(SelectcartOpen)
    const dispatch = useAppDispatch()
    const [SideOpen , SetSideOpen] = useState<boolean>(false)
    const handleSideopen = ()=> SetSideOpen(!SideOpen)
    const handleCartopen = ()=> dispatch(SetCartOpen(!CartOpen))
    console.log(user)
    const onclickSideMenu = () =>{
        if(SideOpen) SetSideOpen(false)
    }

    const OnclickLogout = ()=>{
        dispatch(UserLogout())
    }
    return (
        <div className="min-h-screen z-0">
            <div className="border-b border-black sticky top-0 z-10 bg-white">

            {SideOpen?
            <section className={BlackScreen} onClick={onclickSideMenu}></section>
            :null}

                <nav className="w-[90%] mx-auto flex justify-between py-[1rem] items-center relative">
                    <div className="flex gap-[2rem] items-center">

                        <button className="md:hidden" onClick={handleSideopen}><BurgerIcon/></button>

                        <Link to='/'><Logo/></Link>

                        <ul className={`${SideMenu} ${SideOpen?'translate-x-0':'-translate-x-full'}`}>
                            <li className={Xicon}><button onClick={handleSideopen}><XIcon/></button></li>
                            <li className={Categary} onClick={onclickSideMenu}><Link to='/men'>men</Link></li>
                            <li className={Categary} onClick={onclickSideMenu}><Link to='/women'>women</Link></li>
                            <li className={Categary} onClick={onclickSideMenu}><Link to='/kids'>kids</Link></li>
                        </ul>

                    </div>
                    <div className="flex gap-[2rem]">
                        {user?
                        <div onClick={OnclickLogout}><LogoutIcon/></div>
                        :
                        <Link to='/signin'><LoginIcon/></Link>
                        }
                        <div onClick={handleCartopen}><CartIcon/></div>
                    </div>
                    {CartOpen?<Cartdropdown/>:null}
                </nav>
            </div>
            <Outlet/>
            <Footer/>
        </div>
    )
}