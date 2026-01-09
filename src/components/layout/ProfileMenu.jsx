import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/store/authSlice";
import DropdownItem from "../ui/DropdownItem";
import DropDown from "../ui/Dropdown";

export default function ProfileMenu() {
    const dispatch = useDispatch()
    return (
        <DropDown trigger={<div className="flex flex-row items-center mr-10 gap-2">
            <img src="/icons/user.png" className="h-5 w-5" />
            <p className="text-white">adfadfafafasdf</p>
            <img src="/icons/down-arrow.png" className="h-3 w-3" />
        </div>}>
            <DropdownItem>My Orders</DropdownItem>
            <DropdownItem>Wishlist</DropdownItem>
            <DropdownItem danger={true} onClick={() => dispatch(logout())}>Logout</DropdownItem>
        </DropDown>
    )
}