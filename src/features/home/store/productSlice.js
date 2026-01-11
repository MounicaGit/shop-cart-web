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
        updateItemWishlist: (state, action) => {
            console.log("state.deals=>", state.deals)
            state.deals.map((item) => { console.log("id=>", item.id, action.payload); if (item.id == action.payload) { console.log("wishlisted"); item.isWishlisted = !item.isWishlisted } })
        }
    }
}
);

export const { getDeals, updateItemWishlist } = productSlice.actions;

export default productSlice.reducer;