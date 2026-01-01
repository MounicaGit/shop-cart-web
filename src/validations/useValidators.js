import { set } from "zod";
import { emailSchema, phoneSchema, fullNameSchema, passwordSchema } from "./schemas";
import { useState } from "react";

export default function useValidators() {
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const validateEmail = (value) => {
        const result = emailSchema.safeParse(value);
        console.log("Validation Result:", result);
        setEmailError(result.success ? null : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validatePassword = (value) => {
        const result = passwordSchema.safeParse(value);
        setPasswordError(result.success ? null : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validateFullName = (value) => {
        const result = fullNameSchema.safeParse(value);
        setFullNameError(result.success ? null : JSON.parse(result.error.message)[0].message);
        return result.success;
    }

    const validatePhone = (value) => {
        const result = phoneSchema.safeParse(value);
        setPhoneError(result.success ? null : JSON.parse(result.error.message)[0].message);
        return result.success;
    }
    return {
        emailError,
        passwordError, phoneError, fullNameError, validateEmail, validateFullName, validatePhone, validatePassword
    }
}