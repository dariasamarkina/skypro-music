/* eslint-disable no-useless-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userContext } from '../../context/userContext';
import { Player } from '../player/player';
import { PlayerControls } from '../playercontrols/playercontrols';
import * as S from './styles';
import ProgressBar from '../progressbar/progressbar';
import { currentTrackSelector, selectIsPlaying, activePlaylistSelector } from '../../store/selectors/script';
import { setCurrentTrack, setIsPlaying } from '../../store/slices/trackslice';

export function Bar({ isLoading }) {

  const PlayTrack = useSelector(currentTrackSelector);
  const isPlaying = useSelector(selectIsPlaying);
  const playlist = useSelector(activePlaylistSelector);
  const token = useContext(userContext);
  const dispatch = useDispatch(setIsPlaying);

  const [isLoop, setIsLoop] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);
  const [shuffle, setShuffle] = useState(false);
  const audioRef = useRef(null);

  const shuffleTracks = () => {
    const number = Math.floor(Math.random() * (playlist.length - 1));
    return number;
  };

  const handleVolume = (event) => {
    audioRef.current.volume = event.target.value;
    setCurrentVolume(event.target.value);
  };

  const handleAudioUpdate = () => {
    let totalMin = Math.floor(audioRef.current.duration / 60);
    let totalSec = Math.floor(audioRef.current.duration % 60);
    let totalLength = `${
      totalMin < 10 ? `0${totalMin}` : totalMin
    }:${totalSec < 10 ? `0${totalSec}` : totalSec}`;

    setDuration(totalLength);

    let currentMin = Math.floor(audioRef.current.currentTime / 60);
    let currentSec = Math.floor(audioRef.current.currentTime % 60);
    let currentPlay = `${currentMin < 10 ? `0${currentMin}` : currentMin}:${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;

    setCurrentTime(currentPlay);

    const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setAudioProgress(isNaN(progress) ? 0 : progress);
  }

  const handleStart = () => {
    if (localStorage.getItem('token', token)) {
      dispatch(setIsPlaying(true));
      audioRef.current?.play();
    }
  };

  useEffect(handleStart, [PlayTrack]);

  const handleNextTrack = () => {
    const number = playlist.findIndex(e => e.id === PlayTrack.id);

    if (PlayTrack) {
      if (number < playlist.length - 1 && !shuffle) {
        const next = playlist[number + 1];
        dispatch(setCurrentTrack(next));
      } 
      else if (shuffle) {
        const next = playlist[shuffleTracks()];
        dispatch(setCurrentTrack(next));
      }
    }
  }

  const endTrack = () => {
    const number = playlist.findIndex(e => e.id === PlayTrack.id);

    if (!isLoop) {
      handleNextTrack();
    }

    if (number === playlist.length - 1) {
      dispatch(setIsPlaying(false));
    }
  };

  return (
    PlayTrack.id && (
      <S.Bar>
        <S.ProgressTimer>
          <S.TimerValues>{currentTime}</S.TimerValues>
          <S.TimerValues>{`/${duration}`}</S.TimerValues>
        </S.ProgressTimer>

        <audio
          controls
          src={PlayTrack.track_file}
          ref={audioRef}
          style={{ display: 'none' }}
          onTimeUpdate={handleAudioUpdate}
          onEnded={endTrack}>
            <source src={PlayTrack.track_file} type="audio/mpeg" />
        </audio>

        <S.BarContent>
          <ProgressBar
              audioRef={audioRef}
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              setAudioProgress={setAudioProgress}
              audioProgress={audioProgress}
            />
          <S.BarPlayerBlock>
            <S.BarPlayer>
              <PlayerControls
                  isLoading={isLoading}
                  isPlaying={isPlaying}
                  audioRef={audioRef}
                  isLoop={isLoop}
                  setIsLoop={setIsLoop}
                  handleStart={handleStart}
                  shuffleTracks={shuffleTracks}
                  shuffle={shuffle}
                  setShuffle={setShuffle}
              />

              <Player isLoading={isLoading} PlayTrack={PlayTrack}/>
            </S.BarPlayer>

            <S.BarVolumeBlock className="volume">
              <S.VolumeContent>
                <S.VolumeImage>
                  <S.VolumeSvg alt="volume">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </S.VolumeSvg>
                </S.VolumeImage>

                <S.VolumeProgress className="_btn">
                  <S.VolumeProgressLine
                    className="_btn"
                    type="range"
                    name="range"
                    min={0}
                    max={1}
                    value={currentVolume}
                    step={0.1}
                    onChange={handleVolume}/>
                </S.VolumeProgress>
              </S.VolumeContent>
            </S.BarVolumeBlock>
          </S.BarPlayerBlock>
        </S.BarContent>
      </S.Bar>
    )
  )
}