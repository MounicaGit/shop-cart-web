import React, { useState, useEffect } from "react";
import TextField from "../../../components/ui/TextField";
import useValidators from "../../../utils/validations/validators";

export default function CheckoutPayment({ setIsValidForm }) {
    const [method, setMethod] = useState("card");
    const [cardNumber, setCardNumber] = useState("");
    const [cvvNumber, setCvvNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [upi, setUPI] = useState("");
    const { validateCardNumber, validateCvvNumber, validateFullName, validateExpiry, validateUPI, fullNameError, cardNumberError, cvvNumberError, cardExpiryError, upiError } = useValidators();

    const isValidForm = (method == "card" && !!cardNumber &&
        !!cvvNumber &&
        !!cardHolderName &&
        !!cardExpiry &&
        !cardNumberError &&
        !cvvNumberError &&
        !fullNameError &&
        !cardExpiryError) || (method == "upi" && !upiError && !!upi)

    useEffect(() => {
        setIsValidForm(isValidForm)
    }, [isValidForm, setIsValidForm])


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
                        label="Cash on Delivery"
                        selected={method === "cod"}
                        onClick={() => setMethod("cod")}
                    />
                </div>
            </div>
        )
    }

    function handleCardNumber(value) {
        const rawValue = value.replace(/\s/g, "")
        validateCardNumber(rawValue); const formattedValue = rawValue
            .replace(/(.{4})/g, "$1 ")
            .trim(); setCardNumber(formattedValue)
    }

    function renderCard() {
        return (<div className="max-w-4xl mx-auto bg-white rounded-lg border p-6 space-y-4">
            <TextField
                placeholder="Card Number"
                value={cardNumber}
                maxLength={19}
                onChange={(e) => { handleCardNumber(e.target.value) }}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {cardNumberError && <p className="text-red-500 text-sm mt-1">{cardNumberError}</p>}

            <TextField
                placeholder="Cardholder Name"
                value={cardHolderName}
                onChange={(e) => { validateFullName(e.target.value); setCardHolderName(e.target.value) }}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {fullNameError && <p className="text-red-500 text-sm mt-1">{fullNameError}</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <TextField
                        placeholder="MM/YY"
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => { validateExpiry(e.target.value); setCardExpiry((e.target.value).length == 2 ? (e.target.value + "/") : e.target.value) }}
                        className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    {cardExpiryError && <p className="text-red-500 text-sm mt-1">{cardExpiryError}</p>}
                </div>
                <div className="flex flex-col">
                    <TextField
                        placeholder="CVV"
                        value={cvvNumber}
                        maxLength={3}
                        onChange={(e) => { validateCvvNumber(e.target.value); setCvvNumber(e.target.value) }}
                        className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {cvvNumberError && <p className="text-red-500 text-sm mt-1">{cvvNumberError}</p>}
                </div>
            </div>
        </div>)
    }

    function renderUpi() {
        return (<div className="max-w-4xl mx-auto bg-white rounded-lg border p-6 space-y-4">
            <TextField
                placeholder="Enter UPI ID"
                value={upi}
                className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => { validateUPI(e.target.value); setUPI(e.target.value) }}
            />
            {upiError && <p className="text-red-500 text-sm mt-1">{upiError}</p>}
        </div>)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 px-6 py-8 space-y-6">
                {renderPaymentMethods()}
                {method === "card" && (
                    renderCard()
                )}
                {
                    method === "upi" && (
                        renderUpi()
                    )
                }
            </div>

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