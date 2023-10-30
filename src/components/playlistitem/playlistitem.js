/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { playCurrentTrack } from '../../store/actions/creators/script';
import { currentIsPlaying, currentPlayTrack, currentPlaylist } from '../../store/selectors/script';

export function PlaylistItem () {

  const dispatch = useDispatch();

  const isPlaying = useSelector(currentIsPlaying);
  const currentTrack = useSelector(currentPlayTrack);

  const playlist = useSelector(currentPlaylist);

  const startPlayer = (track) => {
    dispatch(playCurrentTrack(track));
  }

  function convertTime(time) {
    const min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    if (sec < 10) {
      sec = `0${sec}`
    }

    return `${min  }:${  sec}`;
  }

  return (
      <div>
        {playlist?.map((track) => (
        <S.PlaylistItem key={track.id}>
          <S.PlaylistTrack onClick={() => startPlayer(track)}>
            <S.TrackTitle>
              <S.TrackTitleImage>
                {currentTrack.id === track.id  && (
                  <S.CurrentTrackAnimation $isPlaying = {isPlaying} />
                )}
                <S.TrackTitleSvg alt="music">
                  <use xlinkHref="img/icon/sprite.svg#icon-note" />
                </S.TrackTitleSvg>
              </S.TrackTitleImage>
              <S.TrackTitleText>
                <S.TrackTitleLink>
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
                {convertTime(track.duration_in_seconds)}
              </S.TrackTimeText>
            </div>
          </S.PlaylistTrack>
        </S.PlaylistItem>
      ))}
    </div>
  )
}