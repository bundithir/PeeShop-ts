import { Carousel } from 'antd';

type caro = {
    title : string,
}
const Background  ='w-full cursor-pointer md:h-[600px] h-[400px]'
const TitleStyle  = 'text-center font-bold text-4xl my-[1.5rem] uppercase'

const HeroCaro = ({title} : caro) => (
    <div className='mx-auto w-[90%]'>
        <p className={TitleStyle}>{title}</p>
        <Carousel autoplay dots = {true} draggable>
            <div>
                <img src="images\1000x500.gif" className={Background} alt="1" />
            </div>
            <div>
                <img src="images\1000x500.gif" className={Background} alt="2" />
            </div>
            <div>
                <img src="images\1000x500.gif" className={Background} alt="3" />
            </div>
            <div>
                <img src="images\1000x500.gif" className={Background} alt="4" />
            </div>
        </Carousel>
    </div>
  
);

export default HeroCaro;