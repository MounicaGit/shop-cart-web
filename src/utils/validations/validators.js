import { set } from "zod";
import { useState } from "react";
import { cardExpirySchema, cardNumberSchema, cvvNumberSchema, emailSchema, fullNameSchema, passwordSchema, phoneSchema, pinCodeSchema, upiSchema } from "./vaildationSchemas";

export default function useValidators() {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [pincodeError, setPincodeError] = useState("");
    const [cardNumberError, setcardNumberError] = useState("");
    const [cvvNumberError, setcvvNumberError] = useState("");
    const [cardExpiryError, setCardExpiryError] = useState("");
    const [upiError, setupiError] = useState("");

    const validateEmail = (value) => {
        const result = emailSchema.safeParse(value);
        console.log("Validation Result:", result);
        setEmailError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validatePassword = (value) => {
        const result = passwordSchema.safeParse(value);
        setPasswordError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validateFullName = (value) => {
        const result = fullNameSchema.safeParse(value);
        setFullNameError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validatePhone = (value) => {
        const result = phoneSchema.safeParse(value);
        setPhoneError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validatePincode = (value) => {
        const result = pinCodeSchema.safeParse(value);
        setPincodeError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validateCardNumber = (value) => {
        const result = cardNumberSchema.safeParse(value);
        setcardNumberError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validateCvvNumber = (value) => {
        const result = cvvNumberSchema.safeParse(value);
        setcvvNumberError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validateExpiry = (value) => {
        const result = cardExpirySchema.safeParse(value);
        setCardExpiryError(result.success ? "" : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validateUPI = (value) => {
        const result = upiSchema.safeParse(value);
        setupiError(result.success ? "" : JSON.parse(result.error.message)[0].message)
    }
    return {
        emailError,
        passwordError, phoneError, fullNameError, pincodeError, cardNumberError, cvvNumberError, cardExpiryError, upiError, validateEmail, validateFullName, validatePhone, validatePassword, validatePincode, validateCardNumber, validateCvvNumber,
        validateExpiry, validateUPI
    }
}