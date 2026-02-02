import DealCard from "./DealCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getDeals } from "../store/productSlice";

export default function Deals() {
    const dispatch = useDispatch();
    const deals = useSelector((state) => state.product.deals) || [];
    const allDeals = useSelector((state) => state.product.allDeals)

    useEffect(() => {
        if (allDeals.length == 0)
            dispatch(getDeals())
    }, [allDeals.length, dispatch])

    function renderDeals() {
        return (
            <ul className=" flex flex-row mt-3 gap-3 overflow-x-auto scrollbar-hide">
                {
                    deals.length == 0 ?
                        <div className="flex text-xl text-gray-500 text-center justify-center items-center">No items Found!!</div> :
                        deals.map((item, index) => (
                            <li key={item.id} className="">{<DealCard key={index} item={item} />}</li>
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