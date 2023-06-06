import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useAppDispatch , useAppSelector } from "../../../Store/hook";
import { fetchproductsCategory } from "../../../Store/product/product-reducer";
import { Selectproducts , SelectproductsLoading } from "../../../Store/product/product-selector";
import Spinner_product from "../../../Components/Spinner/spinner-products";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { LayoutShopProduct } from "../../../Components/Shop/shop-style";


export type URLFetch = {
    gender : string,
    category : string | undefined
}

const Men_shop = () =>{
    const { category } = useParams()
    const dispatch = useAppDispatch()
    const products = useAppSelector(Selectproducts)
    const IsproductLoading =  useAppSelector(SelectproductsLoading)
    const Getdata =async(ProductCategory : URLFetch) =>await dispatch(fetchproductsCategory(ProductCategory))
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
            {IsproductLoading?<Spinner_product/>
            :
            <div>
                <p className="text-center pt-[2rem] uppercase font-bold text-4xl">{category}</p>
                    <div className={LayoutShopProduct}>
                        {products &&
                            products.map((Product) => <ProductCard key={Product.id} product={Product}/>)
                        }
                    </div>
            </div>
            }
        </div>
    )
}

export default Men_shop;