/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './style';
import { setCurrentTrack,setIsPlaying } from '../../store/slices/trackslice';
import { currentTrackSelector, activePlaylistSelector } from '../../store/selectors/script';

// eslint-disable-next-line import/prefer-default-export
export function PlayerControls(
  { isPlaying,
    audioRef,
    isLoop,
    setIsLoop,
    handleStart,
    shuffleTracks,
    shuffle,
    setShuffle}) {

      const dispatch = useDispatch();

      const handleStop = () => {
        audioRef.current.pause();
        dispatch(setIsPlaying(false));
      }
    
      const togglePlay = isPlaying ? handleStop : handleStart
    
      const handleStartLoop = () => {
        audioRef.current.loop = true
        setIsLoop(true)
      }
    
      const handleStopLoop = () => {
        audioRef.current.loop = false
        setIsLoop(false)
      }
    
      const toggleLoop = isLoop ? handleStopLoop : handleStartLoop;

      const toggleShuffle = () => {
        shuffle ? setShuffle(false) : setShuffle(true);
      } 

      const playtrack = useSelector(currentTrackSelector);
      const playlist = useSelector(activePlaylistSelector);

      const handleNextTrack = () => {
        if (playtrack) {
          const number = playlist.findIndex(e => e.id === playtrack.id);
          if (number > 0 && number < playlist.length - 1 && !shuffle) {
            const next = playlist[number + 1];
            dispatch(setCurrentTrack(next));
          } 
          else if (shuffle) {
            const next = playlist[shuffleTracks()];
            dispatch(setCurrentTrack(next));
          }
        }
      }

      const handlePrevTrack = () => {
        if (playtrack) {
          const number = playlist.findIndex(e => e.id === playtrack.id);
          if (number > 0 && number < playlist.length && !shuffle) {
            const prev = playlist[number - 1];
            dispatch(setCurrentTrack(prev));
          } 
          else if (shuffle) {
            const next = playlist[shuffleTracks()];
            dispatch(setCurrentTrack(next));
          }
        }
      }

  return (
    <S.PlayerControls>

      <S.PlayerButtonPrev>
        <S.PlayerButtonPrevSvg alt="prev" onClick={handlePrevTrack}>
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerButtonPrevSvg>
      </S.PlayerButtonPrev>

      <S.PlayerButtonPlay  onClick={togglePlay}>
        <S.PlayerButtonPlaySvg alt="play">
          {isPlaying ? (
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="19" fill="#D9D9D9" />
              <rect x="10" width="5" height="19" fill="#D9D9D9" />
            </svg>
          ) : (
            <use xlinkHref="img/icon/sprite.svg#icon-play" />
          )}
        </S.PlayerButtonPlaySvg>
      </S.PlayerButtonPlay>

      <S.PlayerButtonPlayNext onClick={handleNextTrack}>
        <S.PlayerButtonPlayNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerButtonPlayNextSvg>
      </S.PlayerButtonPlayNext>

      <S.PlayerButtonPlayRepeat onClick={toggleLoop}>
        {isLoop ? (
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L5 0.113249V5.88675L10 3ZM7 14.5C3.96243 14.5 1.5 12.0376 1.5 9H0.5C0.5 12.5899 3.41015 15.5 7 15.5V14.5ZM1.5 9C1.5 5.96243 3.96243 3.5 7 3.5V2.5C3.41015 2.5 0.5 5.41015 0.5 9H1.5Z"
              fill="white"
            />
            <path
              d="M10 15L15 17.8868V12.1132L10 15ZM13 3.5C16.0376 3.5 18.5 5.96243 18.5 9H19.5C19.5 5.41015 16.5899 2.5 13 2.5V3.5ZM18.5 9C18.5 12.0376 16.0376 14.5 13 14.5V15.5C16.5899 15.5 19.5 12.5899 19.5 9H18.5Z"
              fill="white"
            />
          </svg>
        ) : (
        <S.PlayerButtonPlayRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerButtonPlayRepeatSvg>)}
      </S.PlayerButtonPlayRepeat>

      <S.PlayerButtonPlayShuffle  onClick={toggleShuffle}>
      {shuffle ? (
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.0005 15.7031L14.0005 12.8164V18.5899L19.0005 15.7031ZM9.66366 12.7864L9.20912 12.9947L9.66366 12.7864ZM6.83732 6.61985L6.38279 6.82818L6.83732 6.61985ZM0.000488281 4.20312H2.292V3.20312H0.000488281V4.20312ZM6.38279 6.82818L9.20912 12.9947L10.1182 12.5781L7.29185 6.41152L6.38279 6.82818ZM14.209 16.2031H14.5005V15.2031H14.209V16.2031ZM9.20912 12.9947C10.1052 14.9497 12.0584 16.2031 14.209 16.2031V15.2031C12.4494 15.2031 10.8513 14.1776 10.1182 12.5781L9.20912 12.9947ZM2.292 4.20312C4.05153 4.20312 5.64967 5.22864 6.38279 6.82818L7.29185 6.41152C6.39582 4.45654 4.44254 3.20312 2.292 3.20312V4.20312Z" fill="white"/>
          <path d="M19.0005 3.70312L14.0005 6.58988V0.816374L19.0005 3.70312ZM9.66366 6.61985L9.20912 6.41152L9.66366 6.61985ZM6.83732 12.7864L6.38279 12.5781L6.83732 12.7864ZM0.000488281 15.2031H2.292V16.2031H0.000488281V15.2031ZM6.38279 12.5781L9.20912 6.41152L10.1182 6.82818L7.29185 12.9947L6.38279 12.5781ZM14.209 3.20312H14.5005V4.20312H14.209V3.20312ZM9.20912 6.41152C10.1052 4.45654 12.0584 3.20312 14.209 3.20312V4.20312C12.4494 4.20312 10.8513 5.22864 10.1182 6.82818L9.20912 6.41152ZM2.292 15.2031C4.05153 15.2031 5.64967 14.1776 6.38279 12.5781L7.29185 12.9947C6.39582 14.9497 4.44254 16.2031 2.292 16.2031V15.2031Z" fill="white"/>
          </svg>
        ) : (
        <S.PlayerButtonPlayShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerButtonPlayShuffleSvg>)}
      </S.PlayerButtonPlayShuffle>

    </S.PlayerControls>
  )
}
