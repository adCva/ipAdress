import { configureStore } from '@reduxjs/toolkit';
import locationSlice from "./Features/locationSlice";
import middleware from "./Features/middleware";


export default configureStore({
    reducer: {
        location: locationSlice,
        locationMiddleware: middleware
    }
})