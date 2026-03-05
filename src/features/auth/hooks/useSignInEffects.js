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
             toast.success(`Welcome back ${user.fullName}!!`)
            setTimeout(() => { navigate("/home") }, 1000)
            dispatch(clearAuthStatus())
        }
        else if (error) {
            toast.error(error)
            dispatch(clearAuthStatus());
        }
    }, [error, navigate, user]);
}