/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import * as S from './styles';
import { userContext } from '../../context/userContext';
import { selectIsPlaying, currentPlaylistSelector, currentTrackSelector } from '../../store/selectors/script';
import { setActivePlaylist, setCurrentPlaylist, setCurrentTrack, setIsLoading } from '../../store/slices/trackslice';
import { useAddFavoriteTracksMutation, useDeleteFavoriteTracksMutation, useGetAllTracksQuery, useGetFavoriteTracksQuery } from '../../services/playlists';

export function PlaylistItem ({ track, album, author, link, title, albumLink, authorLink, titleSpan, time }) {

  const dispatch = useDispatch();

  const isPlaying = useSelector(selectIsPlaying);
  const currentTrack = useSelector(currentTrackSelector);

  const playlist = useSelector(currentPlaylistSelector);

  const startPlayer = (track) => {
    dispatch(setCurrentTrack(track));
    dispatch(setActivePlaylist(playlist));
  }

  const [isLiked, setIsLiked] = useState(false);
  const [addFavoriteTrack] = useAddFavoriteTracksMutation();
  const [deleteFavoriteTrack] = useDeleteFavoriteTracksMutation();
  const navigate = useNavigate();
  const { token, setToken } = useContext(userContext);

  const addLike = async (id) => {
    await addFavoriteTrack(id)
    setIsLiked(true);
  }

  const deleteLike = async (id) => {
    await deleteFavoriteTrack(id)
    setIsLiked(false);
  }

  const toggleLikeDislike = (id) => {
    if (!isLiked) {
      addLike(id);
    } else {
      deleteLike(id);
    }
  }

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('token'))
    if (!track.stared_user) {
      setIsLiked(true);
      return;
    }

    if (track?.stared_user?.find((user) => user.id === currentUser.id)) {
      setIsLiked(true);
    }
  }, [track]);

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
            <S.TrackTimeSvg alt="time" onClick={(e) => {
              toggleLikeDislike(track.id)
              e.stopPropagation()}}>
              {isLiked ? (
                <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.02203 12.7031C13.9025 9.20312 16.9678 3.91234 13.6132 1.47046C11.413 -0.13111 8.95392 1.14488 8.02203 1.95884H8.00052H8.00046H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00046H8.00052H8.02203Z"
                  fill="#B672FF"
                />
                <path
                  d="M8.00046 1.95884H8.02203C8.95392 1.14488 11.413 -0.13111 13.6132 1.47046C16.9678 3.91234 13.9025 9.20312 8.02203 12.7031H8.00046M8.00052 1.95884H7.97895C7.04706 1.14488 4.58794 -0.13111 2.38775 1.47046C-0.966814 3.91234 2.09846 9.20312 7.97895 12.7031H8.00052"
                  stroke="#B672FF"
                />
              </svg>
              ) : (<use xlinkHref="img/icon/sprite.svg#icon-like" />)}
            </S.TrackTimeSvg>
            <S.TrackTimeText className="track__time-text">
              {convertTime(time)}
            </S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      </S.PlaylistItem>
  )
}