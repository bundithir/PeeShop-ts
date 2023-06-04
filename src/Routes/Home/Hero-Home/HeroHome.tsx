export type HeroHome = {
    newest? : string ,
    collection? : string ,
    btn : string 
}

type style = string

const Background : style = 'bg-hero bg-center h-[500px] md:h-[600px] bg-no-repeat bg-cover mb-[3rem] cursor-pointer'
const LayoutText : style = 'w-[35%] flex flex-col justify-center h-full font-bold text-white'
const text1 : style = 'text-2xl drop-shadow-lg mb-3'
const text2 : style = 'text-4xl drop-shadow-lg mb-5'
const Button : style = 'text-black py-2 px-5 hover:bg-white/60 bg-white/80 border-black border uppercase w-fit duration-300'

const HeroHome = ({ newest , collection , btn } : HeroHome)=>{
    return (
        <div className={Background}>
            <div className="w-[90%] h-full mx-auto">
                <div className={LayoutText}>
                    <p className={text1}>{newest}</p>
                    <p className={text2}>{collection}</p>
                    <button className={Button}>{btn}</button>
                </div>
                    
            </div>
        </div>
    )
}
export default HeroHome