/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from "@reduxjs/toolkit";
import currentTrackReducer from "./reducers/script";

export const store = configureStore({
    reducer: {
        currentTrack: currentTrackReducer,
    }
})