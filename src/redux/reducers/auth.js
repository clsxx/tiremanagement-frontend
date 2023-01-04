import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:{},
    error:'',
    loading:false
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        authenticate: (state) => {
            state.error = '';
            state.loading = true;
        },
        authSuccess: (state, action) => {
            localStorage.setItem('USER_KEY',action.token);
            const data = action.payload;
            state.error = '';
            state.loading = false;
            state.user = data;
        },
        authFailure: (state, action) => {
            const error = action.payload;
            state.error = error;
            state.loading = false;
        }
    }
})

// Action creators are generated for each case deducer function
export const { authenticate, authSuccess, authFailure } = authSlice.actions;

export default authSlice.reducer;