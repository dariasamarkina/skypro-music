/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { useGetAllTracksQuery } from '../../services/playlists';
import { filtersSelector } from '../../store/selectors/script';
import { setFilters, setFilteredPlaylist } from '../../store/slices/trackslice';

function PerformerListFilter() {
  const {data: playlist} = useGetAllTracksQuery();
  const authors = playlist?.map((track) => track.author);
  const authorsSet = new Set(authors);
  const allAuthors = Array.from(authorsSet);
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);

  const filterAuthor = (authorFilter) => {
    dispatch(setFilters({...filters, status: true, authors: authorFilter}))
  };

  const removeFilter = () => {
    dispatch(setFilters({...filters, status: false, authors: ''}))
  };

  const toggleAuthorFilter = (filter) => {
    if (!filters.status) {
      filterAuthor(filter);
    } else {
      removeFilter();
    }
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        {
          allAuthors?.map((author, index) => (
            <S.FilterText
              // eslint-disable-next-line react/no-array-index-key
              key={`author-${index}`}
              onClick={() => toggleAuthorFilter(author)}>
              {author}
          </S.FilterText>
          ))
        }
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

function YearListFilter() {
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const filterYears = (yearFilter) => {
    dispatch(setFilters({...filters, status: true, years: yearFilter}))
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
        <S.FilterText oncLick = {() => filterYears('По умолчанию')}>По умолчанию</S.FilterText>
        <S.FilterText oncLick = {() => filterYears('Сначала новые')}>Сначала новые</S.FilterText>
        <S.FilterText oncLick = {() => filterYears('Сначала старые')}>Сначала старые</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

function GenreListFilter() {
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const filterGenre = (genreFilter) => {
    dispatch(setFilters({ ...filters, status: true, genre: genreFilter }))
  };

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
      <S.FilterText onClick={() => filterGenre(false)}>По умолчанию</S.FilterText>
        <S.FilterText onClick={() => filterGenre('Классическая музыка')}>Классическая музыка</S.FilterText>
        <S.FilterText onClick={() => filterGenre('Электронная музыка')}>Электронная музыка</S.FilterText>
        <S.FilterText onClick={() => filterGenre('Рок музыка')}>Рок музыка</S.FilterText>
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

export function Filter() {
  const [performerFilter, setPerformerFilter] = useState(false);
  const [yearFilter, setYearFilter] = useState(false);
  const [genreFilter, setGenreFilter] = useState(false);

  const filters = useSelector(filtersSelector);
  const {data: playlist} = useGetAllTracksQuery();
  const [authorsFilter, setAuthorsFilter] = useState('');

  useEffect(() => {
    setAuthorsFilter(playlist?.map((track) => track.author))
  }, [playlist]);

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
        {performerFilter ? (
            <S.FilterActive
              onClick={togglePerformerCategory}
            > 
              исполнителю
            </S.FilterActive>
          ) : (
            <S.FilterButton
              onClick={togglePerformerCategory}
            >
              исполнителю
            </S.FilterButton>
          )}
          {performerFilter ? <PerformerListFilter /> : null}
        </S.FilterItems>

        <S.FilterItems>
            {yearFilter ? (
              <S.FilterActive
              onClick={toggleYearCategory}
              >
                году выпуска
              </S.FilterActive>
            ) : (
              <S.FilterButton
                onClick={toggleYearCategory}
                >
                  году выпуска
                </S.FilterButton>
            )}
            {yearFilter ? <YearListFilter /> : null}
        </S.FilterItems>

        <S.FilterItems>
          {genreFilter ? (
              <S.FilterActive
                onClick={toggleGenreCategory}
              >
                жанру
              </S.FilterActive>
            ) : (
              <S.FilterButton
                onClick={toggleGenreCategory}
              >
                жанру
              </S.FilterButton>
            )}
            {genreFilter ? <GenreListFilter /> : null}
        </S.FilterItems>
      </S.FilterBlock>
    </S.CenterblockFilter>
  )
}