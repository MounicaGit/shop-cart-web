import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useSelector } from "react-redux";

export default function PrivateRoute({ children }) {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    return (
        isAuthenticated ? children : <Navigate to="/login" />
    )
}