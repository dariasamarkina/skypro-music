/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";
import * as S from './styles';

// eslint-disable-next-line import/prefer-default-export
export function Navigation() {
  const [visible, setVisibility] = React.useState(false)
  const toggleVisibility = () => setVisibility(!visible)

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
                <S.MenuLink href="#">
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
                <S.MenuLink>
                  Войти
                </S.MenuLink>
              </Link>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      )}
    </S.MainNav>
  )
}