import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducer: {}
}
)

export const { } = cartSlice.actions;
export default cartSlice.reducer;