import { createSlice } from "@reduxjs/toolkit";
import { add } from "lodash";
import { useSelector } from "react-redux";

const initialState = {
    productsInCart: [],
    addressDetails: {},
    paymentDetails: {}
};
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(`added ${action.payload.id}`)
            state.productsInCart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            console.log(`removed ${action.payload.id}`)
            state.productsInCart = state.productsInCart.filter((item) => item.id !== action.payload.id)
        },
        updateCart: (state, action) => {
            const product = state.productsInCart.find((item) => item.id === action.payload.id)
            if (product) { product.qty = action.payload.qty }
        },
        addAddressDetails: (state, action) => {

        },
        addPaymentDetails: (state, action) => {

        },
        placeOrder: (state, action) => {

        }
    }
}
)

export const { addToCart, removeFromCart, updateCart, addAddressDetails, addPaymentDetails, placeOrder } = cartSlice.actions;
export default cartSlice.reducer;