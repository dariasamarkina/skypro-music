/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Player } from '../player/player';
import { PlayerControls } from '../playercontrols/playercontrols';
import * as S from './styles';
import ProgressBar from '../progressbar/progressbar';
import { currentPlayTrack, currentIsPlaying } from '../../store/selectors/script';
import { setIsPlayingTrack } from '../../store/actions/creators/script';

export function Bar({ isLoading }) {

  const PlayTrack = useSelector(currentPlayTrack);
  const isPlaying = useSelector(currentIsPlaying);
  const dispatch = useDispatch(setIsPlayingTrack);

  const [isLoop, setIsLoop] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);
  const audioRef = useRef(null);

  const handleVolume = (event) => {
    audioRef.current.volume = event.target.value;
    setCurrentVolume(event.target.value);
  }

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
    audioRef.current.play();
    dispatch(setIsPlayingTrack(true));
  }

  useEffect(handleStart, [PlayTrack]);

  const endTrack = () => {
    if (!isLoop) {
      dispatch(setIsPlayingTrack(false));
    }
  }

  return (
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
}