import { createSlice } from "@reduxjs/toolkit";

const initialState = { addressDetails: {}, paymentDetails: {} }
const checkoutSlice = createSlice({
    name: "checkout",
    initialState: initialState,
    reducers: {
        addAddress: (state, action) => {
            state.addressDetails = action.payload;
        },
        addPayment: (state, action) => {
            state.paymentDetails = action.payload;
        }
    }
});

export const {addAddress, addPayment} = checkoutSlice.actions;
export default checkoutSlice.reducer;