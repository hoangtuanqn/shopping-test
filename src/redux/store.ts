import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import ordersSlice from "./slices/ordersSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        orders: ordersSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
