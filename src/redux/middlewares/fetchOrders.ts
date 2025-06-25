import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../config/config";
import { OrderType } from "../../interfaces/OrderType";

export const fetchOrders = createAsyncThunk("products/fetchOrders", async (_, { rejectWithValue }) => {
    try {
        const res = await axios.get(`${API_URL}/orders`);
        return res.data as OrderType[];
    } catch (error) {
        console.log("Failed api get orders >> ", error);
        return rejectWithValue("failed");
    }
});
