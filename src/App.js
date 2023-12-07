/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles';
import * as S from './styles';
import { AppRoutes } from "./routes";
import { userContext } from './context/userContext';
import { currentTrackSelector } from './store/selectors/script';
import { Bar } from './components/bar/bar';

function App() {
  const initialToken = localStorage.getItem('token', '');
  const [token, setToken] = useState(initialToken);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const changeState = () => setIsLoading(!isLoading)
    const timer =setTimeout(changeState, 5000)

    return () => clearTimeout(timer)
  }, []);

  const PlayTrack = useSelector(currentTrackSelector);

  return (
    <userContext.Provider value={{token, setToken}}>
      <S.Wrapper>
        <GlobalStyle />
        <AppRoutes token={token} setToken={setToken}/>
        {
          PlayTrack ? <Bar isLoading={isLoading}/> : null
        }
        <Outlet />
      </S.Wrapper>
    </userContext.Provider>
  )
}

export default App