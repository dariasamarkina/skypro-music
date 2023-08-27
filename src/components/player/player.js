/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-unresolved */
import './player.css';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { SkeletonPlayer } from '../skeleton';

function TrackPlayerLoaded() {
  return <div className="track-play__contain">
      <div className="track-play__image">
        <svg className="track-play__svg" alt="music">
          <use xlinkHref="img/icon/sprite.svg#icon-note" />
        </svg>
      </div>
      <div className="track-play__author">
        <a className="track-play__author-link" href="http://">
          Ты та...
        </a>
      </div>
      <div className="track-play__album">
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      </div>
    </div>
}

export function Player({ isLoading }) {
  return (
    <div className="player__track-play track-play">
      {isLoading ? <SkeletonPlayer/> : <TrackPlayerLoaded/>}
      <div className="track-play__like-dis">
        <div className="track-play__like _btn-icon">
          <svg className="track-play__like-svg" alt="like">
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
        </div>
        <div className="track-play__dislike _btn-icon">
          <svg className="track-play__dislike-svg" alt="dislike">
            <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  )
}