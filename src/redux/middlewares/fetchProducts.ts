import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductType } from "../../interfaces/ProductType";
import { API_URL } from "../../config/config";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${API_URL}/products`);
        return res.data as ProductType[];
    } catch (error) {
        console.log("Failed api get products >> ", error);
        return rejectWithValue("failed");
    }
});
