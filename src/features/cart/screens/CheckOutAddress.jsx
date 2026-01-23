import React, { useState } from "react";
import TextField from "../../../components/ui/TextField";
import TextAreaField from "../../../components/ui/TextArea";
import useValidators from "../../../utils/validations/validators";

export default function CheckoutAddress({ updateStep }) {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const { fullNameError, phoneError, pincodeError,validateFullName, validatePhone, validatePincode } = useValidators();

    const textFieldClassName = "flex w-full h-[45px] rounded-md border border-gray-200 pl-2 h-[40px] mt-2";
    const textAreaClassName =
        "flex w-full rounded-md border border-gray-200 pl-2 mt-2 resize-none";

    function renderFormFields() {
        return (<div className="px-6 py-8 w-[100%]">
            <div className="max-w-3xl mx-auto bg-white rounded-lg border p-6 space-y-6">
                <h2 className="text-base font-semibold">Delivery Address</h2>
                <div className="flex flex-col">
                    <TextField
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => { validateFullName(e.target.value); setFullName(e.target.value) }}
                        onBlur={() => validateFullName(fullName)}
                        className={textFieldClassName} />
                    {fullNameError && <p className="text-red-500 text-sm mt-1">{fullNameError}</p>}
                </div>
                <div className="flex flex-col">
                    <TextField
                        type="tel"
                        maxLength={10}
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => { validatePhone(e.target.value); setPhoneNumber(e.target.value) }}
                        onBlur={() => validatePhone(phoneNumber)}
                        className={textFieldClassName} />
                    {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}

                </div>
                <TextAreaField
                    type="text"
                    placeholder="Address (House No, Building, Street, Area)"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onBlur={() => validateFullName(address)}
                    maxLines={30}
                    className={`${textAreaClassName} h-[100px]`} />
                <TextField
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onBlur={() => { validateFullName(state) }}
                    className={textFieldClassName} />
                <TextField
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onBlur={() => validateFullName(city)}
                    className={textFieldClassName} />
                <TextField
                    type="text"
                    maxLength={6}
                    placeholder="Pincode"
                    value={pincode}
                    onChange={(e) => { validatePincode(e.target.value); setPincode(e.target.value) }}
                    onBlur={() => { validatePincode(pincode) }}
                    className={textFieldClassName} />
                {pincodeError && <p className="text-red-500 text-sm mt-1">{pincodeError}</p>}
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
                        disabled={(fullNameError || phoneError || address == "" || state == "" || city == "" || pincodeError)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
                    onClick={() => updateStep(2)}>
                    Continue
                </button>
            </div>
            </div >
        )
    }

    return (
        <div className="bg-gray-50 flex flex-col">
            {renderFormFields()}
            {renderFooter()}
        </div>
    );
}

