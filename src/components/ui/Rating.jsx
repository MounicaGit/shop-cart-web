export default function Rating({rating}) {
    return (
        <div className="inline-flex px-1 flex-row bg-green-600 rounded-sm justify-start items-center mr-1">
            <p className="text-white pr-1 text-[10px]">{rating}</p>
            <img src="/icons/star.png" className="h-2 w-2" />
        </div>
    )
}