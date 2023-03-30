import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('products/fetchData', async (_,thunkAPI) => {
    const {RejectWithValue} = thunkAPI;
    try {
        const res = await fetch('http://localhost:4000/products')
        const data = await res.json();
        return data;
    } catch (error) {
        return RejectWithValue(error.message)
    }
})

// export const fetchData= createAsyncThunk('products/fetchData',async () =>{
//     const res = await fetch("http://localhost:4000/products");
//     const data = await res.json();
    
//     return data
// })


const productSlice = createSlice({
    name:"products",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            return action.payload
        })
    }
})

export const {}=productSlice.actions;
export default productSlice.reducer