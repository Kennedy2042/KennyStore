import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    product:[],
    
}
export const Kennedy = createSlice({
    name: "kennedyProductState",
    initialState,
    reducers : {
        items:(state, {payload})=>{
            state.product = payload
        }
    }

})
export const {items} = Kennedy.actions
export default Kennedy.reducer