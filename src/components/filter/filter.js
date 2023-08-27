/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import './filter.css';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from 'styled-components';

const StyledFilterScroll = styled.div`
  position: absolute;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 10px;
  width: 248px;
  height: 305px;
  padding: 34px;
  background-color: #313131;
  border-radius: 12px;
`

const StyledFilterTextListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-sizing: border-box;
  height: 241px;
  list-style: none;
  overflow-y: scroll;
  scrollbar-color: gray;

  &::-webkit-scrollbar {
    background-color: #313131;
    width: 4px;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }
  
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #4b4949;
  }
`

const StyledFilterText = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: none;
  color: #fff;

  &:hover {
    text-decoration: underline;
    color: #b672ff;
    cursor: pointer;
  }
`

const StyledCenterblockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

const StyledFilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

const StyledFilterBlock = styled.div`
  display: flex;
  gap: 10px;
`

const StyledFilterItems = styled.div`
`

const StyledFilterButton = styled.div`
  position: relative;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;
`

const StyledFilterActive = styled.div`
  border-color: #b672ff;
  color: #b672ff;
`

// const Styled = styled.``

function PerformerListFilter() {
  return (
    <StyledFilterScroll>
      <StyledFilterTextListUl>
        <StyledFilterText>Nero</StyledFilterText>
        <StyledFilterText>Dynoro, Outwork, Mr. Gee</StyledFilterText>
        <StyledFilterText>Ali Backgor</StyledFilterText>
        <StyledFilterText>Стоункат, Psychopath</StyledFilterText>
        <StyledFilterText>Jaded, Will Clarke, AR/CO</StyledFilterText>
        <StyledFilterText>Blue Fountain, Zeds Dead</StyledFilterText>
        <StyledFilterText>
          HYBIT, Mr. Black, Offer Nissim, Hi Profile
        </StyledFilterText>
        <StyledFilterText>minthaze</StyledFilterText>
        <StyledFilterText>Calvin Harris, Disciples</StyledFilterText>
        <StyledFilterText>Tom Boxer</StyledFilterText>
      </StyledFilterTextListUl>
    </StyledFilterScroll>
  )
}

function YearListFilter() {
  return (
    <StyledFilterScroll>
      <StyledFilterTextListUl>
        <StyledFilterText>По умолчанию</StyledFilterText>
        <StyledFilterText>Сначала новые</StyledFilterText>
        <StyledFilterText>Сначала старые</StyledFilterText>
      </StyledFilterTextListUl>
    </StyledFilterScroll>
  )
}

function GenreListFilter() {
  return (
    <StyledFilterScroll>
      <StyledFilterTextListUl>
        <StyledFilterText>Хип-хоп</StyledFilterText>
        <StyledFilterText>Поп-музыка</StyledFilterText>
        <StyledFilterText>Техно</StyledFilterText>
        <StyledFilterText>Инди</StyledFilterText>
        <StyledFilterText>Рок-музыка</StyledFilterText>
        <StyledFilterText>Кантри</StyledFilterText>
        <StyledFilterText>Джаз</StyledFilterText>
        <StyledFilterText>Классическая</StyledFilterText>
      </StyledFilterTextListUl>
    </StyledFilterScroll>
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
    <StyledCenterblockFilter>
      <StyledFilterTitle>Искать по:</StyledFilterTitle>
      <StyledFilterBlock>
        <StyledFilterItems>
          <div
            className={`filter__button button-author _btn-text ${
              performerFilter ? 'filter-active' : null
            }`}
            onClick={togglePerformerCategory}
          >
            исполнителю
          </div>
          {performerFilter ? <PerformerListFilter /> : null}
        </StyledFilterItems>

        <StyledFilterItems>
          <div
            className={`filter__button button-year _btn-text ${
              yearFilter ? 'filter-active' : null
            }`}
            onClick={toggleYearCategory}
          >
            году выпуска
          </div>
          {yearFilter ? <YearListFilter /> : null}
        </StyledFilterItems>

        <StyledFilterItems>
          <div
            className={`filter__button button-genre _btn-text ${
              genreFilter ? 'filter-active' : null
            }`}
            onClick={toggleGenreCategory}
          >
            жанру
          </div>
          {genreFilter ? <GenreListFilter /> : null}
        </StyledFilterItems>
      </StyledFilterBlock>
    </StyledCenterblockFilter>
  )
}