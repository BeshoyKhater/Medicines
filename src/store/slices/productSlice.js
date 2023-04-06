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

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
    name:"products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending,(state,action)=>{
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})


export default productSlice.reducer