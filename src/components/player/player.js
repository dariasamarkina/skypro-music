/* eslint-disable import/no-unresolved */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';
import { SkeletonPlayer } from '../skeleton/skeleton';
import { LikeButton } from '../likebutton/likebutton';

function TrackPlayerLoaded({ PlayTrack }) {
  return <S.TrackPlaycontain>
      <S.TrackPlayImage>
        <S.TrackPlaySvg alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </S.TrackPlaySvg>
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
export function Player({ isLoading, PlayTrack }) {
  return (
    <S.PlayerTrackPlay>
      {isLoading ? <SkeletonPlayer/> : <TrackPlayerLoaded PlayTrack={PlayTrack}/>}
      <S.TrackPlayLikeDis>
        <LikeButton track = {PlayTrack} />
      </S.TrackPlayLikeDis>
    </S.PlayerTrackPlay>
  )
}