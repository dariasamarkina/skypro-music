/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { useGetAllTracksQuery } from '../../services/playlists';
import { filtersSelector } from '../../store/selectors/script';
import { setFilters } from '../../store/slices/trackslice';

function PerformerListFilter({ countFilterAuthor, setCountFilterAuthor }) {
  const {data: playlist} = useGetAllTracksQuery();
  const authors = playlist?.map((track) => track.author);
  const authorsSet = new Set(authors);
  const allAuthors = Array.from(authorsSet);
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);

  const filterAuthors = (author) => {
    const filteredAuthor = {
      ...filters,
      status: true,
      authors: [...filters.authors, author],
    }
    dispatch(setFilters(filteredAuthor));
    setCountFilterAuthor(++countFilterAuthor);
  }

  const removeFilterAuthors = (author) => {
    const currentAuthors = [...filters.authors];
    const index = currentAuthors.indexOf(author);

    currentAuthors.splice(index, 1);

    const deletedAuthor = {
      ...filters,
      status: true,
      authors: [...currentAuthors],
    }

    dispatch(setFilters(deletedAuthor));
    setCountFilterAuthor(--countFilterAuthor);

    if (!deletedAuthor.authors.length) {
      dispatch(setFilters({ ...filters, status: false, authors: '' }));
      setCountFilterAuthor(0);
    }
  }

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
      {allAuthors?.map((author, index) =>
          !filters.authors.includes(author) ? (
            <S.FilterText
              key={`author-${index}`}
              onClick={() => filterAuthors(author)}
            >
              {author}
            </S.FilterText>
          ) : (
            <S.FilterTextActive
              key={`author-${index}`}
              onClick={() => removeFilterAuthors(author)}
            >
              {author}
            </S.FilterTextActive>
          ),
        )}
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
      {filters.years === 'По умолчанию' ? (
          <S.FilterTextActive onClick={() => filterYears('По умолчанию')}>
            По умолчанию
          </S.FilterTextActive>
        ) : (
          <S.FilterText onClick={() => filterYears('По умолчанию')}>
            По умолчанию
          </S.FilterText>
        )}

        {filters.status && filters.years === 'Сначала новые' ? (
          <S.FilterTextActive onClick={() => filterYears('Сначала новые')}>
            Сначала новые
          </S.FilterTextActive>
        ) : (
          <S.FilterText onClick={() => filterYears('Сначала новые')}>
            Сначала новые
          </S.FilterText>
        )}

        {filters.status && filters.years === 'Сначала старые' ? (
          <S.FilterTextActive onClick={() => filterYears('Сначала старые')}>
            Сначала старые
          </S.FilterTextActive>
        ) : (
          <S.FilterText onClick={() => filterYears('Сначала старые')}>
            Сначала старые
          </S.FilterText>
        )}
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

function GenreListFilter({ countFilterGenre, setCountFilterGenre }) {
  const { data: playlist } = useGetAllTracksQuery();
  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  
  const genre = playlist?.map((track) => track.genre);
  const genresSet = new Set(genre);
  const allGenres = Array.from(genresSet);

  const filterGenre = (genre) => {
    const filteredGenre = {
      ...filters,
      status: true,
      genre: [...filters.genre, genre],
    }
    dispatch(setFilters(filteredGenre));
    setCountFilterGenre(++countFilterGenre);
  }

  const removeFilterGenre = (genre) => {
    const currentGenre = [...filters.genre];
    const index = currentGenre.indexOf(genre);

    currentGenre.splice(index, 1);

    const deletedGenre = {
      ...filters,
      status: true,
      genre: [...currentGenre],
    }

    dispatch(setFilters(deletedGenre));
    setCountFilterGenre(--countFilterGenre);

    if (!deletedGenre.genre.length) {
      dispatch(setFilters({ ...filters, status: false, genre: '' }));
      setCountFilterGenre(0);
    }
  };

  return (
    <S.FilterScroll>
      <S.FilterTextListUl>
      {allGenres?.map((genre, index) =>
          !filters.genre.includes(genre) ? (
            <S.FilterText
              key={`genre-${index}`}
              onClick={() => filterGenre(genre)}
            >
              {genre}
            </S.FilterText>
          ) : (
            <S.FilterTextActive
              key={`genre-${index}`}
              onClick={() => removeFilterGenre(genre)}
            >
              {genre}
            </S.FilterTextActive>
          ),
        )}
      </S.FilterTextListUl>
    </S.FilterScroll>
  )
}

export function Filter() {
  const [performerFilter, setPerformerFilter] = useState(false);
  const [yearFilter, setYearFilter] = useState(false);
  const [genreFilter, setGenreFilter] = useState(false);

  const [countFilterAuthor, setCountFilterAuthor] = useState(0);
  const [countFilterGenre, setCountFilterGenre] = useState(0);

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
              <S.CircleCount $isVisible={countFilterAuthor !== 0}>
                {countFilterAuthor}
              </S.CircleCount>
            </S.FilterActive>
          ) : (
            <S.FilterButton
              onClick={togglePerformerCategory}
            >
              исполнителю
              <S.CircleCount />
            </S.FilterButton>
          )}
          {performerFilter ? (
            <PerformerListFilter
              setCountFilterAuthor={setCountFilterAuthor}
              countFilterAuthor={countFilterAuthor}
            />
          ) : null}
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
                <S.CircleCount $isVisible={countFilterGenre !== 0}>
                {countFilterGenre}
              </S.CircleCount>
              </S.FilterActive>
            ) : (
              <S.FilterButton
                onClick={toggleGenreCategory}
              >
                жанру
                <S.CircleCount />
              </S.FilterButton>
            )}
             {genreFilter ? (
            <GenreListFilter
              setCountFilterGenre={setCountFilterGenre}
              countFilterGenre={countFilterGenre}
            />
          ) : null}
        </S.FilterItems>
      </S.FilterBlock>
    </S.CenterblockFilter>
  )
}