/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './sidebar.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { SkeletonSidebarList } from '../skeleton';

function SidebarListLoaded() {
  return (
    <div className="sidebar__list">
      <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </a>
      </div>
      <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist02.png"
            alt="day's playlist"
          />
        </a>
      </div>
      <div className="sidebar__item">
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist03.png"
            alt="day's playlist"
          />
        </a>
      </div>
    </div>
  )
}

export function Sidebar({ isLoading }) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">{isLoading ? '' : "Sergey.Ivanov"}</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        {isLoading ? <SkeletonSidebarList/> : <SidebarListLoaded/>}
      </div>
    </div>
  )
}