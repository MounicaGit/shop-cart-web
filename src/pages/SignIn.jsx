import { useState } from "react";
import showEyeIcon from "../assets/images/password-show.png";
import hideEyeIcon from "../assets/images/password-hide.png";
import useValidators from '../validations/useValidators';


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMeChecked, setRememberMeChecked] = useState(false);
    const { emailError, passwordError, validateEmail, validatePassword } = useValidators();

    function renderHeader() {
        return (
            <div className="mb-5">
                <h1 className="text-2xl text-center text-white">ShopMart</h1>
                <h3 className="text-center text-white">Welcome back!! Sign in to continue</h3>
            </div>
        );
    }

    function renderEmail() {
        return (
            <div className="flex flex-col">
                <label>Email</label>
                <input
                    className="border-2 rounded-md border-gray-200 h-[40px] flex items-center mt-2 pl-2"
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => { validateEmail(email); setEmail(e.target.value) }}
                    onBlur={() => validateEmail(email)}
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
        )
    }

    function renderPassword() {
        return (
            <div className="relative flex flex-col mt-5">
                <label>Password</label>
                <input
                    className="border-2 rounded-md border-gray-200 h-[40px] flex items-center mt-2 pl-2"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => { validatePassword(password); setPassword(e.target.value) }}
                    onBlur={() => validatePassword(password)}
                    placeholder="Enter your password"
                />
                <img
                    className="w-4 h-4 absolute right-2 top-11"
                    src={showPassword ? showEyeIcon : hideEyeIcon}
                    alt="eye-toggle"
                    onClick={() => setShowPassword(!showPassword)} />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
        )
    }

    function renderRememberMe() {
        return (
            <div className="flex justify-start items-center mt-2">
                <input
                    type="checkbox"
                    checked={rememberMeChecked}
                    className="mt-1"
                    onChange={() => setRememberMeChecked(!rememberMeChecked)} />
                <label className="ml-1 text-xs text-gray-500">Remember me</label>
            </div>
        )
    }

    function renderSignInButton() {
        return (
            <button
                className="bg-blue-700 py-2 w-[100%] disabled:opacity-50 hover:bg-blue-400 rounded-md text-white mt-8"
                disabled={emailError || passwordError}>
                Sign In</button>
        )
    }

    function renderSignUpView() {
        return (
            <div className="mt-2 text-center">
                <p className="text-xs text-gray-500">Don't have an account?
                    <a href="/sign-up" className="text-blue-700 hover:text-blue-300"> Sign Up</a></p>
            </div>
        )
    }



    function renderCard() {
        return (
            <div className="bg-white w-[400px] p-5 rounded-xl shadow-md"><h5 className="text-sm mb-2 text-center">Sign In</h5>
                {renderEmail()}
                {renderPassword()}
                {renderRememberMe()}
                {renderSignInButton()}
                {renderSignUpView()}
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-2px justify-center items-center bg-blue-700 min-h-screen">
            {renderHeader()}
            {renderCard()}   </div>
    );
}