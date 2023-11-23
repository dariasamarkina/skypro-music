/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { configureStore } from "@reduxjs/toolkit";
import trackSliceReducer from './slices/trackslice';
import { playlistApi } from '../services/playlists';

export const store = configureStore({
    reducer: {
       currentPlay: trackSliceReducer,
       [playlistApi.reducerPath]: playlistApi.reducer,
    },

    middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(playlistApi.middleware),
})
