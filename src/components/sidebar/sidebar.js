/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import * as S from './styles';
import { SkeletonSidebarList } from '../skeleton';

function SidebarListLoaded() {
  return (
    <S.SidebarList>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist02.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg
            src="img/playlist03.png"
            alt="day's playlist"
          />
        </S.SidebarLink>
      </S.SidebarItem>
    </S.SidebarList>
  )
}

export function Sidebar({ isLoading }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{isLoading ? '' : "Sergey.Ivanov"}</S.SidebarPersonalName>
        <S.SidebarIcon className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        {isLoading ? <SkeletonSidebarList/> : <SidebarListLoaded/>}
      </S.SidebarBlock>
    </S.MainSidebar>
  )
}