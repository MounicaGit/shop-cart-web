import { createSlice } from "@reduxjs/toolkit"

const storedUser = JSON.parse(localStorage.getItem("user"));
const storedAuthStatus = localStorage.getItem("isAuthenticated") == "true"
const initialState = { user: storedUser, isAuthenticated: storedAuthStatus || false }
console.log("initialState=>", initialState);
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            // state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("isAuthenticated", "true")
        },
        signUp: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = false;
            localStorage.setItem("user", JSON.stringify(action.payload))
            localStorage.setItem("isAuthenticated", "false")
            console.log("registered user=>", state.user)
        },
        logout: (state, action) => {
            // state.user = null; 
            state.isAuthenticated = false;
            localStorage.setItem("isAuthenticated", "false")
        }
    }
});

export const { login, signUp, logout } = authSlice.actions;

export default authSlice.reducer;