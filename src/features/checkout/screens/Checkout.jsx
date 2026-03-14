import { useEffect, useState } from "react";
import { address, payment, review } from "../../../utils/constants/StringConstants";
import CheckoutAddress from "./CheckOutAddress";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutReview from "./CheckoutReview";
import { useNavigate } from "react-router-dom";
import useCart from "../../cart/hooks/useCart";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { clearCart } from "../../cart/store/cartSlice";

export default function Checkout() {
    const [step, setStep] = useState(1)
    const [isValidForm, setIsValidForm] = useState(false)
    const navigate = useNavigate();
    const { finalPrice } = useCart();
    const dispatch = useDispatch();

    useEffect(() => {
        setIsValidForm(false)
        if (step == 3)
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

    function handleUpdateStep(stepValue) {
        console.log("stepValue=>", stepValue)
        if (step == 3 && stepValue == 4) {
            console.log("navigated")
            dispatch(clearCart())
            navigate("/home")
            toast.success("Order Placed Successfully!!")
        }
        setStep(stepValue)
    }

    return (
        <div className="bg-white border-b px-6 py-4">
            <h1 className="text-lg font-semibold">Checkout</h1>
            {renderStepper()}
            <Toaster position="top-center" />
            {step == 1
                ? <CheckoutAddress
                    setIsValidForm={setIsValidForm} handleUpdateStep={handleUpdateStep} />
                : step == 2
                    ? <CheckoutPayment
                        setIsValidForm={setIsValidForm} handleUpdateStep={handleUpdateStep} />
                    : <CheckoutReview handleUpdateStep={handleUpdateStep} />
            }
        </div>
    )

}