/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as S from './styles';
import { Navigation } from '../navmenu/nav';
import { Filter } from '../filter/filter';
import { ContentTitlePlaylist } from '../playlisttitle/playlisttitle';
import { Playlist } from "../playlist/playlist";
import { Sidebar } from "../sidebar/sidebar";
import { useGetAllTracksQuery } from '../../services/playlists';
import { setCurrentPlaylist, setIsLoading } from '../../store/slices/trackslice';

// eslint-disable-next-line import/prefer-default-export
export function Main({ isLoading, setToken }) {
  // const {token, setToken} = useContext(userContext);
  const dispatch = useDispatch();

  const { data, isFetching } = useGetAllTracksQuery();

  useEffect(() => {
    dispatch(setCurrentPlaylist(data));
    dispatch(setIsLoading(false))
  }, [data])

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