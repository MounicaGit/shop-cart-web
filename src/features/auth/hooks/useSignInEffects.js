import { useEffect } from "react"
import { AUTH_STATUS } from "../../../utils/constants/StringConstants"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import { clearAuthStatus } from "../store/authSlice";
import { useDispatch } from "react-redux";

export function useSignInEffects({ error, user }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user != null && user.status === AUTH_STATUS.AUTHENTICATED) {
            console.log(`user=> ${user.name} ${user.email} ${user.password} ${user.phonenumber} ${user.status}`)
            // setTimeout(() => { navigate("/home") }, 1000);
            toast.success(`Welcome Back ${user.name}!!`);
            navigate("/home", { replace: true })
            dispatch(clearAuthStatus());
        }
        else if (error && user != null && user.status == AUTH_STATUS.ERROR) {
            toast.error(error)
            dispatch(clearAuthStatus());
        }
    }, [error, navigate, user, dispatch]);
}