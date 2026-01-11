import Rating from "../../../components/ui/Rating";

export default function ProductDetails({ item }) {
    return (
        <div className="flex flex-col p-3 gap-2">
            <p className="text-sm">{item.name}</p>
            <div className="flex flex-row">
                <Rating rating={item.rating} />
                <p className="text-[10px] text-gray-500">({item.ratingCount})</p>
            </div>
            <div className="flex flex-row items-center">
                <p className="text-sm">₹{item.discountedPrice}</p>
                <p className="text-[10px] text-gray-500 line-through ml-2">₹{item.originalPrice}</p>
            </div>  </div>
    )
}