import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'name',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: undefined

    },
    reducers: {
        onchecking: ( state ) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onlogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined;
        }
    }
});


export const { onchecking, onlogin } = authSlice.actions;