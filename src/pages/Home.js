import { useDispatch } from "react-redux";
import { useAuth } from "../context/AuthContext"
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        navigate("/login")
    }
    return (
        <button onClick={() => handleLogout()}><p>Logout</p></button>
    )
}