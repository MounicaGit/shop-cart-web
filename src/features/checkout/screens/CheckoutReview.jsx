export default function CheckoutReview() {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto space-y-6">

                <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-3">Delivery Address</h2>

                    <div className="text-sm text-gray-700 space-y-1">
                        <p className="font-medium">Mounica</p>
                        <p>9782525253</p>
                        <p>sdafsd.sdfs.sdfg.fdsagsfas</p>
                        <p>sgsfgretergs, sfdhsdhwregsgfsdgfsdfg - 254522</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-3">Order Summary</h2>

                    <div className="flex items-center justify-between text-sm">
                        <div>
                            <p className="font-medium">Running Shoes × 1</p>
                        </div>
                        <div className="font-semibold">₹2499</div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-3">Payment Method</h2>

                    <p className="text-sm text-gray-700 font-medium">Card</p>
                </div>

            </div>
        </div>
    );
}
