import { useDispatch } from "react-redux";
import DropDown from "../ui/DropDown";
import { logout } from "../../features/auth/store/authSlice";
import DropdownItem from "../ui/DropdownItem";
import ProfileIcon from '../../assets/images/user.png';
import CartIcon from '../../assets/images/cart.png';
import DownArrowIcon from '../../assets/images/down-arrow.png';

export default function ProfileMenu() {
    const dispatch = useDispatch()
    return (
        <DropDown trigger={<div className="flex flex-row items-center mr-10 gap-2">
            <img src={ProfileIcon} className="h-5 w-5" />
            <p className="text-white">adfadfafafasdf</p>
            <img src={DownArrowIcon} className="h-3 w-3" />
        </div>}>
            <DropdownItem>My Orders</DropdownItem>
            <DropdownItem>Wishlist</DropdownItem>
            <DropdownItem danger={true} onClick={() => dispatch(logout())}>Logout</DropdownItem>
        </DropDown>
    )
}