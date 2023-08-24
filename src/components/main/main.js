import './main.css';
import { Navigation } from '../navmenu/nav';
import { Filter } from '../filter/filter';
import { PlaylistHeader } from '../playlistheader/playlistheader';
import { Playlist } from "../playlist/playlist";
import { Sidebar } from "../sidebar/sidebar";

// eslint-disable-next-line import/prefer-default-export
export function Main({ isLoading }) {
  return (
    <main className="main">
      <Navigation/>
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use xlinkHref="img/icon/sprite.svg#icon-search" />
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <Filter isLoading={isLoading}/>
        <div className="centerblock__content">
          <PlaylistHeader isLoading={isLoading}/>
          <Playlist isLoading={isLoading}/>
        </div>
      </div>
      <Sidebar isLoading={isLoading}/>
    </main>
  )
}