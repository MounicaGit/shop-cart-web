
import Button from "../../../components/ui/Button"
import ProductDetails from "./ProductDetails"
import { useNavigate } from "react-router"

export default function DealCard({ item }) {
    const navigate = useNavigate();
    console.log(`img=> ../../../assets/images/${item.imageUrl}`);

    return (
        <a
            onClick={() => navigate(`/product-details/${item.id}`, { state: { item: item } })}
        ><div className="flex-shrink-0 flex flex-col w-[180px] bg-white rounded-md shadow-md relative">
                <img src={(`/images/${item.imageUrl}`)} className="h-[180px] w-[180px] rounded-t-md" />
                <div className="flex flex-col p-3 gap-2">
                    <ProductDetails item={item} />
                    <Button
                        className="bg-blue-700 py-2 w-[100%] disabled:opacity-50 hover:bg-blue-400 rounded-md text-white mt-2">Add to Cart</Button>
                    <div className="inline-flex px-1 flex-row bg-green-600 rounded-sm justify-start items-center mr-1 absolute top-3">
                        <p className="text-white text-[10px]">{item.discount}% OFF</p></div>
                    <div className="bg-white rounded-2xl absolute top-3 right-3 p-2"><img src="/icons/heart.png" className="h3 w-3" /></div>
                </div>
            </div></a>
    )
}

