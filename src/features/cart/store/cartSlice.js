import { createSlice } from "@reduxjs/toolkit";

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
            state.productsInCart.push({id: action.payload.id, qty: 1})
        },
        removeFromCart: (state, action) => {
            state.productsInCart = state.productsInCart.filter((item) => item.id !== action.payload)
            console.log(`removed ${action.payload}`)
        },
        updateQty: (state, action) => {
            const product = state.productsInCart.find((item) => item.id === action.payload.id)
            if (product) {
                product.qty = product.qty + action.payload.qty
            }
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

export const { addToCart, removeFromCart, updateQty, addAddressDetails, addPaymentDetails, placeOrder } = cartSlice.actions;
export default cartSlice.reducer;