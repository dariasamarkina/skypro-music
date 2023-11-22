/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
/* eslint-disable arrow-body-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
// eslint-disable-next-line arrow-body-style, import/no-unresolved

import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { userContext } from '../../context/userContext';
import { ContentTitle } from '../../components/playlistheader/styles';
import { Playlist } from '../../components/playlist/playlist';
import * as S from './styles';
import { setCurrentTrack, setIsPlaying, setIsLoading, setCurrentPlaylist } from '../../store/slices/trackslice';
import { useGetFavouriteTracksQuery } from '../../services/playlists';

export const Favorites = ({ isLoading }) => {
    const { token, setToken } = useContext(userContext);
    const dispatch = useDispatch();

    const { data, error } = useGetFavouriteTracksQuery();
    useEffect(() => {
        dispatch(setCurrentPlaylist(data));
        dispatch(setIsLoading(false));
      }, [data]);

    if (localStorage.getItem('token', token)) {
        return (
            <div>
                <S.CenterblockH2>Мои Треки</S.CenterblockH2>
                <S.CenterblockContent>
                <ContentTitle isLoading={isLoading} />
                {error ? (
                    <p>Не удалось заргузить плейлист: {error.error}</p>
                ) : (
                    <Playlist tracks={data} />
                )}
                </S.CenterblockContent>
          </div>
        ) 
    } else {
        useEffect(() => {
            setToken(false);
            dispatch(setCurrentTrack({}));
            dispatch(setIsPlaying(false));
          }, []);
    }
}
    