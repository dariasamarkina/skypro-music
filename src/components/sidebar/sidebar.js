/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CATEGORIES } from './categories';
import * as S from './styles';
import { SkeletonSidebarList } from '../skeleton/skeleton';
import { userContext } from '../../context/userContext';
import { selectIsPlaying, currentTrackSelector, selectIsLoading } from '../../store/selectors/script';
import { useGetAllTracksQuery } from '../../services/playlists';

const CategoriesList = ({ categories }) => {
  return (
    <S.SidebarList>
      {categories.map((category) => (
        <S.SidebarItem key={category.id}>
          <Link to={`/categories/${category.id}`}>
          <S.SidebarLink>
            <S.SidebarImg
              src={category.src}
              alt={category.alt}
            />
          </S.SidebarLink>
        </Link>
        </S.SidebarItem>
      ))}
    </S.SidebarList>
  )
}

function SidebarListLoaded() {
  return <CategoriesList categories={CATEGORIES} />
}

export function Sidebar() {

  const { setToken } = useContext(userContext);
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching } = useGetAllTracksQuery();

  const handleLogOut = () => {
    localStorage.clear();
    setToken(false);
    dispatch(currentTrackSelector({}));
    dispatch(selectIsPlaying(false));
    navigate('/login');
  }

  const userData = JSON.parse(localStorage.getItem('token'));
  const userName = userData.username;

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>
          {isLoading ? '' : userName}
        </S.SidebarPersonalName>
        <S.SidebarIcon className="sidebar__icon" onClick={handleLogOut}>
          <Link to="/login">
            <svg alt="logout">
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </Link>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
      {isLoading && isFetching ? <SkeletonSidebarList /> : <SidebarListLoaded />}
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}