import { Outlet, useParams, useNavigate } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { useState } from 'react';
import Button from '../../../components/ui/Button'
import RouterTabs from "../../../components/ui/RouterTabs";
import { useDispatch } from "react-redux";
import { updateItemWishlist } from "../store/productSlice";
import { Toaster, toast } from "react-hot-toast";
import QtyCounter from "../../../components/ui/QtyCounter";
import CommonHeader from "../../../components/layout/CommonHeader";
import { addToCart, removeFromCart, updateQty } from "../../cart/store/cartSlice";
import useProduct from "../hooks/useProduct";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const item = products.find((item) => item.id === Number(id));
    const { products, qty } = useProduct({ id: item.id });
    const [selectedProductImgIndex, setSelectedProductImgIndex] = useState(0);
    console.log("item=>", item)
    const tabs = [
        { label: "Details", path: "details", },
        { label: "Specifications", path: "specifications", },
        { label: "Reviews", path: "reviews", },
    ]
    var [counter, setCounter] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function renderProductImage() {
        if (!item)
            return;
        return (
            <div className="h-auto w-[full] min-w-[600px] relative">
                <img src={`/images/${item.allProductImagesUrl[selectedProductImgIndex]}`} className="h-[600px] w-[600px]" />
                <div className="inline-flex px-1 flex-row bg-green-600 ml-2 rounded-sm justify-start items-center mr-1 absolute top-3">
                    <p className="text-white text-[10px]">{item.discount}% OFF</p></div>
                <button onClick={() => { dispatch(updateItemWishlist(item.id)) }} ><div className="bg-white rounded-2xl absolute top-3 right-12 p-2"><img src={`/icons/${item.isWishlisted ? "heart_red.png" : "heart.png"} `} className="h3 w-3" /></div></button>
                <button onClick={() => toast.success("Product details shared!")}><div className="bg-white rounded-2xl absolute top-3 right-3 p-2"><img src="/icons/share.png" className="h3 w-3" /></div></button>
            </div>
        )
    }

    function renderAllProductImages() {
        return (
            <ul className="flex flex-row gap-2 p-2">
                {
                    item.allProductImagesUrl.map((img, index) => (
                        <li onClick={() => setSelectedProductImgIndex(index)}>
                            <img src={`/images/${img}`}
                                className={`h-[70px] w-[70px] border-2 ${selectedProductImgIndex == index ? "border-blue-700" : ""} rounded-sm`} /></li>
                    ))
                }
            </ul>
        )
    }

    function renderDeliveryDetailsView() {
        return (
            <div>
                {
                    <ul className="flex flex-col gap-1 pt-2">
                        {item.deliveryDetails.map((img, index) => (
                            <li>{renderDeliverDetail(img)}</li>
                        ))}
                    </ul>
                }
            </div>
        )
    }

    function renderDeliverDetail(item) {
        console.log(`img=>>/icons/${item.imageUrl}`)
        return (
            <div className="flex flex-row gap-4 p-2 justify-start items-start">
                <img src={`/icons/${item.imageUrl}`} className="h-5 w-5 mt-1" />
                <div className="flex flex-col gap-1">
                    <p className="text-md">{item.deliveryData}</p>
                    <p className="text-xs text-gray-500">{item.timePeriod}</p>
                </div>
            </div>
        )
    }

    function decrementQty() {
        if (qty > 0) {
            // dispatch(updateItemQty({ qty: Math.max(qty + 1, 0), id: item.id }))
            // dispatch(updateQty({ qty: Math.max(qty + 1, 0), id: item.id }))
            dispatch(updateQty({ id: item.id, qty: -1 }))
        }
    }

    function incrementQty() {
        // dispatch(updateItemQty({ qty: qty - 1, id: item.id }))
        dispatch(updateQty({ qty: 1, id: item.id }))
    }

    function handleAddToCart(e, item,) {
        e.stopPropagation();
        dispatch(addToCart(item))
        // dispatch(updateItemQty({ id: item.id, qty: 1 }))
        // dispatch(updateQty({ id: item.id, qty: 1 }))
        toast.success("Item added to cart!!")
    }

    function handleRemoveFromCart(e, item,) {
        {
            e.stopPropagation();
            dispatch(removeFromCart(item.id))
            // dispatch(updateItemQty({ id: item.id, qty: 0 }))
            // dispatch(updateQty({ id: item.id, qty: 0 }))
            toast.error("Item removed from cart!!")
        }
    }

    function renderButtons() {
        return (
            <div className="flex flex-row fixed bottom-0 bg-white w-[600px] justify-between items-center gap-2 pb-5">
                {qty > 0 && <QtyCounter qty={qty} incrementQty={incrementQty} decrementQty={decrementQty} />}
                {
                    qty < 1
                        ? <Button onClick={(e) => { handleAddToCart(e, item) }}
                            className={`h-[50px] bg-blue-700 w-[50%] disabled:opacity-50 hover:opacity-[50%] rounded-md text-white mt-2`}><div className={`flex flex-row justify-center items-center gap-2 text-sm`}>Add to Cart</div></Button>
                        : <Button onClick={(e) => { handleRemoveFromCart(e, item) }}
                            className={`h-[50px] bg-red-500 w-[50%] disabled:opacity-50 hover:opacity-[50%] rounded-md text-white mt-2`}><div className={`flex flex- row justify-center items-center gap-2 text-sm`}>{<img className="h-4 w-4" src="/icons/cart.png" />}Remove from Cart</div></Button>

                }
                <Button className="h-[50px] flex-1 bg-orange-500 rounded-md mt-2"
                    onClick={() => { }}
                ><div>
                        <p className="text-white">Buy Now</p></div></Button>
            </div>
        )
    }

    function renderTabView() {
        return (
            <div>
                <RouterTabs tabs={tabs} basePath={`/product-details/${Number(id)}`} />
                <Outlet context={item} />
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center ">
            <CommonHeader />
            <div className="flex flex-col items-start pb-[80px]">

                {renderProductImage()}
                {renderAllProductImages()}
                <ProductDetails item={item} />
                <hr className="w-[50%]" />
                {renderDeliveryDetailsView()}
                {renderButtons()}
                {renderTabView()}
                <Toaster position="top-center" />
            </div>
        </div>
    )
}