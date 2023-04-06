import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{
        addToCart:(state,action)=>{
            const findState=state.find((product)=> product.id === action.payload.id) 
            if(findState) {
                findState.qty=1
            }else {
                const productClone={...action.payload}
                state.push(productClone)
            }
        },
        deleteFromCart:(state,action)=>{
            return state.filter((cart)=>cart.id !== action.payload.id)
        },
        increment:(state,action) => {
            const findState=state.findIndex((product)=> product.id === action.payload) 
            state[findState].qty+=1
        },
        decrement:(state,action) => {
            const findState=state.findIndex((product)=> product.id === action.payload) 
            if (state[findState].qty > 1) {
                state[findState].qty-=1
            } else {
                state[findState].qty=1
            }
        },
    },
})

export const {addToCart, deleteFromCart, increment,decrement} = cartSlice.actions;
export default cartSlice.reducer;
