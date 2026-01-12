import { useNavigate } from "react-router"

export default function CommonHeader({ qty = 0 }) {
    const navigate = useNavigate();
    return (
        <div className="fixed top flex flex-row bg-blue-700 p-4 justify-between items-center w-full relative">
            <button className="h-5 w-5" onClick={() => { navigate(-1) }}><img src="/icons/back-arrow.png" /></button>
            <button className="h-5 w-5 mr-4" onClick={() => { navigate("/cart") }}><img src="/icons/cart.png" /></button>
            {
                (qty != 0) ? <div className="bg-red-500 rounded-2xl h-4 w-4 text-center text-white text-[10px] absolute right-5 top-3">{qty}</div> : null
            }

        </div>
    )
}