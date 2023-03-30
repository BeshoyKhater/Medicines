import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const findState=state.find((product)=> product.id === action.payload.id) 
            if(findState) {
                findState.quantity+=1
            }else {
                const productClone={...action.payload,quantity:1}
                state.push(productClone)
            }
        },
        deleteFromCart:(state,action)=>{
            return state.filter((cart)=>cart.id !== action.payload.id)
        },
    },
})

export const {addToCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;
