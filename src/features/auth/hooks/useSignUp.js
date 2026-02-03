import { useDispatch, useSelector } from "react-redux"
import { signup } from "../store/authSlice";

export function useSignUp() {
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.auth)
    return {
        user: user,
        error: error,
        signup: (payload) => dispatch(signup(payload))
    }
}