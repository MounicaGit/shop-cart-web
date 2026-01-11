import { useNavigate } from "react-router"
import DealCard from "./DealCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getDeals } from "../store/productSlice";

export default function Deals() {
    const dispatch = useDispatch();
    const deals = useSelector((state) => state.product.deals) || [];

    useEffect(() => {
        dispatch(getDeals())
    }, [])

    function renderDeals() {
        return (
            <ul className=" flex flex-row mt-3 gap-3 overflow-x-auto scrollbar-hide">
                {
                    deals.map((item, index) => (
                        <li className="">{<DealCard key={index} item={item} />}</li>
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