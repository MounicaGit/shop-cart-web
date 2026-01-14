import React, { useState } from "react";

export default function CheckoutPayment({ updateStep }) {
    const [method, setMethod] = useState("card");

    function renderPaymentMethods() {
        return (
            <div className="max-w-4xl mx-auto bg-white rounded-lg border p-6">
                <h2 className="text-base font-semibold mb-4">Payment Method</h2>

                <div className="space-y-3">
                    <PaymentOption
                        label="Credit/Debit Card"
                        selected={method === "card"}
                        onClick={() => setMethod("card")}
                    />
                    <PaymentOption
                        label="UPI"
                        selected={method === "upi"}
                        onClick={() => setMethod("upi")}
                    />
                    <PaymentOption
                        label="Net Banking"
                        selected={method === "netbanking"}
                        onClick={() => setMethod("netbanking")}
                    />
                    <PaymentOption
                        label="Cash on Delivery"
                        selected={method === "cod"}
                        onClick={() => setMethod("cod")}
                    />
                </div>
            </div>
        )
    }

    function renderCard() {
        return (<div className="max-w-4xl mx-auto bg-white rounded-lg border p-6 space-y-4">
            <Input placeholder="Card Number" />
            <Input placeholder="Cardholder Name" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="MM/YY" />
                <Input placeholder="CVV" />
            </div>
        </div>)
    }

    function renderFooter() {
        return (
            <div className="bg-white border-t px-6 py-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 text-sm">
                        <span className="text-gray-500">Total Amount</span>
                        <div className="text-lg font-semibold">₹7497</div>
                    </div>

                    <button
                        className="w-full md:w-auto border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                        onClick={() => updateStep(1)}>
                        Back
                    </button>

                    <button
                        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-medium transition"
                        onClick={() => updateStep(3)}>
                        Continue
                    </button>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 px-6 py-8 space-y-6">
                {renderPaymentMethods()}
                {method === "card" && (
                    renderCard()
                )}
            </div>
            {renderFooter()}

        </div>
    );
}

function PaymentOption({ label, selected, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between px-4 py-4 rounded-lg border text-sm transition
      ${selected
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
        >
            <span>{label}</span>
            <span
                className={`w-4 h-4 rounded-full border flex items-center justify-center
        ${selected ? "border-blue-600" : "border-gray-300"}`}
            >
                {selected && (
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                )}
            </span>
        </button>
    );
}

function Input({ placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
}
