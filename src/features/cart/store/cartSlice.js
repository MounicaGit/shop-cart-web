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
        updateCart: (state, action) => {
            state.productsInCart.push(action.payload)
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

export const { updateCart, addAddressDetails, addPaymentDetails, placeOrder } = cartSlice.actions;
export default cartSlice.reducer;