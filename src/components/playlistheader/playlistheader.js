/* eslint-disable import/prefer-default-export */
import './playlistheader.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export function PlaylistHeader() {
  return (
    <div className="content__title playlist-title">
      <div className="playlist-title__col col01">Трек</div>
      <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
      <div className="playlist-title__col col03">АЛЬБОМ</div>
      <div className="playlist-title__col col04">
        <svg className="playlist-title__svg" alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
    </div>
  )
}