import { deals } from "../services/deals"
import Button from "../../../components/ui/Button"
import StarIcon from '../../../assets/icons/star.png'
import WishlistIcon from '../../../assets/icons/heart.png'

export default function Deals() {

    function renderDealCard({ name, rating, ratingCount, discountedPrice, originalPrice, discount, imageUrl }) {
        console.log(`img=> ../../../assets/images/${imageUrl}}`)
        return (
            <div className="flex-shrink-0 flex flex-col w-[180px] bg-white rounded-md shadow-md relative">
                <img src={require(`../../../assets/images/${imageUrl}`)} className="h-[180px] w-[180px] rounded-t-md" />
                <div className="flex flex-col p-3 gap-2">
                    <p className="text-sm">{name}</p>
                    <div className="flex flex-row">
                        <div className="inline-flex px-1 flex-row bg-green-600 rounded-sm justify-start items-center mr-1">
                            <p className="text-white pr-1 text-[10px]">{rating}</p>
                            <img src={StarIcon} className="h-2 w-2" />
                        </div>
                        <p className="text-[10px] text-gray-500">({ratingCount})</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="text-sm">₹{discountedPrice}</p>
                        <p className="text-[10px] text-gray-500 line-through ml-2">₹{originalPrice}</p>
                    </div>
                    <Button
                        className="bg-blue-700 py-2 w-[100%] disabled:opacity-50 hover:bg-blue-400 rounded-md text-white mt-2">Add to Cart</Button>
                    <div className="inline-flex px-1 flex-row bg-green-600 rounded-sm justify-start items-center mr-1 absolute top-3">
                        <p className="text-white text-[10px]">{discount}% OFF</p></div>
                    <div className="bg-white rounded-2xl absolute top-3 right-3 p-2"><img src={WishlistIcon} className="h3 w-3" /></div>
                </div>
            </div>
        )
    }
    function renderDeals() {
        console.log("deals=>", deals)
        return (
            <ul className=" flex flex-row mt-3 gap-3 overflow-x-auto scrollbar-hide">
                {
                    deals.map((item, index) => (
                        <li className="">{renderDealCard(item)}</li>
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