/* eslint-disable import/prefer-default-export */
import  { SET_CURRENT_PLAYLIST, SET_CURRENT_TRACK, SET_IS_PLAYING, SET_IS_LOADING } from '../types/script';

export const selectCurrentTrack = (track) => ({
    type: SET_CURRENT_TRACK,
    payload: track,
});

export const selectIsPlaying = (isPlaying) => ({
    type: SET_IS_PLAYING,
    payload: isPlaying,
});

export const selectCurrentPlaylist = (playlist) => ({
    type: SET_CURRENT_PLAYLIST,
    payload: playlist,
});

export const selectIsLoading = (isLoading) => ({
    type: SET_IS_LOADING,
    payload: isLoading,
})