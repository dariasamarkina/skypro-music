// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';
import { PlaylistItem } from '../playlistitem/playlistitem';
import { SkeletonPlaylistItems } from '../skeleton/skeleton';

function AllTracks({ getTracks, playTrack }) {
  return(

      <PlaylistItem 
        getTracks={ getTracks} 
        setPlayTrack={playTrack}/>

  )
}

// eslint-disable-next-line import/prefer-default-export
export function Playlist({ getTracks, isLoading, playTrack }) {
  return <S.ContentPlaylist>
    {isLoading ? <SkeletonPlaylistItems/> : <AllTracks getTracks={getTracks} setPlayTrack={playTrack}/>}
  </S.ContentPlaylist>
}