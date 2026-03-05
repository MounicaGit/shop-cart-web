import { useDispatch } from "react-redux";
import { logout } from "../../auth/store/authSlice";
import { useNavigate } from "react-router-dom";
import HeaderBar from "../../../components/layout/HeaderBar";
import Deals from "../components/Deals";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <HeaderBar/>
            <Deals/>
        </div>
    )
}