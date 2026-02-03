import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS } from "../../../utils/constants/StringConstants";
import { getStoredItem, setItemToStore } from "../../../utils/storage/localStorageUtils";

const fakeUsers = [
    // { id: 1, email: 'test1@test.com', password: 'test@123', name: 'Test', authStatus: AUTH_STATUS.AUTHENTICATED }
];

const storedUser = getStoredItem("users");

var initialState = { user: null, error: null };
if (storedUser) {
    const users = JSON.parse(storedUser);
    users.map((user) => {
        if (user.status == AUTH_STATUS.AUTHENTICATED) {
            initialState.user = JSON.parse(storedUser);
        }
    })
}


export const signin = createAsyncThunk("auth/signin", async ({ email, password }, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 1000));
    console.log(`user.email=> ${user.email} user.password=> ${user.password} email=> ${email} password=> ${password}`)
    const user = fakeUsers.find((user) => user.email === email && user.password === password);
    if (!user)
        return rejectWithValue("Invalid user credentials");
    return user;
});

export const signup = createAsyncThunk("auth/signup", async ({ fullName, email, phone, password }, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 1000));

    const newUser = { id: Date.now(), name: fullName, email: email, password: password, phonenumber: phone, status: AUTH_STATUS.IDLE }
    fakeUsers.push(newUser);
    return newUser;
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
            state.user.status = AUTH_STATUS.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => { //used for async calls 
        builder.addCase(signin.pending, (state, action) => {
            state.user.status = AUTH_STATUS.LOADING;
            state.error = null
        }).
            addCase(signin.fulfilled, (state, action) => {
                state.user = action.payload;
                state.user.status = AUTH_STATUS.AUTHENTICATED;
                state.error = null;

                setItemToStore("users", JSON.stringify(state.user))
            }).
            addCase(signin.rejected, (state, action) => {
                state.user.status = AUTH_STATUS.ERROR;
                state.error = action.payload;
            }).
            addCase(signup.pending, (state, action) => {
                state.user.status = AUTH_STATUS.LOADING;
                state.error = null
            }).
            addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.user.status = AUTH_STATUS.REGISTERED;
                state.error = null;

                var users = JSON.parse(getStoredItem("users"));
                users.push(action.payload);
                setItemToStore("users", JSON.stringify(users))
            }).
            addCase(signup.rejected, (state, error) => {
                state.user = null;
                state.error = "Error Registering users";
                state.user.status = AUTH_STATUS.ERROR;
            })
    }
})

export const { logout, clearAuthStatus } = authSlice.actions;
export default authSlice.reducer;