type style = string

type Hero = {
    title : string,
    name : string,
    type : string,
    price : string,
    btn : string,
    bg : string,
}

const Background : style ='mx-auto bg-center h-[500px] md:h-[600px] bg-no-repeat bg-cover mb-[3rem] cursor-pointer'
const TitleStyle : style = 'text-center font-bold text-4xl my-[1.5rem] uppercase'
const LayoutText : style = 'w-[50%] md:w-[35%] flex flex-col justify-center h-full font-bold text-white'
const NameStyle : style = 'text-4xl drop-shadow-lg mb-6 uppercase'
const TypeStyle : style = 'text-xl drop-shadow-lg mb-3 uppercase'
const PriceStyle : style = 'text-3xl drop-shadow-lg mb-5 uppercase'
const Button : style = 'text-black py-2 px-5 hover:bg-white/60 bg-white/80 border-black border uppercase w-fit duration-300'

const HeroShop = ({title , name , type ,price , btn ,bg} : Hero)=>{
    return (
        <div className="w-[90%] mx-auto">
            <p className={TitleStyle}>{title}</p>
            <div className={`${bg} ${Background}`}>
                <div className="w-[90%] h-full mx-auto">
                    <div className={LayoutText}>
                        <p className={NameStyle}>{name}</p>
                        <p className={TypeStyle}>{type}</p>
                        <p className={PriceStyle}>{price} thb</p>
                        <button className={Button}>{btn}</button>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}
export default HeroShop