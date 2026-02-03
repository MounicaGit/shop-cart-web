import { useDispatch, useSelector } from "react-redux";
import { clearAuthStatus, signin } from "../store/authSlice";

export function useSignIn() {
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.auth);

    return {
        user: user,
        error: error,
        signin: (payload) => dispatch(signin(payload)),
        clearAuthStatus: () => dispatch(clearAuthStatus()),
    }
}