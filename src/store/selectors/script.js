/* eslint-disable import/prefer-default-export */
const currentTrackSelector = (store) => store.currentTrack;

export const currentPlayTrack = (store) => currentTrackSelector(store)?.track || [];

export const currentIsPlaying = (store) => currentTrackSelector(store)?.isPlaying;

