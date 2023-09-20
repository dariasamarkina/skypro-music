/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-else-return */
/* eslint-disable no-undef */
import { useNavigate } from "react-router-dom";
import * as S from './styles';
import { Navigation } from '../navmenu/nav';
import { Filter } from '../filter/filter';
import { PlaylistHeader } from '../playlistheader/playlistheader';
import { Playlist } from "../playlist/playlist";
import { Sidebar } from "../sidebar/sidebar";

// eslint-disable-next-line import/prefer-default-export
export function Main({ isLoading, setToken }) {
  if (localStorage.getItem('token', 'token')) {
    return (
      <S.Main>
        <Navigation/>
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
            <PlaylistHeader isLoading={isLoading}/>
            <Playlist isLoading={isLoading}/>
          </S.CenterblockContent>
        </S.MainCenterblock>
        <Sidebar isLoading={isLoading} setToken={setToken}/>
      </S.Main>
    )
  } else {
      const navigate = useNavigate();
      useEffect(() => {
        setToken(false);
        navigate('/login', { replace: true })
      }, [])
  }

}