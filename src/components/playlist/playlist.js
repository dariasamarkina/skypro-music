// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';
import { PlaylistItem } from '../playlistitem/playlistitem';
import { SkeletonPlaylistItems } from '../skeleton/skeleton';

function AllTracks() {
  return(
      <PlaylistItem/>
  )
}

// eslint-disable-next-line import/prefer-default-export
export function Playlist({ isLoading }) {
  return <S.ContentPlaylist>
    {isLoading ? <SkeletonPlaylistItems/> : <AllTracks/>}
  </S.ContentPlaylist>
}