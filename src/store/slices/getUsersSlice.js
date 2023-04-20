import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getUsers= createAsyncThunk('dataUsers/getUsers',async () =>{
    const res=await fetch("http://localhost:4000/users");
    const data=await res.json();
    return data
})


const getUsersSlice = createSlice({
    name:"dataUsers",
    initialState:[],
    extraReducers: (builder) => {
        builder.addCase(getUsers?.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})


export default getUsersSlice.reducer