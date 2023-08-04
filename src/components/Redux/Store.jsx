import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Kennedy } from "./ProductState";

export const Store = configureStore({
    reducer: {
        apiProducts: Kennedy.reducer
    }
})