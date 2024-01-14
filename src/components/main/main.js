/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-shadow */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as S from './styles';
import { Navigation } from '../navmenu/nav';
import { Filter } from '../filter/filter';
import { ContentTitlePlaylist } from '../playlisttitle/playlisttitle';
import { Playlist } from "../playlist/playlist";
import { Sidebar } from "../sidebar/sidebar";
import { filtersSelector, currentPlaylistSelector, currentTrackSelector } from '../../store/selectors/script';
import { useGetAllTracksQuery } from '../../services/playlists';
import { setCurrentPlaylist, setIsLoading, setFilters, setCurrentTrack } from '../../store/slices/trackslice';

// eslint-disable-next-line import/prefer-default-export
export function Main({ isLoading, setToken }) {
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);

  const searchFilter = (event) => {
    dispatch(setFilters({ ...filters, searchValue: event.target.value, status: true }))
  }

  const { data, isFetching } = useGetAllTracksQuery();

    return (
      <S.Main>
        <Navigation setToken={setToken}/>
        <S.MainCenterblock>
          <S.CenterblockSearch>
            <S.SearchSvg>
              <use xlinkHref="img/icon/sprite.svg#icon-search" />
            </S.SearchSvg>
            <S.SearchText
              type="search"
              placeholder="Поиск"
              name="search"
              onChange={(event) => searchFilter(event)}
            />
          </S.CenterblockSearch>
          <S.CenterblockH2>Треки</S.CenterblockH2>
          <Filter isLoading={isLoading}/>
          <S.CenterblockContent>
            <ContentTitlePlaylist isLoading={isLoading}/>
            <Playlist 
              isLoading={isLoading} isFetching={isFetching} tracks={data}/>
          </S.CenterblockContent>
        </S.MainCenterblock>
        <Sidebar isLoading={isLoading} setToken={setToken} isFetching={isFetching}/>
      </S.Main>
    )
}