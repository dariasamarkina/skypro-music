import './personal.css';

// eslint-disable-next-line import/prefer-default-export
export function Personal() {
    return (
        <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref ="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
    )
}
