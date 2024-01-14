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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import { ContentTitlePlaylist } from '../../components/playlisttitle/playlisttitle'; 
import { Playlist } from '../../components/playlist/playlist';
import * as S from './styles';
import { setCurrentTrack, setIsPlaying, setIsLoading, setCurrentPlaylist, setFilters } from '../../store/slices/trackslice';
import { useGetFavoriteTracksQuery } from '../../services/playlists';
import { Navigation } from '../../components/navmenu/nav';
import { filtersSelector } from '../../store/selectors/script';

export const Favorites = ({ isLoading }) => {
    const { token, setToken } = useContext(userContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filters = useSelector(filtersSelector);

    const searchFilter = (event) => {
        dispatch(setFilters({ ...filters, searchValue: event.target.value, status: true }))
      }

    const { data, isFetching, error, refetch } = useGetFavoriteTracksQuery();
    useEffect(() => {
        refetch();
    }, [])

    useEffect(() => {
        dispatch(setCurrentPlaylist(data));
        dispatch(setIsLoading(false));
      }, [data]);

      const handleLogOut = () => {
        localStorage.clear();
        setToken(false);
        dispatch(setCurrentTrack(null));
        dispatch(setIsPlaying(false));
        navigate('/login');
      }

    if (localStorage.getItem('token', token)) {
        return (
            <div>
                <S.Main>
                    <Navigation setToken={setToken}/>
                    <S.MainCenterblock>
                        <S.HeaderBlock>
                            <S.CenterblockSearch>
                                <S.SearchSvg>
                                <use xlinkHref="/img/icon/sprite.svg#icon-search" />
                                </S.SearchSvg>
                                <S.SearchText
                                type="search"
                                placeholder="Поиск"
                                name="search"
                                onChange={(event) => searchFilter(event)}
                                />
                            </S.CenterblockSearch>

                            <S.SidebarIcon className="sidebar__icon" onClick={handleLogOut}>
                                <Link to="/login">
                                    <svg alt="logout">
                                    <use xlinkHref="/img/icon/sprite.svg#logout" />
                                    </svg>
                                </Link>
                            </S.SidebarIcon>
                    </S.HeaderBlock>

                        <S.CenterblockH2>Мои Треки</S.CenterblockH2>
                        <S.CenterblockContent>
                        <ContentTitlePlaylist isLoading={isLoading} />
                        {error ? (
                            <p>Не удалось заргузить плейлист: {error.error}</p>
                        ) : (
                            <Playlist isLoading={isLoading} isFetching={isFetching} tracks={data} />
                        )}
                        </S.CenterblockContent>
                    </S.MainCenterblock>
            </S.Main>
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
    