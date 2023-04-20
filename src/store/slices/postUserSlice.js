import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const insertUser = createAsyncThunk('users/insertUser', async (bookData,thunkAPI) => {
    const {RejectWithValue} = thunkAPI;
    try {
        const res = await fetch('http://localhost:4000/users',{
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    } catch (error) {
        return RejectWithValue(error.message)
    }
})


const users = createSlice({
    name:"users",
    initialState:{},
    extraReducers: (builder) => {
        builder.addCase(insertUser.fulfilled,(state,action)=>{
            state.push(action.payload);
        })
    }
})

export default users.reducer