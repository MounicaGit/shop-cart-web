import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_STATUS } from "../../../utils/constants/StringConstants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearAuthStatus } from "../store/authSlice";

export function useSignUpEffects({ user, error }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.status == AUTH_STATUS.REGISTERED) {
            setTimeout(() => { navigate("/") }, 1000)
            toast.success("User Registered Successfully!!")
            dispatch(clearAuthStatus())
        }
        else if (user.status == AUTH_STATUS.ERROR && error) {
            toast.error(error);
            dispatch(clearAuthStatus())
        }
    }, [error, navigate]);
}