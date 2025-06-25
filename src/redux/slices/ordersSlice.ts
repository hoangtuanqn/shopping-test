import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderType } from "./../../interfaces/OrderType";
import { fetchOrders } from "../middlewares/fetchOrders";
interface Order {
    status: "idle" | "pending" | "succeeded" | "failed";
    orders: OrderType[];
}
const initialState: Order = {
    status: "idle",
    orders: [],
};

const ordersSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        updateOrder: (state, action) => {
            state.orders.map((order) => {
                if (action.payload.id !== order.id) {
                    return order;
                }
                return action.payload;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = "pending";
            })
            .addCase(fetchOrders.fulfilled, (state, action: PayloadAction<OrderType[]>) => {
                state.status = "succeeded";
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { updateOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
