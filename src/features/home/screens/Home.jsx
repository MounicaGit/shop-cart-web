import { useDispatch } from "react-redux";
import { logout } from "../../auth/store/authSlice";
import { useNavigate } from "react-router";
import HeaderBar from "../../../components/layout/HeaderBar";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleLogout() {
        dispatch(logout());
        navigate("/login")
    }

    return (
        <div>
            <HeaderBar/>
        </div>
    )
}