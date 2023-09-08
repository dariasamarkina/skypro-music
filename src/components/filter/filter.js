/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import * as S from './styles';

function PerformerListFilter() {
  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText>Nero</S.FilterText>
        <S.FilterText>Dynoro, Outwork, Mr. Gee</S.FilterText>
        <S.FilterText>Ali Backgor</S.FilterText>
        <S.FilterText>Стоункат, Psychopath</S.FilterText>
        <S.FilterText>Jaded, Will Clarke, AR/CO</S.FilterText>
        <S.FilterText>Blue Fountain, Zeds Dead</S.FilterText>
        <S.FilterText>
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </S.FilterText>
        <S.FilterText>minthaze</S.FilterText>
        <S.FilterText>Calvin Harris, Disciples</S.FilterText>
        <S.FilterText>Tom Boxer</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

function YearListFilter() {
  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText>По умолчанию</S.FilterText>
        <S.FilterText>Сначала новые</S.FilterText>
        <S.FilterText>Сначала старые</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

function GenreListFilter() {
  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText>Хип-хоп</S.FilterText>
        <S.FilterText>Поп-музыка</S.FilterText>
        <S.FilterText>Техно</S.FilterText>
        <S.FilterText>Инди</S.FilterText>
        <S.FilterText>Рок-музыка</S.FilterText>
        <S.FilterText>Кантри</S.FilterText>
        <S.FilterText>Джаз</S.FilterText>
        <S.FilterText>Классическая</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

export function Filter() {
  const [performerFilter, setPerformerFilter] = useState(false)
  const [yearFilter, setYearFilter] = useState(false)
  const [genreFilter, setGenreFilter] = useState(false)

  const togglePerformerCategory = () => {
    setPerformerFilter((prev) => !prev)
    setYearFilter(false)
    setGenreFilter(false)
  }

  const toggleYearCategory = () => {
    setYearFilter((prev) => !prev)
    setPerformerFilter(false)
    setGenreFilter(false)
  }

  const toggleGenreCategory = () => {
    setGenreFilter((prev) => !prev)
    setPerformerFilter(false)
    setYearFilter(false)
  }

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <S.FilterBlock>
        <S.FilterItems>
          <div
            className={`filter__button button-author _btn-text ${
              performerFilter ? 'filter-active' : null
            }`}
            onClick={togglePerformerCategory}
          >
            исполнителю
          </div>
          {performerFilter ? <PerformerListFilter /> : null}
        </S.FilterItems>

        <S.FilterItems>
          <div
            className={`filter__button button-year _btn-text ${
              yearFilter ? 'filter-active' : null
            }`}
            onClick={toggleYearCategory}
          >
            году выпуска
          </div>
          {yearFilter ? <YearListFilter /> : null}
        </S.FilterItems>

        <S.FilterItems>
          <div
            className={`filter__button button-genre _btn-text ${
              genreFilter ? 'filter-active' : null
            }`}
            onClick={toggleGenreCategory}
          >
            жанру
          </div>
          {genreFilter ? <GenreListFilter /> : null}
        </S.FilterItems>
      </S.FilterBlock>
    </S.CenterblockFilter>
  )
}