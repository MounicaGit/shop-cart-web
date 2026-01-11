import { createSlice } from "@reduxjs/toolkit";
import { deals } from '../services/deals'

const initialState = { deals: [], allDeals: [] }
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
            state.allDeals = dealsData;
            state.deals = dealsData;
        },
        updateItemWishlist: (state, action) => {
            console.log("state.deals=>", state.deals)
            state.deals.map((item) => { console.log("id=>", item.id, action.payload); if (item.id == action.payload) { console.log("wishlisted"); item.isWishlisted = !item.isWishlisted } })
        },
        addToCart: (state, action) => {
            const item = state.deals.find((item) => item.id === action.payload)
            item.isAddedToCart = !item.isAddedToCart
        },
        updateItemQty: (state, action) => {
            const item = state.deals.find((item) => item.id === action.payload.id)
            item.qty = action.payload.qty;
        },
        filterDeals: (state, action) => {
            if (action.payload) {
                const filteredDeals = state.allDeals.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
                state.deals = filteredDeals
            }
            else
                state.deals = state.allDeals;
        }
    }
}
);

export const { getDeals, updateItemWishlist, addToCart, updateItemQty, filterDeals } = productSlice.actions;

export default productSlice.reducer;