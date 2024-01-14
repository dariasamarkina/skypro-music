/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'; 
import * as S from './styles';
import { userContext } from '../../context/userContext';
import { selectIsPlaying, currentPlaylistSelector, currentTrackSelector } from '../../store/selectors/script';
import { setActivePlaylist, setCurrentPlaylist, setCurrentTrack, setIsLoading } from '../../store/slices/trackslice';
import { useAddFavoriteTracksMutation, useDeleteFavoriteTracksMutation, useGetAllTracksQuery, useGetFavoriteTracksQuery } from '../../services/playlists';
import { LikeButton } from '../likebutton/likebutton';

export function PlaylistItem ({ track, album, author, link, title, albumLink, authorLink, titleSpan, time }) {

  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
  const currentTrack = useSelector(currentTrackSelector);

  const playlist = useSelector(currentPlaylistSelector);

  const startPlayer = (track) => {
    dispatch(setCurrentTrack(track));
    dispatch(setActivePlaylist(playlist));
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
      <S.PlaylistItem key={track.id}>
        <S.PlaylistTrack onClick={() => startPlayer(track)}>
          <S.TrackTitle>
            <S.TrackTitleImage>
              {currentTrack && (currentTrack.id === track.id  && (
                <S.CurrentTrackAnimation $isPlaying = {isPlaying} />
              ))}
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <S.TrackTitleLink href={link}>
                {title}
                <S.TrackTitleSpan>{titleSpan}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href={authorLink}>
              {author}
            </S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href={albumLink}>
              {album}
            </S.TrackAlbumLink>
          </S.TrackAlbum>
          <div className="track__time">
            <LikeButton track = {track} />
            <S.TrackTimeText className="track__time-text">
              {convertTime(time)}
            </S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
  )
}