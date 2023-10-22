/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';


export function PlaylistHeader() {
  return (
    <S.ContentTitle>
      <S.PlaylistTitleCol1>Трек</S.PlaylistTitleCol1>
      <S.PlaylistTitleCol2>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol2>
      <S.PlaylistTitleCol3>АЛЬБОМ</S.PlaylistTitleCol3>
      <S.PlaylistTitleCol4>
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </S.PlaylistTitleSvg>
      </S.PlaylistTitleCol4>
    </S.ContentTitle>
  )
}