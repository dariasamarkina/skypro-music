/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from './categories';
import * as S from './styles';
import { SkeletonSidebarList } from '../skeleton/skeleton';

const CategoriesList = ({ categories }) => {
  return (
    <S.SidebarList>
      {categories.map((category) => (
        <S.SidebarItem key={category.id}>
          <Link to={`/categories/${category.id}`}>
          <S.SidebarLink>
            <S.SidebarImg
              src={category.src}
              alt={category.alt}
            />
          </S.SidebarLink>
        </Link>
        </S.SidebarItem>
      ))}
    </S.SidebarList>
  )
}

function SidebarListLoaded() {
  return <CategoriesList categories={CATEGORIES} />
  
  
  // (
    // <S.SidebarList>

    //   <S.SidebarItem>
    //     <Link to="/categories">
    //       <S.SidebarLink>
    //         <S.SidebarImg
    //           src="img/playlist01.png"
    //           alt="day's playlist"
    //         />
    //       </S.SidebarLink>
    //     </Link>
    //   </S.SidebarItem>

    //   <S.SidebarItem>
    //     <Link to="/categories">
    //       <S.SidebarLink>
    //         <S.SidebarImg
    //           src="img/playlist02.png"
    //           alt="day's playlist"
    //         />
    //       </S.SidebarLink>
    //       </Link>
    //   </S.SidebarItem>
      

    //   <S.SidebarItem>
    //     <Link to="/categories">
    //       <S.SidebarLink>
    //         <S.SidebarImg
    //           src="img/playlist03.png"
    //           alt="day's playlist"
    //         />
    //       </S.SidebarLink>
    //     </Link>
    //   </S.SidebarItem>
    // </S.SidebarList>
  // )
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