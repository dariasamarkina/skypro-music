/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allTracks: [],
    currentTrack: null,
    currentPlaylist: {},
    activePlaylist: {},
    isPlaying: false,
    isLoading: true,
};

export const trackSLice = createSlice({
    name: 'Track',
    initialState,
    reducers: {

        setAllTracks: (state, action) => {
            state.allTracks = action.payload
        },

        setCurrentTrack: (state, action) => {
            state.currentTrack = action.payload
        },

        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },

        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },

        setCurrentPlaylist: (state, action) => {
            state.currentPlaylist = action.payload
        },

        setActivePlaylist: (state, action) => {
            state.activePlaylist = action.payload
        },
    }
})

export const { 
    setAllTracks, 
    setCurrentTrack, 
    setIsPlaying, 
    setIsLoading, 
    setCurrentPlaylist, 
    setActivePlaylist 
} = trackSLice.actions;

export default trackSLice.reducer;