import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"

export default function CommonHeader({ showCart = true }) {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.productsInCart)
    const length = cartItems.reduce((acc, item) => { return acc + item.qty }, 0)
    const pathName = useLocation().pathname;

    return (
        <div className="fixed top flex flex-row bg-blue-700 p-4 justify-between items-center w-full relative">
            <button onClick={() => { navigate(-1) }}>
                <div className="h-5 w-5"><img src="/icons/back-arrow.png" /></div>
            </button>
            {pathName !== "/cart" && <div>
                {showCart ? <button className="h-5 w-5 mr-4" onClick={() => { navigate("/cart") }}><img src="/icons/cart.png" /></button> : null}
                {
                    (length != 0) ? <div className="bg-red-500 rounded-2xl h-4 w-4 text-center text-white text-[10px] absolute right-5 top-3">{length}</div> : null
                }
            </div>}
        </div>

    )
}