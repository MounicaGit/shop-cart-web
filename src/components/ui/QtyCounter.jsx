export default function QtyCounter({qty, incrementQty, decrementQty}) {
    return (
        <div className="flex flex-row items-center justify-center mr-5">
            <button className="border border-gray-200 rounded-tl-md rounded-bl-md h-10 w-10 justify-center items-center " onClick={() => incrementQty()}>
                <p className={`text-center ${qty == 1 ? "text-gray-300" : ""}`}>-</p>
            </button>
            <div className="border-t border-b border-gray-200 h-10 w-10 h-10 w-10 justify-center items-center ">
                <p className="text-center mt-2">{qty}</p>
            </div>
            <button className="border border-gray-200 rounded-tr-md rounded-br-md h-10 w-10 h-10 w-10 justify-center items-center cursor-pointer" onClick={() => decrementQty()}>
                <p className="text-center">+</p>
            </button>
        </div >
    )
}
