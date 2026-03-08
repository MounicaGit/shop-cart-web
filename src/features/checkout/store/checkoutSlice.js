import { createSlice } from "@reduxjs/toolkit";

const initialState = { address: {}, paymentDetails: {} }
const checkoutSlice = createSlice({
    name: "checkout",
    initialState: initialState,
    reducers: {
        addAddress: (state, action) => {
            state.address = state.action;
        },
        addPayment: (state, action) => {
            state.paymentDetails = action.payload;
        }
    }
});

export const {addAddress, addPayment} = checkoutSlice.actions;
export default checkoutSlice.reducer;