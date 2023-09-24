// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './style';

// eslint-disable-next-line import/prefer-default-export
export function PlayerControls() {
  return (
    <S.PlayerControls>
      <S.PlayerButtonPrev>
        <S.PlayerButtonPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerButtonPrevSvg>
      </S.PlayerButtonPrev>
      <S.PlayerButtonPlay>
        <S.PlayerButtonPlaySvg alt="play">
          <use xlinkHref="img/icon/sprite.svg#icon-play" />
        </S.PlayerButtonPlaySvg>
      </S.PlayerButtonPlay>
      <S.PlayerButtonPlayNext>
        <S.PlayerButtonPlayNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerButtonPlayNextSvg>
      </S.PlayerButtonPlayNext>
      <S.PlayerButtonPlayRepeat>
        <S.PlayerButtonPlayRepeatSvg alt="repeat">
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerButtonPlayRepeatSvg>
      </S.PlayerButtonPlayRepeat>
      <S.PlayerButtonPlayShuffle>
        <S.PlayerButtonPlayShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerButtonPlayShuffleSvg>
      </S.PlayerButtonPlayShuffle>
    </S.PlayerControls>
  )
}