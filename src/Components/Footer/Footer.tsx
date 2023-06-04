import { HeaderMenu , Menu , LayoutFooter} from "./Footer_styles"
import { IgIcon , TwIcon , GhIcon , FbIcon } from "./Footer_Icon"

export const Footer = () =>{
    return(
        <div className="bg-sky-900  mt-[5rem] py-[3rem]">
            <div className={LayoutFooter}>

                <div>
                    <h4 className={HeaderMenu}>about</h4>
                    <ul className="flex flex-col gap-[1rem]">
                        <li className={Menu}>information</li>
                        <li className={Menu}>store locator</li>
                        <li className={Menu}>career</li>
                        <li className={Menu}>sustainability</li>
                    </ul>
                </div>

                <div>
                    <h4 className={HeaderMenu}>help</h4>
                    <ul  className="flex flex-col gap-[1rem]">
                        <li className={Menu}>FAQ</li>
                        <li className={Menu}>return policy</li>
                        <li className={Menu}>privacy policy</li>
                        <li className={Menu}>terms of use</li>
                        <li className={Menu}>accessibility</li>
                    </ul>
                </div>

                <div>
                    <h4 className={HeaderMenu}>account</h4>
                    <ul className="flex flex-col gap-[1rem]">
                        <li className={Menu}>membership</li>
                        <li className={Menu}>profile</li>
                        <li className={Menu}>coupons</li>
                    </ul>
                </div>

                <div>
                    <h4 className={HeaderMenu}>social account</h4>
                    <ul className="flex gap-4">
                        <li><a href="https://www.facebook.com/peet.bundit.71/" target='_blank'><FbIcon/></a></li>
                        <li><a href="https://github.com/bundithir" target='_blank'><GhIcon/></a></li>
                        <li><a href="https://www.instagram.com/peepi.p/" target='_blank'><IgIcon/></a></li>
                        <li><a href="https://twitter.com/peepi0615" target='_blank'><TwIcon/></a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}