import * as S from './styles';
import { Navigation } from '../navmenu/nav';
import { Filter } from '../filter/filter';
import { PlaylistHeader } from '../playlistheader/playlistheader';
import { Playlist } from "../playlist/playlist";
import { Sidebar } from "../sidebar/sidebar";

// eslint-disable-next-line import/prefer-default-export
export function Main({ isLoading }) {
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
      <Sidebar isLoading={isLoading}/>
    </S.Main>
  )
}