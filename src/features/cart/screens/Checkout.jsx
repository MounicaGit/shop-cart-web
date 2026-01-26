import { useEffect, useState } from "react";
import { address, payment, review } from "../../../utils/constants/StringConstants";
import CheckoutAddress from "./CheckOutAddress";
import CheckoutPayment from "./CheckoutPayment";
import Button from "../../../components/ui/Button";
import CheckoutReview from "./CheckoutReview";

export default function Checkout() {
    const [step, setStep] = useState(1)
    const [isValidForm, setIsValidForm] = useState(false)

    useEffect(() => {
        setIsValidForm(true)
    }, [step])

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

    function handleUpdateStep(step) {
        console.log("step=>", step)
        setStep(step)
    }

    function renderFooter() {
        return (
            <div className="bg-white border-t px-6 py-4 fixed bottom-0 w-full">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 text-sm">
                        <span className="text-gray-500">Total Amount</span>
                        <div className="text-lg font-semibold">₹7497</div>
                    </div>
                    <Button
                        className="w-full md:w-auto border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                        onClick={() => step > 1 ? handleUpdateStep(step - 1) : null}>Back</Button>
                    {step == 2 &&
                        <Button
                            disabled={!isValidForm}
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-medium transition disabled:opacity-50"
                            onClick={() => step < 3 ? handleUpdateStep(step + 1) : null}>Continue</Button>}
                    {step == 3 &&
                        <Button
                            disabled={!isValidForm}
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-medium transition disabled:opacity-50"
                            onClick={() => step < 3 ? handleUpdateStep(step + 1) : null}>Continue</Button>}
                </div>
            </div>
        )
    }


    return (
        <div className="bg-white border-b px-6 py-4">
            <h1 className="text-lg font-semibold">Checkout</h1>
            {renderStepper()}
            {step == 1
                ? <CheckoutAddress
                    setIsValidForm={setIsValidForm} />
                : step == 2
                    ? <CheckoutPayment
                        setIsValidForm={setIsValidForm} />
                    : <CheckoutReview />
            }
            {renderFooter()}
        </div>
    )
}