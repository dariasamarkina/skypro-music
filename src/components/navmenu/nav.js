/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css';
import { useState } from 'react';

// eslint-disable-next-line import/prefer-default-export
export function Navigation() {

  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!visible);

    return (
       <div>
            <div onClick = {toggleVisibility} className="nav__burger burger">
              <span className="burger__line" />
              <span className="burger__line" />
              <span className="burger__line" />
            </div>

            {visible && (
            <div className="nav__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">Главное</a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">Мой плейлист</a>
                </li>
                <li className="menu__item">
                  <a href="../signin.html" className="menu__link">Войти</a>
                </li>
              </ul>
            </div>
        )}
        </div>
    )
}