/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';
import { SkeletonPlayer } from '../skeleton/skeleton';

function TrackPlayerLoaded({ PlayTrack }) {
  return <S.TrackPlaycontain>
      <S.TrackPlayImage>
        <S.TraclPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </S.TraclPlaySvg>
      </S.TrackPlayImage>
      <S.TrackPlayAuthor>
        <S.TrackPlatAuthorLink href="http://">
          {PlayTrack.name}
        </S.TrackPlatAuthorLink>
      </S.TrackPlayAuthor>
      <S.TrackPlayAlbum>
        <S.TrackPlatAlbumLink href="http://">
          {PlayTrack.author}
        </S.TrackPlatAlbumLink>
      </S.TrackPlayAlbum>
    </S.TrackPlaycontain>
}

// eslint-disable-next-line import/prefer-default-export
export function Player({ isLoading, setPlayTrack }) {
  return (
    <S.PlayerTrackPlay>
      {isLoading ? <SkeletonPlayer/> : <TrackPlayerLoaded setPlayTrack={setPlayTrack}/>}
      <S.TrackPlayLikeDis>
        <S.TrackPlayLike>
          <S.TrackPlayLikeSvg alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </S.TrackPlayLikeSvg>
        </S.TrackPlayLike>
        <S.TrackPlayDislike>
          <S.TrackPlayDislikeSvg alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </S.TrackPlayDislikeSvg>
        </S.TrackPlayDislike>
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}