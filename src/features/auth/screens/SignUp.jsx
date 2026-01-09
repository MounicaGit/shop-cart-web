import { useState } from 'react';
import useValidators from '../validations/authValidators';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { signUp } from '../store/authSlice';
import Button from '../../../components/ui/Button';
import CheckBox from '../../../components/ui/Checkbox';

export default function SignUp() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [acceptTnC, setAcceptTnC] = useState(false);
    const { emailError, passwordError, fullNameError, phoneError, validateEmail, validateFullName, validatePhone, validatePassword } = useValidators();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            <div className="flex flex-col gap-1 mb-5">
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value); validateFullName(fullName) }}
                    onBlur={() => validateFullName(fullName)}
                    className="h-[40xpx] rounded-md border border-gray-200 pl-2 h-[40px]"
                />
                {fullNameError && <p className="text-red-500 text-sm mt-1">{fullNameError}</p>}
            </div>
        )
    }

    function renderEmail() {
        return (
            <div className="flex flex-col gap-1 mb-5">
                <label className="text-sm text-gray-700">Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); validateEmail(email) }}
                    onBlur={() => validateEmail(email)}
                    className="h-[40xpx] rounded-md border border-gray-200 pl-2 h-[40px]"
                />
                {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
        )
    }

    function renderPhoneNumber() {
        return (
            <div className="flex flex-col gap-1 mb-5">
                <label className="text-sm text-gray-700">Phone Number</label>
                <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); validatePhone(phone) }}
                    onBlur={() => validatePhone(phone)}
                    className="h-[40xpx] rounded-md border border-gray-200 pl-2 h-[40px]"
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
            </div>
        )
    }

    function renderPassword() {
        return (
            <div className="flex flex-col gap-1 mb-5 relative">
                <label className="text-sm text-gray-700">Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); validatePassword(password) }}
                    onBlur={() => validatePassword(password)}
                    className="h-[40xpx] rounded-md border border-gray-200 pl-2 h-[40px]"
                />
                <img
                    src={showPassword ? "/icons/password-show.png" : "/icons/password-hide.png"}
                    className="h-4 w-4 absolute right-2 top-9"
                    onClick={() => setShowPassword(!showPassword)} />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>
        )
    }

    function renderConfirmPassword() {
        return (
            <div className="flex flex-col gap-1 mb-5 relative">
                <label className="text-sm text-gray-700">Confirm Password</label>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); validatePassword(confirmPassword) }}
                    onBlur={() => validatePassword(confirmPassword)}
                    className="h-[40xpx] rounded-md border border-gray-200 pl-2 h-[40px]"
                />
                <img src={showConfirmPassword ? "/icons/password-show.png" : "/icons/password-hide.png"} className="h-4 w-4 absolute right-2 top-9" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                {(password && confirmPassword) && password != confirmPassword ? <p className="text-red-500 text-sm mt-1">Passwords do not match</p> : null}

            </div>
        )
    }

    function renderSignInView() {
        return (
            <div className="mt-5">
                <p className='text-xs text-gray-500 text-center'>Already have an account? <a href="/login" className="text-xs text-blue-700 hover:text-blue-300">Sign In</a></p>
            </div>
        )
    }

    function renderTnC() {
        return (
            <div className="flex flex-row justify-start items-center">
                {/* <input
                    type="checkbox"
                    checked={acceptTnC}
                    onChange={() => setAcceptTnC(!acceptTnC)}
                /> */}
                <CheckBox
                    checked={acceptTnC}
                    onChange={() => setAcceptTnC(!acceptTnC)}
                >
                    <label className="ml-2 text-xs text-gray-700">I agree to the <a href="#" className="text-blue-600 hover:text-blue-300">Terms of Services</a> and <a href="#" className="text-blue-600 hover:text-blue-300">Privacy Policy</a></label>
                </CheckBox>
            </div >
        )
    }

    function handleRegister() {
        dispatch(signUp({ fullName, email, phone, password }))
        // if (success) {
        toast.success("Registered Successfully!!");
        setTimeout(() => { navigate("/") }, 1500);
        // }
        // else {
        //     toast.error("Registration Failed! Try Again Later!!")
        // }
    }

    function renderSignUpButton() {
        return (
            <div>
                <Button
                    className="bg-blue-700 py-2 w-[100%] disabled:opacity-50 hover:bg-blue-400 rounded-md text-white mt-8"
                    disabled={!fullName || !phone || !email || !password || !confirmPassword || fullNameError || emailError || phoneError || passwordError || (password != confirmPassword) || !acceptTnC}
                    onClick={() => handleRegister()} >Sign Up</Button>
            </div >
        )
    }
    return (
        <div className="flex flex-col bg-blue-700 justify-center items-center min-h-screen">
            <Toaster position="center" />
            {renderHeader()}
            {renderCard()}
        </div>
    )
}