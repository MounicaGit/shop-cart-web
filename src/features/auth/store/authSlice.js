import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export const signup = createAsyncThunk("auth/signup", async ({ email, password, name, phonenumber }, { rejectWithValue }) => {
    await new Promise((res) => setTimeout(res, 1000));

    const newUser = { id: Date.now(), name: name, email: email, password: password, phonenumber: phonenumber }
    fakeUsers.push(newUser);
    return newUser;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state, action) => { // used for only state change
            state.user = null;
            state.status = "idle";
            state.error = null
        }
    },
    extraReducers: (builder) => { //used for async calls 
        builder.addCase(signin.pending, (state, action) => {
            state.status = "loading";
            state.error = null
        }),
            builder.addCase(signin.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "authenticated";
                state.error = null;
            }),
            builder.addCase(signin.rejected, (state, action) => {
                state.status = "error";
                state.error = action.payload;
            }),
            builder.addCase(signup.pending, (state, action) => {
                state.status = "loading";
                state.error = null
            }),
            builder.addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.status = "authenticated";
                state.error = null;
            })
    }
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;