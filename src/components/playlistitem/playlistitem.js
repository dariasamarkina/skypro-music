/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';

export function PlaylistItem({ getTracks, setPlayTrack }) {
  const startPlayer = (PlayTrack) => {
    setPlayTrack(PlayTrack)
  }

  return (
    <>
      {getTracks?.map((track) => (
        
        <S.PlaylistItem key={track.id}>
          <S.PlaylistTrack onClick={() => startPlayer(track)}>
            <S.TrackTitle>
              <S.TrackTitleImage>
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink>
                {/* href={track.track_file} */}
                  {track.name}
                  <S.TrackTitleSpan />
                </S.TrackTitleLink>
              </S.TrackTitleText>
            </S.TrackTitle>
            <S.TrackAuthor>
              <S.TrackAuthorLink href={track.authorLink}>
                {track.author}
              </S.TrackAuthorLink>
            </S.TrackAuthor>
            <S.TrackAlbum>
              <S.TrackAlbumLink href={track.albumLink}>
                {track.album}
              </S.TrackAlbumLink>
            </S.TrackAlbum>
            <div className="track__time">
              <S.TrackTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like" />
              </S.TrackTimeSvg>
              <S.TrackTimeText className="track__time-text">
                {track.duration_in_seconds}
              </S.TrackTimeText>
            </div>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </>
  )
}