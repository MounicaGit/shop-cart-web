import { createSlice } from "@reduxjs/toolkit";
import { products } from '../services/deals'

const initialState = { products: [], allProducts: [] }
const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        getDeals: (state, action) => {
            const dealsData = [];
            products.map((item) => {
                dealsData.push(item)
            })
            console.log("products=>", dealsData)
            state.allProducts = dealsData;
            state.products = dealsData;
        },
        getProductDetails: (state, action) => {
            return products.find((item) => item.id === action)
        },
        updateItemWishlist: (state, action) => {
            console.log("state.products=>", state.products)
            state.products.map((item) => { console.log("id=>", item.id, action.payload); if (item.id == action.payload) { console.log("wishlisted"); item.isWishlisted = !item.isWishlisted } })
        },
        updateItemQty: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id)
            item.qty = action.payload.qty;
        },
        filterDeals: (state, action) => {
            if (action.payload) {
                const filteredDeals = state.allProducts.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase()))
                state.products = filteredDeals
            }
            else
                state.products = state.allProducts;
        }
    }
}
);

export const { getDeals, updateItemWishlist, filterDeals, updateItemQty, getProductDetails } = productSlice.actions;

export default productSlice.reducer;