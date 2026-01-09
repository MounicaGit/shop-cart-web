import { deals } from "../services/deals"
import { useNavigate } from "react-router"
import DealCard from "./DealCard"

export default function Deals() {

    function renderDeals() {
        console.log("deals=>", deals)
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