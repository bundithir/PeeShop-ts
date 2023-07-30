import { useParams } from "react-router-dom";
import { useEffect , useState } from 'react';
import { useAppDispatch , useAppSelector } from "../../../Store/hook";
import { fetchproductsCategory } from "../../../Store/product/product-reducer";
import { Selectproducts , SelectproductsLoading } from "../../../Store/product/product-selector";
import Spinner_product from "../../../Components/Spinner/spinner-products";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { LayoutShopProduct } from "../../../Components/Shop/shop-style";
import { product } from "../../../Store/product/product-reducer";
import { Search_Default } from "../../Kids/kids-comp/kids-shop";
import { SearchIcon } from "../../../Components/Shop/shop-icon";
import { InputNumber , InputSearch } from "../../../Components/Shop/shop-style";

export type URLFetch = {
    gender : string,
    category : string | undefined
}

const Men_shop = () =>{
    const { category } = useParams()
    const dispatch = useAppDispatch()
    const [Search_form , SetSearch_form] = useState(Search_Default)
    const products = useAppSelector(Selectproducts)
    const IsproductLoading =  useAppSelector(SelectproductsLoading)
    const Getdata =async(ProductCategory : URLFetch) =>await dispatch(fetchproductsCategory(ProductCategory))

    const handleinput = (e : React.ChangeEvent<HTMLInputElement>) =>{
        const {name , value} = e.target;
        SetSearch_form({...Search_form , [name] : value})
    }

    const ProductwithPriceASearch = products.filter((product : product) => product.price>= Search_form.Min &&  product.price<= Search_form.Max).filter((product: product )=> product.name.toLocaleLowerCase().includes(Search_form.Search.toLocaleLowerCase()))
    
    useEffect(()=>{
        const ProductCategory : URLFetch = {
            gender : 'men',
            category : category
        }
        Getdata(ProductCategory)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category])
    return (
        <div>
            <p className="text-center pt-[2rem] uppercase font-bold text-4xl">{category}</p>
            <div className="w-[80%] flex flex-col lg:flex-row mx-auto mt-[4rem]">
                <div className="lg:w-[25%] mb-[3rem] lg:mb-0 lg:border-r">
                    <div className="lg:w-[85%]">
                        <div className="flex items-center gap-4 border-b">
                            <SearchIcon/>
                            <input type="text" onChange={handleinput} name="Search" placeholder="Search by keyword" className={InputSearch}/>
                        </div>
                        <div className="flex lg:flex-col justify-center gap-[1.5rem] mt-[2rem]">
                            <p>Price</p>
                            <div className="flex justify-center">
                                <input type="number" onChange={handleinput} name="Min" className={InputNumber} value={Search_form.Min}/>
                                <p className="px-2">-</p>
                                <input type="number" onChange={handleinput} name="Max" className={InputNumber} value={Search_form.Max}/>
                            </div>
                        </div>      
                    </div>
                </div>
                
                <div className="lg:w-[75%]">
                    {IsproductLoading?
                    <Spinner_product/>
                    :
                    <div>
                        <div className={LayoutShopProduct}>
                            {ProductwithPriceASearch &&
                                ProductwithPriceASearch.map((Product : product) => <ProductCard key={Product.id} product={Product} gender="men"/>)
                            }   
                        </div>
                    </div>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Men_shop;