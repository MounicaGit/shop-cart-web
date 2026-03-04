import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS } from "../../../utils/constants/StringConstants";
import { getStoredItem, setItemToStore } from "../../../utils/storage/localStorageUtils";


const storedUser = getStoredItem("currentUser");

var initialState = { user: null, error: null };
if (storedUser) {
    const currentUser = JSON.parse(storedUser);
    if (currentUser.status == AUTH_STATUS.AUTHENTICATED) {
        initialState.user = currentUser;
    }
}


export const signin = createAsyncThunk("auth/signin", async ({ email, password }, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 1000));
    //console.log(`user.email=> ${user.email} user.password=> ${user.password} email=> ${email} password=> ${password}`)
    const users = getStoredItem("users");
    console.log(`users=> ${users} ${email} ${password}`)
    const currentUser = JSON.parse(users).find((user) => user.email === email && user.password === password);
    console.log(`user=> ${currentUser}`)
    if (!currentUser) {
        console.log("user not logged in")
        return rejectWithValue("Invalid user credentials");
    }
    console.log(`user logged in=> ${currentUser}`)
    return currentUser;
});

export const signup = createAsyncThunk("auth/signup", async ({ fullName, email, phone, password }, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 1000));
    const users = getStoredItem("users");
    const duplicateAccount = users && JSON.parse(users).find((item) => item.email === email || item.phone === phone)
    console.log(`dup=> ${duplicateAccount}`)
    if (duplicateAccount != null) {
        return rejectWithValue("User already registered")
    }
    else {
        const newUser = { id: Date.now(), fullName: fullName, email: email, password: password, phone: phone, }
        return newUser;
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state, action) => { // used for only state change
            state.user = null;
            state.error = null;
        },
        clearAuthStatus: (state, action) => {
            // state.user.status = AUTH_STATUS.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => { //used for async calls 
        builder.addCase(signin.pending, (state, action) => {
            console.log("log 1111")
            // state.user.status = AUTH_STATUS.LOADING;
            state.error = null
        }).
            addCase(signin.fulfilled, (state, action) => {
                console.log(`log 2222 => ${action.payload}`)
                state.user = action.payload;
                console.log(`state.user=> ${state.user}`)
                state.user.status = AUTH_STATUS.AUTHENTICATED;
                state.error = null;
                setItemToStore("currentUser", JSON.stringify(state.user))
            }).
            addCase(signin.rejected, (state, action) => {
                console.log("log 3333")
                if (state.user) { state.user.status = AUTH_STATUS.ERROR; }
                state.error = action.payload;
            }).
            addCase(signup.pending, (state, action) => {
                console.log(`log 5555=>`)
                // state.user.status = AUTH_STATUS.LOADING;
                state.error = null
            }).
            addCase(signup.fulfilled, (state, action) => {
                state.error = null;
                const storedUsers = getStoredItem("users") || [];
                var users = storedUsers.length == 0 ? [] : JSON.parse(storedUsers);
                var user = action.payload;
                user.status = AUTH_STATUS.REGISTERED;
                console.log(`log 3333=>${users}`)
                users.push(action.payload);
                setItemToStore("users", JSON.stringify(users))

            }).
            addCase(signup.rejected, (state, action) => {
                console.log(`log 4444=>`)
                state.user = null;
                state.error = action.payload;
            })
    }
})

export const { logout, clearAuthStatus } = authSlice.actions;
export default authSlice.reducer;