import { configureStore } from "@reduxjs/toolkit";
import { bikesApi } from "./reducers/api";
import authReducer from './reducers/auth'
import cartReducer from "./reducers/cart";

const store = configureStore({
    reducer: {
        [bikesApi.reducerPath]: bikesApi.reducer,
        auth: authReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bikesApi.middleware),
});

export default store;
