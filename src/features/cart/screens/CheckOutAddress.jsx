import React, { useState } from "react";
import TextField from "../../../components/ui/TextField";
import TextAreaField from "../../../components/ui/TextArea";

export default function CheckoutAddress({ updateStep }) {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");

    const textFieldClassName = "flex w-full h-[45px] rounded-md border border-gray-200 pl-2 h-[40px] mt-2";

    function renderFormFields() {
        return (<div className="px-6 py-8 w-[100%]">
            <div className="max-w-3xl mx-auto bg-white rounded-lg border p-6 space-y-6">
                <h2 className="text-base font-semibold">Delivery Address</h2>
                <TextField
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onBlur={() => { }}
                    className={textFieldClassName} />
                <TextField
                    type="numeric"
                    placeholder="Phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onBlur={() => { }}
                    className={textFieldClassName} />
                <TextAreaField
                    type="text"
                    placeholder="Address (House No, Building, Street, Area)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={() => { }}
                    maxLines={30}
                    className={`${textFieldClassName} h-[100px] resize-none`} />
                <TextField
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onBlur={() => { }}
                    className={textFieldClassName} />
                <TextField
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onBlur={() => { }}
                    className={textFieldClassName} />
                <TextField
                    type="text"
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    onBlur={() => { }}
                    className={textFieldClassName} />
            </div>
        </div>)
    }

    function renderFooter() {
        return (
            <div className="bg-white border-t px-6 py-10">
                <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
                    <div className="text-sm">
                        <span className="text-gray-500">Total Amount</span>
                        <div className="text-lg font-semibold">₹7497</div>
                    </div>

                    <button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
                        onClick={()=>updateStep(2)}>
                        Continue
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-gray-50 flex flex-col">
            {renderFormFields()}
            {renderFooter()}
        </div>
    );
}

