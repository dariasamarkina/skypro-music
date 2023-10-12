// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';
import { PlaylistItem } from '../playlistitem/playlistitem';
import { SkeletonPlaylistItems } from '../skeleton/skeleton';

function AllTracks({ getTracks, setPlayTrack }) {
  return(

      <PlaylistItem 
        getTracks={ getTracks } 
        setPlayTrack={ setPlayTrack }/>

  )
}

// eslint-disable-next-line import/prefer-default-export
export function Playlist({ getTracks, isLoading, setPlayTrack }) {
  return <S.ContentPlaylist>
    {isLoading ? <SkeletonPlaylistItems/> : <AllTracks getTracks={getTracks} setPlayTrack={setPlayTrack}/>}
  </S.ContentPlaylist>
}