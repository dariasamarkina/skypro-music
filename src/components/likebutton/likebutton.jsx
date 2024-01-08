/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from "react";
import { useAddFavoriteTracksMutation, useDeleteFavoriteTracksMutation, useGetFavoriteTracksQuery } from "../../services/playlists";
import { TrackTimeSvg } from "../playlistitem/styles";

export function LikeButton({ track }) { 
    const { data: favTracks } = useGetFavoriteTracksQuery();
    const [isLiked,  setIsLiked] = useState(false);
    const [addFavoriteTrack] = useAddFavoriteTracksMutation();
    const [deleteFavoriteTrack] = useDeleteFavoriteTracksMutation();

    const addLike = async (id) => {
        await addFavoriteTrack(id)
        setIsLiked(true);
    };

    const deleteLike = async (id) => {
        await deleteFavoriteTrack(id)
        setIsLiked(false);
    };

    const toggleLike = (id) => {
        if (!isLiked) {
            addLike(id);
        } else {
            deleteLike(id);
        }
    };

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem('token'));
        if (!track.stared_user) {
            setIsLiked(true);
            return;
        };

        if (track?.stared_user?.find((user) => user.id === currentUser.id)) {
            setIsLiked(true);
        }
    }, [track]);

    return (
        <TrackTimeSvg alt="time" 
            onClick={(e) => {
                e.stopPropagation(); 
                toggleLike(track.id)}}>
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
      ) : (
        <use xlinkHref="img/icon/sprite.svg#icon-like" />
      )}
    </TrackTimeSvg>
    )
}