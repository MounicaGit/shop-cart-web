import { useSelector } from "react-redux";
import { getProductQty } from "../../cart/store/cartSelector";

export default function useProduct({id}) {
    return {
        products: useSelector((state) => state.product).products,
        qty: useSelector(getProductQty(id)),
    }
}