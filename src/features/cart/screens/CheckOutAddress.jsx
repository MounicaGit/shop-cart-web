import React, { useEffect, useState } from "react";
import TextField from "../../../components/ui/TextField";
import TextAreaField from "../../../components/ui/TextArea";
import useValidators from "../../../utils/validations/validators";

export default function CheckoutAddress({ updateStep, setIsValidForm }) {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const { fullNameError, phoneError, pincodeError, validateFullName, validatePhone, validatePincode } = useValidators();

    const textFieldClassName = "flex w-full h-[45px] rounded-md border border-gray-200 pl-2 h-[40px] mt-2";
    const textAreaClassName =
        "flex w-full rounded-md border border-gray-200 pl-2 mt-2 resize-none";
    const isValidForm = (fullNameError || phoneError || address == "" || state == "" || city == "" || pincodeError);

    useEffect(() => {
        setIsValidForm(!isValidForm)
    }, [setIsValidForm, isValidForm])

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

    return (
        <div className="bg-gray-50 flex flex-col">
            {renderFormFields()}
        </div>
    );
}

