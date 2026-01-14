import { useState } from "react";
import { address, payment, review } from "../../../utils/constants/StringConstants";
import CheckoutAddress from "./CheckOutAddress";
import CheckoutPayment from "./CheckoutPayment";

export default function Checkout() {
    const [step, setStep] = useState(1)

    function renderStepper() {
        return (<div className="mt-6 flex items-center justify-between max-w-3xl mx-auto">
            <Step label={address} active={step == 1} />
            <Divider />
            <Step label={payment} active={step == 2} />
            <Divider />
            <Step label={review} active={step == 3} />
        </div>)
    }

    function Step({ label, active }) {
        return (
            <div className="flex flex-col items-center">
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
        ${active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}
                >
                    <img className="h-[15px] w-[15px]" src={`${active ? "/icons/location.png" : "/icons/check-mark.png"}`} />
                </div>
                <span className="mt-2 text-xs text-gray-600">{label}</span>
            </div>
        );
    }

    function Divider() {
        return <div className="flex-1 h-px bg-gray-300 mx-2" />;
    }

    function updateStep(step) {
        setStep(step)
    }


    return (
        <div className="bg-white border-b px-6 py-4">
            <h1 className="text-lg font-semibold">Checkout</h1>
            {renderStepper()}
            {step == 1
                ? <CheckoutAddress updateStep={updateStep} />
                : step == 2
                    ? <CheckoutPayment updateStep={updateStep} />
                    : <CheckoutAddress updateStep={updateStep} />
            }
        </div>
    )
}