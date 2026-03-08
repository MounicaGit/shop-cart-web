import { useSelector } from "react-redux";
import { getTotalPrice, selectCartProducts } from "../store/cartSelector";

export default function useCart() {
    const { finalPrice, discount, delivery, totalPrice } = useSelector(getTotalPrice);
    const cartProducts = useSelector(selectCartProducts);
    return {
        finalPrice, discount, delivery, totalPrice, cartProducts,
    }
}