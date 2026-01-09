export default function ProductDetails({item}) {
    return (
        <div className="flex flex-col p-3 gap-2">
            <p className="text-sm">{item.name}</p>
            <div className="flex flex-row">
                <div className="inline-flex px-1 flex-row bg-green-600 rounded-sm justify-start items-center mr-1">
                    <p className="text-white pr-1 text-[10px]">{item.rating}</p>
                    <img src="/icons/star.png" className="h-2 w-2" />
                </div>
                <p className="text-[10px] text-gray-500">({item.ratingCount})</p>
            </div>
            <div className="flex flex-row items-center">
                <p className="text-sm">₹{item.discountedPrice}</p>
                <p className="text-[10px] text-gray-500 line-through ml-2">₹{item.originalPrice}</p>
            </div>  </div>
    )
}