import { useNavigate } from "react-router"

export default function CommonHeader({ qty = 0, showCart = true }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => { navigate(-1) }} className="fixed top flex flex-row bg-blue-700 p-4 justify-between items-center w-full relative">
            <div className="h-5 w-5"><img src="/icons/back-arrow.png" /></div>
            {showCart ? <button className="h-5 w-5 mr-4" onClick={() => { navigate("/cart") }}><img src="/icons/cart.png" /></button> : null}
            {
                (qty != 0) ? <div className="bg-red-500 rounded-2xl h-4 w-4 text-center text-white text-[10px] absolute right-5 top-3">{qty}</div> : null
            }

        </button>
    )
}