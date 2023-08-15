/* eslint-disable jsx-a11y/anchor-is-valid */
import './nav.css';

// eslint-disable-next-line import/prefer-default-export
export function Navigation() {
    return (
       <div>
                    <div className="nav__burger burger">
              <span className="burger__line" />
              <span className="burger__line" />
              <span className="burger__line" />
            </div>
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
       </div>
    )
}