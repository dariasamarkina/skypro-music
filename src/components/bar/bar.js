/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Player } from '../player/player';
import { PlayerControls } from '../playercontrols/playercontrols';
import * as S from './styles';

const barVolume = (
  <S.BarVolumeBlock>
    <S.VolumeContent>
      <S.VolumeImage>
        <S.VolumeSvg alt="volume">
          <use xlinkHref="img/icon/sprite.svg#icon-volume" />
        </S.VolumeSvg>
      </S.VolumeImage>
      <S.VolumeProgress>
        <S.VolumeProgressLine
          type="range"
          name="range"
        />
      </S.VolumeProgress>
    </S.VolumeContent>
  </S.BarVolumeBlock>
)

export function Bar({ isLoading, PlayTrack }) {
  return (
    <S.Bar>
      <S.BarContent>
        <S.BarPlayerProgress />
        <S.BarPlayerBlock>
          <S.BarPlayer>
            <PlayerControls isLoading={isLoading} />

            <Player isLoading={isLoading} PlayTrack={PlayTrack}/>
          </S.BarPlayer>
          {barVolume}
        </S.BarPlayerBlock>
      </S.BarContent>
    </S.Bar>
  )
}