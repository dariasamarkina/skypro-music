/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css';
import React from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Navigation() {
  const [visible, setVisibility] = React.useState(false)
  const toggleVisibility = () => setVisibility(!visible)

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src="img/logo.png" alt="logo" />
      </div>
      <a onClick={toggleVisibility}>
        <div className="nav__burger burger">
          <span className="burger__line" />
          <span className="burger__line" />
          <span className="burger__line" />
        </div>
      </a>
      {visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Мой плейлист
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
                Войти
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}