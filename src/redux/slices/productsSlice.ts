import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "./../../interfaces/ProductType";
import { fetchProducts } from "../middlewares/fetchProducts";
interface Product {
    status: "idle" | "pending" | "succeeded" | "failed";
    products: ProductType[];
}
const initialState: Product = {
    status: "idle",
    products: [],
};
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateProduct: (state, action) => {
            state.products.map((product) => {
                if (action.payload.id !== product.id) {
                    return product;
                }
                return action.payload;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
                state.status = "succeeded";
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
