import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";
import { AUTH_STATUS } from "../utils/constants/StringConstants";

export default function PrivateRoute({ children }) {
    const user = useSelector((state) => state.auth.user)
    const isAuthenticated = user != null && user.status === AUTH_STATUS.AUTHENTICATED

    return (
        isAuthenticated ? children : <Navigate to="/login" />
    )
}