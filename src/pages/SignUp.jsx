import showEye from '../assets/images/password-show.png';
import hideEye from '../assets/images/password-hide.png';
import { useState } from 'react';

export default function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptTnC, setAcceptTnC] = useState(false);

    function renderHeader() {
        return (
            <div>
                <h1 className="text-2xl text-white text-center">ShopMart</h1>
                <h3 className="text-white text-sm text-center">Create your account</h3>
            </div>
        )
    }

    function renderCard() {
        return (
            <div className="bg-white rounded-lg w-[400px] p-5 mt-4">
                <h4 className="text-center mb-4">Sign Up</h4>
                {renderFullName()}
                {renderEmail()}
                {renderPhoneNumber()}
                {renderPassword()}
                {renderConfirmPassword()}
                {renderTnC()}
                {renderSignUpButton()}
                {renderSignInView()}
            </div>
        )
    }

    function renderFullName() {
        return (
            <div className="flex flex-col gap-1 mb-3">
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    className="h-[40xpx] rounded-md border-2 border-gray-200 pl-2 h-[40px]"
                />
            </div>
        )
    }

    function renderEmail() {
        return (
            <div className="flex flex-col gap-1 mb-3">
                <label className="text-sm text-gray-700">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-[40xpx] rounded-md border-2 border-gray-200 pl-2 h-[40px]"
                />
            </div>
        )
    }

    function renderPhoneNumber() {
        return (
            <div className="flex flex-col gap-1 mb-3">
                <label className="text-sm text-gray-700">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="h-[40xpx] rounded-md border-2 border-gray-200 pl-2 h-[40px]"
                />
            </div>
        )
    }

    function renderPassword() {
        return (
            <div className="flex flex-col gap-1 mb-3 relative">
                <label className="text-sm text-gray-700">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="h-[40xpx] rounded-md border-2 border-gray-200 pl-2 h-[40px]"
                />
                <img
                    src={showPassword ? showEye : hideEye}
                    className="h-4 w-4 absolute right-2 top-9"
                    onClick={() => setShowPassword(!showPassword)} />

            </div>
        )
    }

    function renderConfirmPassword() {
        return (
            <div className="flex flex-col gap-1 mb-3 relative">
                <label className="text-sm text-gray-700">Confirm Password</label>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="h-[40xpx] rounded-md border-2 border-gray-200 pl-2 h-[40px]"
                />
                <img src={showConfirmPassword ? showEye : hideEye} className="h-4 w-4 absolute right-2 top-9" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
            </div>
        )
    }

    function renderSignInView() {
        return (
            <div className="mt-5">
                <p className='text-xs text-gray-500 text-center'>Already have an account? <a href="/" className="text-xs text-blue-600 font-semibold hover:text-blue-300">Sign In</a></p>
            </div>
        )
    }

    function renderTnC() {
        return (
            <div className="flex flex-row justify-start">
                <input
                    type="checkbox"
                    checked={acceptTnC}
                    onChange={() => setAcceptTnC(!acceptTnC)}
                />
                <label className="ml-2 text-xs text-gray-700">I agree to the <a href="#" className="text-blue-600 hover:text-blue-300">Terms of Services</a> and <a href="#" className="text-blue-600 hover:text-blue-300">Privacy Policy</a></label>
            </div >
        )
    }
    function renderSignUpButton() {
        return (
            <div>
                <button className="h-[40px] text-center bg-blue-700 w-[100%] mt-5 rounded-lg text-white">Sign Up</button>
            </div>
        )
    }
    return (
        <div className="flex flex-col bg-blue-700 justify-center items-center min-h-screen">
            {renderHeader()}
            {renderCard()}
        </div>
    )
}