import { useCallback, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { filterDeals } from "../../features/home/store/productSlice";
import { useNavigate } from "react-router";

export default function HeaderBar() {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productsInCart = useSelector((state) => state.cart.productsInCart)
    const cartItems = productsInCart.reduce((acc, item) => { return acc + item.qty }, 0)

    function handleSearch(e) {
        setSearchText(e.target.value);
        handleSearchValue(e.target.value)
    }

    const handleSearchValue = useCallback(
        debounce((searchText) => {
            dispatch(filterDeals(searchText))
        }, 500), []);
    return (
        <div
            className="flex flex-row bg-blue-700 p-5 justify-start items-center h-[80px] w-[100%] relative">
            <div className="flex flex-row">
                <h1 className="text-xl font-semibold text-white pt-2">ShopMart</h1>
                <div className="relative w-[100%]">
                    <input
                        type="text"
                        className="h-[40px] rounded-sm border ml-5 w-[400px] pl-10"
                        value={searchText}
                        onChange={(e) => handleSearch(e)}
                        placeholder="Search for Products, Brands and More.."

                    />
                    <img src="/icons/search.png" className="h-4 w-4 absolute bottom-3 left-8" />
                </div>
            </div>
            <div className="flex gap-5 ml-auto mr-10">
                <button><ProfileMenu /></button>
                <div className="relative">
                    <button onClick={() => navigate("/cart")} className="flex flex-row gap-2 items-center p-2">
                        <img src="/icons/cart.png" className="h-6 w-6 " />
                        {cartItems == 0 && <p className="text-white">Cart</p>}
                    </button>
                    {cartItems > 0 &&
                        <div className="bg-red-600 rounded-2xl text-white text-xs h-4 w-4 text-center pt-[1px] pr-[1px] absolute left-7 top-0">
                            <p>{cartItems}</p>
                        </div>}
                </div>
            </div>
        </div >
    )
}