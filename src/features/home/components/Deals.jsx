import DealCard from "./DealCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getDeals } from "../store/productSlice";

export default function Deals() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products) || [];
    const allProducts = useSelector((state) => state.product.allProducts)

    useEffect(() => {
        if (allProducts.length == 0)
            dispatch(getDeals())
    }, [allProducts.length, dispatch])

    function renderDeals() {
        return (
            <ul className=" flex flex-row mt-3 gap-3 overflow-x-auto scrollbar-hide">
                {
                    products.length == 0 ?
                        <div className="flex text-xl text-gray-500 text-center justify-center items-center">No items Found!!</div> :
                        products.map((item, index) => (
                            <li key={item.id} className="">{<DealCard key={item.id} item={item} />}</li>
                        ))
                }
            </ul>
        )
    }
    return (
        <div className="m-5 pb-20">
            <h1 className="font-bold">Deals of the Day</h1>
            {renderDeals()}
        </div>
    )
}