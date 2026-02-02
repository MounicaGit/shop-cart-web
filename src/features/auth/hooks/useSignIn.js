import { useDispatch, useSelector } from "react-redux";
import { clearAuthStatus, signin } from "../store/authSlice";

export function useSignIn() {
    const dispatch = useDispatch();
    const { user, status, error } = useSelector((state) => state.auth);

    return {
        user: user,
        status: status,
        error: error,
        signin: (payload) => dispatch(signin(payload)),
        clearAuthStatus: () => dispatch(clearAuthStatus()),
    }
}