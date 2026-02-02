
import { useDispatch } from "react-redux";
import Button from "../../../components/ui/Button"
import ProductDetails from "./ProductDetails"
import { useNavigate } from "react-router-dom"
import { updateItemQty, updateItemWishlist } from "../store/productSlice";
import { Toaster, toast } from "react-hot-toast";
import { addToCart, removeFromCart, updateCart } from "../../cart/store/cartSlice";

export default function DealCard({ item }) {
    const navigate = useNavigate();
    console.log(`img=> ../../../assets/images/${item.imageUrl}`);
    const dispatch = useDispatch();

    function handleAddToCart(e, item,) {
        e.stopPropagation();
        if (item.qty < 1) {
            dispatch(addToCart(item))
            dispatch(updateItemQty({ id: item.id, qty: 1 }))
            dispatch(updateCart({ id: item.id, qty: 1 }))
            toast.success("Item added to cart!!")
        }
        else {
            dispatch(removeFromCart(item))
            dispatch(updateItemQty({ id: item.id, qty: 0 }))
            dispatch(updateCart({ id: item.id, qty: 0 }))
            toast.error("Item removed from cart!!")
        }
    }

    function handleUpdateWishlist(e) {
        e.stopPropagation();
        dispatch(updateItemWishlist(item.id))
    }

    return (
        <div className="mb-5"
            onClick={() => navigate(`/product-details/${item.id}`, { state: { item: item } })}
        ><div className="flex-shrink-0 flex flex-col w-[200px] bg-white rounded-md shadow-md relative">
                <img src={(`/images/${item.imageUrl}`)} className="h-[200px] w-[200px] rounded-t-md" />
                <div className="flex flex-col p-3 gap-2">
                    <ProductDetails item={item} />
                    <Button onClick={(e) => { handleAddToCart(e, item) }}
                        className={`${item.qty > 0 ? "bg-red-500" : "bg-blue-700"}  py-2 w-[100%] disabled:opacity-50 hover:opacity-[50%] rounded-md text-white mt-2`}><div className={`flex flex- row justify-center items-center gap-2 text-sm`}>{item.qty > 0 ? <img className="h-4 w-4" src="/icons/cart.png" /> : null}{item.qty > 0 ? "Remove from Cart" : "Add to Cart"}</div></Button>
                    <div className="inline-flex px-1 flex-row bg-green-600 rounded-sm justify-start items-center mr-1 absolute top-3">
                        <p className="text-white text-[10px]">{item.discount}% OFF</p></div>
                    <button onClick={(e) => { handleUpdateWishlist(e) }}><div className="bg-white rounded-2xl absolute top-3 right-3 p-2"><img src={`/icons/${item.isWishlisted ? "heart_red.png" : "heart.png"}`} className="h3 w-3" /></div>
                    </button>
                    <Toaster position="top-center" />
                </div>
            </div></div >
    )
}

