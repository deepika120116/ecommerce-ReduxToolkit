import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import statusCode from "../../utils/statusCode";

const initialState={
    data:[],
    status:statusCode.IDLE
};
const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        // fetchData(state,action){
        //     state.data=action.payload;
        // }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(getProducts.fulfilled,(state,action)=>{
                state.data=action.payload;
                state.status=statusCode.IDLE
            })
            .addCase(getProducts.pending,(state,action)=>{
                state.data=[];
                state.status=statusCode.LOADING;
            })
            .addCase(getProducts.rejected,(state,action)=>{
                state.data=[];
                state.status=statusCode.ERROR;
            })
    }
});
export const {fetchData}= productSlice.actions;
export default productSlice.reducer;

// export function getProducts(){
//     return async function getProductsThunk(dispatch,getState){
//         const response= await fetch('https://fakestoreapi.com/products');
//         const result=await response.json();
//         dispatch(fetchData(result));
//     }
// }

export const getProducts=createAsyncThunk("products/get",async()=>{
    const response= await fetch('https://fakestoreapi.com/products');
    const result=await response.json();
    return result;
});