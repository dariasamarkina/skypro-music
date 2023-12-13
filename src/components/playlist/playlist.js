// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from './styles';
import { PlaylistItem } from '../playlistitem/playlistitem';
import { SkeletonPlaylistItems } from '../skeleton/skeleton';
import { selectIsLoading } from '../../store/selectors/script';
import { useGetAllTracksQuery } from '../../services/playlists';

// eslint-disable-next-line import/prefer-default-export
export function Playlist({ tracks }) {
  const { isFetching } = useGetAllTracksQuery();
  const isLoading = useSelector(selectIsLoading);

  return (
    <S.ContentPlaylist>
    <div className="content__playlist-items">
        {isLoading && isFetching ? (
          <SkeletonPlaylistItems />
        ) : (
          tracks?.map((track) => (
            <PlaylistItem
              track={track}
              key={track.id}
              title={track.name}
              link={track.track_file}
              author={track.author}
              authorLink={track.authorLink}
              album={track.album}
              albumLink={track.albumLink}
              time={track.duration_in_seconds}
            />
          ))
        )}
      </div>
  </S.ContentPlaylist>
  )
}