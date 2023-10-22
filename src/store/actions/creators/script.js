/* eslint-disable import/prefer-default-export */
import  { SET_CURRENT_TRACK, SET_IS_PLAYING } from '../types/script';

export const playCurrentTrack = (track) => ({
    type: SET_CURRENT_TRACK,
    payload: track,
})

export const setIsPlayingTrack = (isPlaying) => ({
    type: SET_IS_PLAYING,
    payload: isPlaying,
})