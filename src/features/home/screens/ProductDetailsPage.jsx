import { Route, Routes, useLocation, Navigate, Outlet, useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { useEffect, useState } from 'react';
import Button from '../../../components/ui/Button'
import RouterTabs from "../../../components/ui/RouterTabs";
import ProductDetailsTab from "./ProductDetailsTab";
import ProductSpecificationsTab from "./ProductSpecificationsTab";
import ProductReviewsTab from "./ProductReviewsTab";
import { useDispatch, useSelector } from "react-redux";
import { updateItemWishlist } from "../store/productSlice";

export default function ProductDetailsPage() {
    // const { state } = useLocation();
    // var item = state?.item;
    const { id } = useParams();
    const deals = useSelector((state) => state.product.deals)
    const item = deals.find((item) => item.id === Number(id));
    const [selectedProductImgIndex, setSelectedProductImgIndex] = useState(0);
    console.log("item=>", item)
    const tabs = [
        { label: "Details", path: "details", },
        { label: "Specifications", path: "specifications", },
        { label: "Reviews", path: "reviews", },
    ]
    var [counter, setCounter] = useState(1);
    const dispatch = useDispatch();

    function renderProductImage() {
        if (!item)
            return;
        return (
            <div className="h-auto w-[full] min-w-[600px] relative">
                <img src={`/images/${item.allProductImagesUrl[selectedProductImgIndex]}`} className="h-[600px] w-[600px]" />
                <div className="inline-flex px-1 flex-row bg-green-600 ml-2 rounded-sm justify-start items-center mr-1 absolute top-3">
                    <p className="text-white text-[10px]">{item.discount}% OFF</p></div>
                <button onClick={() => { console.log("clicked"); dispatch(updateItemWishlist(item.id)) }} ><div className="bg-white rounded-2xl absolute top-3 right-12 p-2"><img src={`/icons/${item.isWishlisted ? "heart_red.png" : "heart.png"} `} className="h3 w-3" /></div></button>
                <div className="bg-white rounded-2xl absolute top-3 right-3 p-2"><img src="/icons/share.png" className="h3 w-3" /></div>
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

    function renderCounter() {
        return (
            <div className="flex flex-row items-center justify-center mr-5">
                <button className="border border-gray-200 rounded-tl-md rounded-bl-md h-10 w-10 justify-center items-center " onClick={() => { if (counter > 1) setCounter((prev) => prev + 1) }}>
                    <p className={`text-center ${counter == 1 ? "text-gray-300" : ""}`}>-</p>
                </button>
                <div className="border-t border-b border-gray-200 h-10 w-10 h-10 w-10 justify-center items-center ">
                    <p className="text-center mt-2">{counter}</p>
                </div>
                <button className="border border-gray-200 rounded-tr-md rounded-br-md h-10 w-10 h-10 w-10 justify-center items-center cursor-pointer" onClick={() => setCounter((prev) => Math.max(prev - 1, 1))}>
                    <p className="text-center">+</p>
                </button>
            </div >
        )
    }

    function renderButtons() {
        return (
            <div className="flex flex-row fixed bottom-0 bg-white w-[600px] justify-between gap-2 pb-5">
                {renderCounter()}
                <Button className="flex-1 bg-blue-700 justify-center items-center p-3 rounded-md"
                    onClick={() => { }}
                ><div className="flex flex-row gap-2 justify-center">
                        <img src="/icons/cart.png" className="h-4 w-4 mt-1" />
                        <p className="text-white">Add to Cart</p></div></Button>
                <Button className="flex-1 bg-orange-500 justify-center items-center p-3 rounded-md"
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
            <div className="flex flex-col items-start pb-[80px]">
                {renderProductImage()}
                {renderAllProductImages()}
                <ProductDetails item={item} />
                <hr className="w-[50%]" />
                {renderDeliveryDetailsView()}
                {renderButtons()}
                {renderTabView()}
            </div>
        </div>
    )
}