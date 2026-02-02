import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AUTH_STATUS } from "../../../utils/constants/StringConstants";

const fakeUsers = [
    { id: 1, email: 'test1@test.com', password: 'test@123', name: 'Test' }
];

const initialState = { user: null, status: "idle", error: null }

export const signin = createAsyncThunk("auth/signin", async ({ email, password }, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 1000));
    const user = fakeUsers.find((user) => user.email === email && user.password === password);
    if (!user)
        return rejectWithValue("Invalid user credentials");
    return user;
});

export const signup = createAsyncThunk("auth/signup", async ({ fullName, email, phone, password }, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 1000));

    const newUser = { id: Date.now(), name: fullName, email: email, password: password, phonenumber: phone }
    fakeUsers.push(newUser);
    return newUser;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state, action) => { // used for only state change
            state.user = null;
            state.status = AUTH_STATUS.IDLE;
            state.error = null
        },
        clearAuthStatus: (state, action) => {
            state.status = AUTH_STATUS.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => { //used for async calls 
        builder.addCase(signin.pending, (state, action) => {
            state.status = AUTH_STATUS.LOADING;
            state.error = null
        }).
            addCase(signin.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = AUTH_STATUS.AUTHENTICATED;
                state.error = null;
            }).
            addCase(signin.rejected, (state, action) => {
                state.status = AUTH_STATUS.ERROR;
                state.error = action.payload;
            }).
            addCase(signup.pending, (state, action) => {
                state.status = AUTH_STATUS.LOADING;
                state.error = null
            }).
            addCase(signup.fulfilled, (state, action) => {
                // state.user = action.payload;
                state.status = AUTH_STATUS.REGISTERED;
                state.error = null;
            }).
            addCase(signup.rejected, (state, error) => {
                state.user = null;
                state.error = "Error Registering User";
                state.status = AUTH_STATUS.ERROR;
            })
    }
})

export const { logout, clearAuthStatus } = authSlice.actions;
export default authSlice.reducer;