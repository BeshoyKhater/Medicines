import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk('dataUsers/getUsers', async (_,thunkAPI) => {
    const {RejectWithValue} = thunkAPI;
    try {
        const res = await fetch('http://localhost:4000/users')
        const data = await res.json();
        return data;
    } catch (error) {
        return RejectWithValue(error.message)
    }
})


const getUsersSlice = createSlice({
    name:"dataUsers",
    initialState:[],
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending,(state,action)=>{
        })
        builder.addCase(getUsers.fulfilled,(state,action)=>{
            state = action.payload;
        })
        builder.addCase(getUsers.rejected,(state,action)=>{
        })
    }
})

export default getUsersSlice.reducer