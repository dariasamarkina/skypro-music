/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './styles';
import { userContext } from '../../context/userContext';
// import { selectIsPlaying, currentPlaylistSelector } from '../../store/selectors/script';
import { setCurrentTrack, setIsPlaying } from '../../store/slices/trackslice';


// eslint-disable-next-line import/prefer-default-export
export function Navigation({ setToken }) {
  const [visible, setVisibility] = React.useState(false);
  const toggleVisibility = () => setVisibility(!visible);

  const token = useContext(userContext);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    localStorage.removeItem('token', token);
    setToken(false);
    dispatch(setCurrentTrack(null));
    dispatch(setIsPlaying(false));
  }

  return (
    <S.MainNav>
      <S.NavLogo>
        <Link to="/">
          <S.LogoImage src="img/logo.png" alt="logo" />
        </Link>
      </S.NavLogo>
      <a onClick={toggleVisibility}>
        <S.NavBurger>
          <S.BurgerLine />
          <S.BurgerLine />
          <S.BurgerLine />
        </S.NavBurger>
      </a>
      {visible && (
        <S.NavMenu>
          <S.MenuList>

            <S.MenuItem>
              <Link to="/">
                <S.MenuLink>
                  Главное
                </S.MenuLink>
              </Link>
            </S.MenuItem>

            <S.MenuItem>
              <Link to="/favorites">
                <S.MenuLink>
                  Мой плейлист
                </S.MenuLink>
              </Link>
            </S.MenuItem>

            <S.MenuItem>
              <Link to="/login">
                <S.MenuLink onClick={handleLogOut}>
                  Выйти
                </S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}