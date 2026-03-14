import Button from "../../../components/ui/Button";
import useCart from "../../cart/hooks/useCart";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutReview({ handleUpdateStep }) {

    const checkout = useSelector((state) => state.checkout)
    const addressDetails = checkout.addressDetails.address;
    const paymentDetails = checkout.paymentDetails.method;

    const { cartProducts, finalPrice, totalPrice } = useCart();

    function renderFooter() {
        return (
            <div className="bg-white border-t px-6 py-4 fixed bottom-0 w-full">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1 text-sm">
                        <span className="text-gray-500">Total Amount</span>
                        <div className="flex flex-row items-center">
                            <div className="text-[15px] color-gray opacity-[50%] text-decoration-line: line-through pr-1">₹{totalPrice}</div>
                            <div className="text-lg font-semibold">₹{finalPrice}</div>
                        </div>
                    </div>
                    {<Button
                        className="w-full md:w-auto border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
                        onClick={() => handleUpdateStep(2)}>Back</Button>}

                    {
                        <Button
                            className="w-full md:w-auto bg-orange-600 hover:opacity-50 text-white px-10 py-3 rounded-lg font-medium transition disabled:opacity-50"
                            onClick={() => handleUpdateStep(4)}>Place Order</Button>}
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto space-y-6">

                <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-3">Delivery Address</h2>

                    <div className="text-sm text-gray-700 space-y-1">
                        <p className="font-medium">{addressDetails.fullName}</p>
                        <p>{addressDetails.phoneNumber}</p>
                        <p>{addressDetails.address}</p>
                        <p>{addressDetails.state}, {addressDetails.city}, Pincode: {addressDetails.pincode}</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
                    {
                        cartProducts.map((item) => (
                            <div className="flex items-center justify-between text-sm">
                                <div>
                                    <p className="font-medium">{item.name} × {item.qty}</p>
                                </div>
                                <div className="font-semibold">₹{item.discountedPrice * item.qty}</div>
                            </div>
                        ))
                    }

                </div>

                <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-3">Payment Method</h2>

                    <p className="text-sm text-gray-700 font-medium">{paymentDetails}</p>
                </div>

            </div>
            {renderFooter()}
        </div>
    );
}
