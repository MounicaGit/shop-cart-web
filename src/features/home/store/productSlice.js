import { createSlice } from "@reduxjs/toolkit";
import { deals } from '../services/deals'

const initialState = { deals: [] }
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        getDeals: (state, action) => {
            const dealsData = [];
            deals.map((item) => {
                dealsData.push(item)
            })
            console.log("deals=>", dealsData)
            state.deals = dealsData;
        },
        getProductDetails: (state, payload)=>{
            
        }
    }
}
);

export const { getDeals } = productSlice.actions;

export default productSlice.reducer;