import React, { useState, useEffect } from "react";
import Button from "../../../components/ui/Button";
import { cart } from "../services/cart";
import CommonHeader from "../../../components/layout/CommonHeader";
import HeaderBar from "../../../components/layout/HeaderBar";
import QtyCounter from "../../../components/ui/QtyCounter";

export default function CartPage({ onBack, onCheckout }) {
    const [cartItems, setCartItems] = useState(cart)
    const [couponCode, setCouponCode] = useState("");

    // Update quantity of an item
    const updateQuantity = (index, newValue) => {
        setCartItems((items) =>
            items.map((item, i) =>
                i === index
                    ? { ...item, qty: Math.max(1, item.qty + newValue) }
                    : item
            )
        );
    };

    // Remove item from cart
    const removeItem = (index) => {
        setCartItems((items) => items.filter((_, i) => i !== index));
    };

    // Price calculations
    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.discountedPrice * item.quantity,
        0
    );
    const discount = Math.floor(subtotal * 0.1);
    const delivery = subtotal > 500 ? 0 : 40;
    const total = subtotal - discount + delivery;

    // Empty cart UI
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-white">
                {/* <TopBar variant="cart" onBack={onBack} cartCount={0} /> */}
                <div className="flex flex-col items-center justify-center py-16 px-6">
                    <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg
                            className="w-16 h-16 text-gray-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-600 text-center mb-6">
                        Add items to get started
                    </p>
                    <Button onClick={onBack}>Start Shopping</Button>
                </div>
            </div>
        );
    }

    function renderProducts() {
        return (
            <div className="p-4 space-y-3 mb-[70px]">
                <p className="text-sm">Shopping Cart ({cartItems.length})</p>
                {cartItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-3 border border-gray-200"
                    >
                        <div className="flex gap-3">
                            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                                <img src={`/images/${item.imageUrl}`} className="w-20 h-20  object-fit" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm text-gray-900 line-clamp-2 mb-1">
                                    {item.name}
                                </h4>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-gray-900">
                                        ₹{item.discountedPrice.toLocaleString()}
                                    </span>
                                    {item.originalPrice && (
                                        <span className="text-sm text-gray-400 line-through">
                                            ₹{item.originalPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <QtyCounter qty={item.qty} incrementQty={() => updateQuantity(index, -1)} decrementQty={() => updateQuantity(index, 1)} />
                                    <button
                                        onClick={() => removeItem(index)}
                                        className="p-2 text-red-500"
                                    ><img src="/icons/delete.png" className="h-4 w-4" />
                                        {/* <Trash2 className="w-4 h-4" /> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    function renderProductsTotalPrice() {
        const subtotal = cartItems.reduce((sum, item) => sum + item.discountedPrice * item.qty, 0);
        const discount = Math.floor(subtotal * 0.1);
        const delivery = subtotal > 500 ? 0 : 40;
        const total = subtotal - discount + delivery;

        return (<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div>
                <div className="p-4 space-y-2 border-b border-gray-200">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                            Subtotal ({cartItems.length} items)
                        </span>
                        <span className="text-gray-900">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-green-600">-₹{200}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Delivery</span>
                        {delivery === 0 ? (
                            <span className="text-green-600">FREE</span>
                        ) : (
                            <span className="text-gray-900">₹{delivery}</span>
                        )}
                    </div>
                    <hr />
                    <div className="flex justify-between text-sm">
                        <p className="text-sm font-semibold">Total Amount</p>
                        <h3 className="text-gray-900 font-semibold text-[16px]">₹{total.toLocaleString()}</h3>
                    </div>
                    <div className="h-2"></div>
                    <Button className="flex w-full bg-orange-500 justify-center items-center p-3 rounded-md text-white my-5" onClick={onCheckout}>Proceed to Checkout</Button>
                </div>

            </div>
        </div>)
    }


    return (
        <div className="min-h-screen bg-gray-50 pb-32">
            <CommonHeader showCart={false} />
            {renderProducts()}
            {renderProductsTotalPrice()}
        </div>
    );
};
