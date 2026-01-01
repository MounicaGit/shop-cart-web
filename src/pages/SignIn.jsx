import { useState } from "react";
import showEyeIcon from "../assets/images/password-show.png";
import hideEyeIcon from "../assets/images/password-hide.png";


export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMeChecked, setRememberMeChecked] = useState(false);

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
                <h7>Email</h7>
                <input
                    className="border-2 rounded-md border-grey-500 h-[40px] flex items-center mt-2 pl-2"
                    type="email"
                    placeholder="Enter your email"
                />
            </div>
        )
    }

    function renderPassword() {
        return (
            <div className="flex flex-col mt-5">
                <h7>Password</h7>
                <div className="relative">
                    <input
                        className="border-2 rounded-md border-grey-500 h-[40px] flex items-center mt-2 pl-2 w-[90%]"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                    />
                    <img
                        className="w-5 h-5 absolute right-1 top-5 w-[5%]"
                        src={showPassword ? showEyeIcon : hideEyeIcon}
                        alt="eye-toggle"
                        onClick={() => setShowPassword(!showPassword)} />
                </div>
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
                <label className="ml-1 text-sm text-grey-200">Remember me</label>
            </div>
        )
    }

    function renderSignInButton() {
        return (
            <button className="bg-blue-500 py-2 w-[100%] hover:bg-blue-400 rounded-md text-white mt-5">
                Sign In</button>
        )
    }



    function renderCard() {
        return (
            <div className="bg-white w-[400px] p-5 rounded-xl shadow-md"><h5 className="text-sm mb-2 text-center">Sign In</h5>
                {renderEmail()}
                {renderPassword()}
                {renderRememberMe()}
                {renderSignInButton()}
            </div>
        )
    }
    return (
        <div className="flex flex-col gap-2px justify-center items-center bg-blue-600 min-h-screen">
            {renderHeader()}
            {renderCard()}   </div>
    );
}